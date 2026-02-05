/**
 * Live Chat Demo Widget:
 * - Floating chat button
 * - Chat interface with AI responses
 * - Simulated conversation flow
 * - Bilingual support
 */

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const demoResponses: Record<string, Record<string, string>> = {
  en: {
    greeting: "Hello! 👋 I'm OctoBot, your AI assistant. How can I help you today?",
    pricing: "Our pricing starts at $99/month for the Basic plan. We offer flexible plans for businesses of all sizes. Would you like to see our full pricing details?",
    features: "DK-OctoBot offers 24/7 customer support, multi-platform integration (WhatsApp, Facebook, Instagram), AI-powered responses, and analytics dashboard. What specific feature interests you?",
    demo: "I'd be happy to show you a demo! You can book a free consultation with our team, or I can guide you through our features right now. Which would you prefer?",
    contact: "You can reach us at octobotchatbot@gmail.com or call us at +(20) 1505354810. Our team is available Sunday-Thursday, 9 AM - 6 PM GMT+2.",
    default: "That's a great question! Let me connect you with our team for detailed information. You can also explore our website for more details about our services.",
  },
  ar: {
    greeting: "مرحباً! 👋 أنا أوكتوبوت، مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟",
    pricing: "تبدأ أسعارنا من 99 دولارًا شهريًا للخطة الأساسية. نقدم خططًا مرنة للشركات بجميع أحجامها. هل ترغب في رؤية تفاصيل الأسعار الكاملة؟",
    features: "يقدم DK-OctoBot دعمًا للعملاء على مدار الساعة، وتكاملًا متعدد المنصات (واتساب، فيسبوك، إنستغرام)، وردودًا مدعومة بالذكاء الاصطناعي، ولوحة تحليلات. ما الميزة المحددة التي تهمك؟",
    demo: "يسعدني أن أريك عرضًا توضيحيًا! يمكنك حجز استشارة مجانية مع فريقنا، أو يمكنني إرشادك عبر ميزاتنا الآن. أيهما تفضل؟",
    contact: "يمكنك التواصل معنا على octobotchatbot@gmail.com أو الاتصال بنا على +(20) 1505354810. فريقنا متاح من الأحد إلى الخميس، 9 صباحًا - 6 مساءً بتوقيت GMT+2.",
    default: "هذا سؤال رائع! دعني أوصلك بفريقنا للحصول على معلومات مفصلة. يمكنك أيضًا استكشاف موقعنا لمزيد من التفاصيل حول خدماتنا.",
  },
};

export default function LiveChatDemo() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send greeting message when chat opens
      setTimeout(() => {
        addBotMessage(demoResponses[language].greeting);
      }, 500);
    }
  }, [isOpen, language]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const responses = demoResponses[language];

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('سعر') || lowerMessage.includes('تكلفة')) {
      return responses.pricing;
    }
    if (lowerMessage.includes('feature') || lowerMessage.includes('ميزة') || lowerMessage.includes('خاصية')) {
      return responses.features;
    }
    if (lowerMessage.includes('demo') || lowerMessage.includes('عرض') || lowerMessage.includes('تجربة')) {
      return responses.demo;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('تواصل') || lowerMessage.includes('اتصال')) {
      return responses.contact;
    }
    return responses.default;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const response = getBotResponse(inputValue);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-primary to-cyan shadow-tech-lg hover:shadow-tech-xl transition-all duration-300 group relative z-10"
            >
              <Bot className="h-7 w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
            </Button>
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping -z-10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-0 right-0 md:bottom-4 md:right-4 z-50 w-full h-full md:w-96 md:h-[600px] md:max-h-[90vh] flex flex-col md:rounded-2xl bg-background border-t md:border border-border shadow-tech-xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-cyan text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">DK-OctoBot</h3>
                  <p className="text-xs opacity-90">
                    {language === 'en' ? 'Online • Instant Reply' : 'متصل • رد فوري'}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'bot' 
                      ? 'bg-gradient-to-br from-primary to-cyan' 
                      : 'bg-muted'
                  }`}>
                    {message.sender === 'bot' ? (
                      <Bot className="h-4 w-4 text-white" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === 'bot'
                      ? 'bg-card border border-border'
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString(language === 'ar' ? 'ar-EG' : 'en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'en' ? 'Type your message...' : 'اكتب رسالتك...'}
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-primary to-cyan hover:shadow-tech-lg transition-all"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {language === 'en' 
                  ? 'This is a demo. Try asking about pricing, features, or contact info!'
                  : 'هذا عرض توضيحي. جرب السؤال عن الأسعار أو الميزات أو معلومات الاتصال!'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
