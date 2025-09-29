import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FoodLogger.me - Track Your Diet for Better Health | Nostos Labs',
  description: 'Track your daily nutrition and generate professional reports for your doctor. Free food logging app with Firebase sync and PDF export capabilities.',
  keywords: ['food logging', 'diet tracking', 'nutrition', 'health', 'medical reports'],
};

export default function FoodLoggerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              ← Back to Nostos Labs
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-xl">
              <span className="text-4xl">🍽️</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            foodlogger.me
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Track your daily nutrition and generate professional reports for your doctor. 
            Your diet may be the key to better health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://foodlogger.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors text-lg shadow-lg"
            >
              Start Food Logging →
            </a>
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Everything You Need to Track Your Health
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Mobile Optimized</h3>
              <p className="text-muted-foreground">
                Designed for iPhone and mobile devices. Log your meals quickly and easily wherever you are.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Firebase Sync</h3>
              <p className="text-muted-foreground">
                Your data syncs across all devices with secure Firebase authentication and storage.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">PDF Export</h3>
              <p className="text-muted-foreground">
                Generate professional reports for your doctor with detailed nutrition and health metrics.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Privacy First</h3>
              <p className="text-muted-foreground">
                Your health data is private and secure. Use locally or with optional cloud sync.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Comprehensive</h3>
              <p className="text-muted-foreground">
                Track meals, snacks, water intake, sleep, and health metrics all in one place.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Fast & Free</h3>
              <p className="text-muted-foreground">
                Lightning-fast React app that works offline. Completely free to use with no ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Start Tracking Your Health Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join others who are using foodlogger.me to better understand their diet and improve their health outcomes.
          </p>
          <a
            href="https://foodlogger.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors text-lg shadow-lg"
          >
            Launch foodlogger.me →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 <Link href="/" className="text-foreground hover:text-primary font-medium">Nostos Labs</Link>. Building tools for better health.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://foodlogger.me/privacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <Link 
                href="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                More Apps
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}