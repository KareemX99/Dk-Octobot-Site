import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function LimitedTimeOffer() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = sessionStorage.getItem('offerBannerDismissed');
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    // Countdown timer
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('offerBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-primary via-cyan to-primary animate-gradient-x">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3 flex-1">
            <Sparkles className="h-5 w-5 flex-shrink-0 animate-pulse" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-bold text-sm sm:text-base">
                {language === 'en' ? '🎉 Limited Time Offer!' : '🎉 عرض لفترة محدودة!'}
              </span>
              <span className="text-xs sm:text-sm opacity-90">
                {language === 'en'
                  ? 'Get 30% OFF on all annual plans'
                  : 'احصل على خصم 30% على جميع الخطط السنوية'}
              </span>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1 text-xs font-mono">
              <div className="bg-white/20 px-2 py-1 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>

            <Button
              size="sm"
              variant="secondary"
              className="text-xs sm:text-sm font-semibold"
              onClick={() => setLocation(`/${language}/pricing`)}
            >
              {language === 'en' ? 'Claim Offer' : 'احصل على العرض'}
            </Button>

            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
