import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Gift, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ExitIntentPopup() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    // Check if popup was already shown in this session
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Add delay before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before activating

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate email submission
    toast.success(
      language === 'en'
        ? 'Success! Check your email for the special offer.'
        : 'نجح! تحقق من بريدك الإلكتروني للحصول على العرض الخاص.'
    );
    setIsOpen(false);
    setEmail('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            {language === 'en' ? 'Wait! Don\'t Miss This Offer!' : 'انتظر! لا تفوت هذا العرض!'}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {language === 'en'
              ? 'Get 20% OFF your first month when you sign up now!'
              : 'احصل على خصم 20% على شهرك الأول عند التسجيل الآن!'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
            <Clock className="h-5 w-5 text-destructive" />
            <span className="text-lg font-bold text-destructive">
              {language === 'en' ? 'Offer expires in: ' : 'ينتهي العرض في: '}
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Benefits */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span>{language === 'en' ? '24/7 AI-powered customer support' : 'دعم عملاء مدعوم بالذكاء الاصطناعي على مدار الساعة'}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span>{language === 'en' ? 'Multi-platform integration' : 'تكامل متعدد المنصات'}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span>{language === 'en' ? 'No credit card required' : 'لا حاجة لبطاقة ائتمان'}</span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder={language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-center"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-cyan hover:shadow-tech-lg transition-all"
              size="lg"
            >
              {language === 'en' ? 'Claim My 20% Discount' : 'احصل على خصم 20%'}
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground">
            {language === 'en'
              ? 'Limited time offer. Terms and conditions apply.'
              : 'عرض لفترة محدودة. تطبق الشروط والأحكام.'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
