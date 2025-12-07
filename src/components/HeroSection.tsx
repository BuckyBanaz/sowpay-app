import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Gift, Store } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Earn rewards on every purchase
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Shop Smart,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Earn More</span> with{" "}
              <span className="text-primary">Sowpay Mart</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Scan, shop, and earn SMP (Sowpay Mart Points) at local stores near you. 
              Turn every ₹100 into real rewards. Join thousands of smart shoppers today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.sowpaymart.com/sign-in?auth=shopkepper", "_blank")}
              >
                Register Your Shop
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Partner Shops</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">₹5L+</div>
                <div className="text-sm text-muted-foreground">Rewards Given</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Phone mockup */}
              <div className="w-72 h-[580px] mx-auto bg-foreground rounded-[3rem] p-3 shadow-card">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screen */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-sm text-muted-foreground">Welcome back,</p>
                        <p className="text-lg font-bold text-foreground">Rahul!</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-secondary-foreground">R</span>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="gradient-primary rounded-2xl p-5 mb-6">
                      <p className="text-primary-foreground/80 text-sm mb-1">Your SMP Balance</p>
                      <p className="text-3xl font-bold text-primary-foreground">2,450</p>
                      <p className="text-primary-foreground/80 text-sm mt-1">≈ ₹1,225 value</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { icon: QrCode, label: "Scan" },
                        { icon: Store, label: "Shops" },
                        { icon: Gift, label: "Rewards" },
                      ].map((item, i) => (
                        <div key={i} className="bg-secondary rounded-xl p-4 text-center">
                          <item.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                          <span className="text-xs font-medium text-foreground">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Nearby Shop */}
                    <p className="text-sm font-semibold text-foreground mb-3">Nearby Shops</p>
                    <div className="bg-muted rounded-xl p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Store className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">Sharma General Store</p>
                        <p className="text-xs text-muted-foreground">500m away • 5% cashback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-20 -left-8 w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center animate-float">
                <Gift className="w-10 h-10 text-accent" />
              </div>
              <div className="absolute bottom-32 -right-4 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <QrCode className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
