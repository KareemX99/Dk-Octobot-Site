import { useState, useEffect, useRef, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Send, Mic, Square } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    image?: string;
    isBot: boolean;
    isVoice?: boolean;
}

// Generate a unique session ID for this visitor
const generateSessionId = () => {
    const stored = sessionStorage.getItem('octobot_session_id');
    if (stored) return stored;
    const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('octobot_session_id', newId);
    return newId;
};

export default function HeroChatDemo() {
    const { language, isRTL } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const sessionId = useRef(generateSessionId());
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initial bot greeting
    useEffect(() => {
        const greeting = language === 'ar'
            ? "خليك سابق الكل.. خليك مع أكــتــبــوت👋"
            : "Hello! 👋 Welcome to OctoBot. How can I help you today?";

        setMessages([{ id: 1, text: greeting, isBot: true }]);
    }, [language]);

    // Auto-scroll to bottom (within container only)
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Focus input on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Cleanup recording on unmount
    useEffect(() => {
        return () => {
            if (recordingIntervalRef.current) {
                clearInterval(recordingIntervalRef.current);
            }
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                mediaRecorderRef.current.stop();
            }
        };
    }, []);

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue('');

        // Add user message
        const userMsg: Message = {
            id: Date.now(),
            text: userMessage,
            isBot: false,
        };
        setMessages(prev => [...prev, userMsg]);

        // Show typing indicator
        setIsTyping(true);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionId.current,
                }),
            });

            const data = await response.json();

            // Simulate typing delay for natural feel
            await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

            setIsTyping(false);

            // Add bot response with optional image
            const botMsg: Message = {
                id: Date.now() + 1,
                text: data.response || (language === 'ar' ? 'شكراً لرسالتك! 🙏' : 'Thanks for your message! 🙏'),
                image: data.image || undefined,
                isBot: true,
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Chat error:', error);
            setIsTyping(false);

            const errorMsg: Message = {
                id: Date.now() + 1,
                text: language === 'ar'
                    ? 'عذراً، حصل مشكلة. جرب تاني! 🔄'
                    : 'Sorry, something went wrong. Please try again! 🔄',
                isBot: true,
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
            // Keep focus on input after sending - use setTimeout to ensure DOM is ready
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());

                // Create audio blob
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

                // Send voice message
                await sendVoiceMessage(audioBlob);
            };

            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);

            // Start timer
            recordingIntervalRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);

        } catch (error) {
            console.error('Error accessing microphone:', error);
            const errorMsg: Message = {
                id: Date.now(),
                text: language === 'ar'
                    ? 'عذراً، مش قادر أوصل للمايكروفون. تأكد من إعطاء الصلاحية. 🎤'
                    : 'Sorry, cannot access microphone. Please grant permission. 🎤',
                isBot: true,
            };
            setMessages(prev => [...prev, errorMsg]);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);

            if (recordingIntervalRef.current) {
                clearInterval(recordingIntervalRef.current);
                recordingIntervalRef.current = null;
            }
        }
    };

    const sendVoiceMessage = async (audioBlob: Blob) => {
        // Add user voice message indicator
        const userMsg: Message = {
            id: Date.now(),
            text: language === 'ar' ? `🎤 رسالة صوتية (${recordingTime} ثانية)` : `🎤 Voice message (${recordingTime}s)`,
            isBot: false,
            isVoice: true,
        };
        setMessages(prev => [...prev, userMsg]);

        setIsTyping(true);
        setIsLoading(true);

        try {
            // Convert blob to base64
            const reader = new FileReader();
            const base64Promise = new Promise<string>((resolve) => {
                reader.onloadend = () => {
                    const base64 = reader.result as string;
                    resolve(base64.split(',')[1]); // Remove data:audio/webm;base64, prefix
                };
            });
            reader.readAsDataURL(audioBlob);
            const audioBase64 = await base64Promise;

            const response = await fetch('/api/chat/voice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    audio: audioBase64,
                    sessionId: sessionId.current,
                }),
            });

            const data = await response.json();

            setIsTyping(false);

            // Add bot response
            const botMsg: Message = {
                id: Date.now() + 1,
                text: data.response || (language === 'ar' ? 'شكراً لرسالتك الصوتية! 🙏' : 'Thanks for your voice message! 🙏'),
                image: data.image || undefined,
                isBot: true,
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Voice chat error:', error);
            setIsTyping(false);

            const errorMsg: Message = {
                id: Date.now() + 1,
                text: language === 'ar'
                    ? 'عذراً، حصل مشكلة في إرسال الرسالة الصوتية. جرب تاني! 🔄'
                    : 'Sorry, something went wrong with the voice message. Please try again! 🔄',
                isBot: true,
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
            setRecordingTime(0);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-card via-card to-card/80 rounded-xl overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-cyan/10">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="/bot-avatar.jpg" alt="OctoBot" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                    <div className="font-semibold text-sm">DK-OctoBot</div>
                    <div className="text-xs text-green-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        {language === 'ar' ? 'متصل الآن' : 'Online now'}
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <div ref={messagesContainerRef} className="flex-1 p-4 space-y-3 overflow-y-auto min-h-[280px] max-h-[350px] scroll-smooth">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 ${message.isBot ? (isRTL ? 'flex-row-reverse' : 'flex-row') : (isRTL ? 'flex-row' : 'flex-row-reverse')
                            }`}
                    >
                        {message.isBot && (
                            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                                <img src="/bot-avatar.jpg" alt="OctoBot" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                        )}
                        <div
                            className={`max-w-[75%] rounded-2xl text-sm leading-relaxed overflow-hidden ${message.isBot
                                ? 'bg-muted text-foreground rounded-bl-sm'
                                : 'bg-gradient-to-r from-primary to-cyan text-white rounded-br-sm'
                                }`}
                        >
                            {/* Message Text */}
                            <div className="px-4 py-2.5">{message.text}</div>

                            {/* Message Image */}
                            {message.image && (
                                <div className="px-2 pb-2">
                                    <img
                                        src={message.image}
                                        alt="Bot response image"
                                        className="rounded-lg max-w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                                        onClick={() => window.open(message.image, '_blank')}
                                    />
                                </div>
                            )}
                        </div>
                        {!message.isBot && (
                            <div className="w-7 h-7 rounded-full bg-steel/20 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-steel" />
                            </div>
                        )}
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className={`flex items-end gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                            <img src="/bot-avatar.jpg" alt="OctoBot" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={sendMessage} className="p-3 border-t border-border/50 bg-muted/30">
                <div className="flex items-center gap-2 bg-background rounded-full px-4 py-2 border border-border/50 focus-within:border-primary/50 transition-colors">
                    {isRecording ? (
                        <>
                            {/* Recording UI */}
                            <div className="flex-1 flex items-center gap-3">
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-sm text-red-500 font-medium">
                                    {language === 'ar' ? 'جاري التسجيل...' : 'Recording...'} {formatTime(recordingTime)}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={stopRecording}
                                className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-all"
                            >
                                <Square className="w-4 h-4 text-white" />
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Normal Input UI */}
                            <button
                                type="button"
                                onClick={startRecording}
                                disabled={isLoading}
                                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted-foreground/20 transition-all"
                            >
                                <Mic className="w-4 h-4 text-muted-foreground" />
                            </button>
                            <input
                                ref={inputRef}
                                type="text"
                                dir="auto"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type a message...'}
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-cyan flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow transition-all"
                            >
                                <Send className="w-4 h-4 text-white" />
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}
