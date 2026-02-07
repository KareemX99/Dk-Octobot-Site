import { useState, useEffect, useRef, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bot, User, Send } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    image?: string;
    isBot: boolean;
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
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const sessionId = useRef(generateSessionId());

    // Initial bot greeting
    useEffect(() => {
        const greeting = language === 'ar'
            ? "أهلاً وسهلاً! 👋 أنا أكتوبوت، تحب أساعدك في إيه النهاردة؟"
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

    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-card via-card to-card/80 rounded-xl overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-cyan/10">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="/bot-avatar.jpg" alt="OctoBot" className="w-full h-full object-cover" />
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
                                <img src="/bot-avatar.jpg" alt="OctoBot" className="w-full h-full object-cover" />
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
                            <img src="/bot-avatar.jpg" alt="OctoBot" className="w-full h-full object-cover" />
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
                </div>
            </form>
        </div>
    );
}
