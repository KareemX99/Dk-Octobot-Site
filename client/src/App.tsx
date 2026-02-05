import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PortfolioDetail from "./pages/PortfolioDetail";
import LiveChatDemo from "./components/LiveChatDemo";
import ExitIntentPopup from "./components/ExitIntentPopup";
import LimitedTimeOffer from "./components/LimitedTimeOffer";

function Router() {
  return (
    <Switch>
      {/* Root redirect to English */}
      <Route path="/">
        {() => <Redirect to="/en" />}
      </Route>
      
      {/* Language-specific home pages */}
      <Route path="/en" component={Home} />
      <Route path="/ar" component={Home} />
      
      {/* Features */}
      <Route path="/en/features" component={Features} />
      <Route path="/ar/features" component={Features} />
      
      {/* Industries */}
      <Route path="/en/industries" component={Industries} />
      <Route path="/ar/industries" component={Industries} />
      
      {/* Portfolio */}
      <Route path="/en/portfolio" component={Portfolio} />
      <Route path="/ar/portfolio" component={Portfolio} />
      <Route path="/en/portfolio/:slug" component={PortfolioDetail} />
      <Route path="/ar/portfolio/:slug" component={PortfolioDetail} />
      
      {/* Pricing */}
      <Route path="/en/pricing" component={Pricing} />
      <Route path="/ar/pricing" component={Pricing} />
      
      {/* About */}
      <Route path="/en/about" component={About} />
      <Route path="/ar/about" component={About} />
      
      {/* Contact */}
      <Route path="/en/contact" component={Contact} />
      <Route path="/ar/contact" component={Contact} />
      
      {/* FAQ */}
      <Route path="/en/faq" component={FAQ} />
      <Route path="/ar/faq" component={FAQ} />
      
      {/* Blog */}
      <Route path="/en/blog" component={Blog} />
      <Route path="/ar/blog" component={Blog} />
      <Route path="/en/blog/:slug" component={BlogPost} />
      <Route path="/ar/blog/:slug" component={BlogPost} />
      
      {/* Legal Pages */}
      <Route path="/en/privacy" component={Legal} />
      <Route path="/ar/privacy" component={Legal} />
      
      <Route path="/en/terms" component={Legal} />
      <Route path="/ar/terms" component={Legal} />
      
      <Route path="/en/security" component={Legal} />
      <Route path="/ar/security" component={Legal} />
      
      {/* Placeholder routes */}
      <Route path="/en/blog" component={Home} />
      <Route path="/ar/blog" component={Home} />
      
      <Route path="/en/careers" component={Home} />
      <Route path="/ar/careers" component={Home} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <LimitedTimeOffer />
            <Router />
            <LiveChatDemo />
            <ExitIntentPopup />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
