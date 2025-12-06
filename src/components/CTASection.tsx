import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Store } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Earning Rewards?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Join thousands of smart shoppers and shopkeepers already saving and earning with Sowpay Mart.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Smartphone className="w-5 h-5" />
                  Download App
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Store className="w-5 h-5" />
                  Register Your Shop
                </Button>
              </div>

              <div className="flex justify-center gap-8 mt-8 text-primary-foreground/80 text-sm">
                <span>✓ Free to join</span>
                <span>✓ No hidden fees</span>
                <span>✓ Instant rewards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
