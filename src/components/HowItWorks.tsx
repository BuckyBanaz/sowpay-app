import { QrCode, ShoppingBag, Coins, Gift } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Scan QR Code",
    description: "Open the app and scan the shop's unique QR code when you visit any Sowpay Mart partner store.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Enter Amount",
    description: "Enter your shopping amount. The shopkeeper will confirm it and your transaction is recorded instantly.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Coins,
    title: "Earn SMP Points",
    description: "Receive SMP (Sowpay Mart Points) based on the shop category. Points are credited in multiples of 100.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Gift,
    title: "Redeem Rewards",
    description: "Use your accumulated SMP points worth ₹0.50 each for future purchases or withdraw to your wallet.",
    color: "bg-accent/10 text-accent",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How <span className="text-primary">Sowpay Mart</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start earning rewards in just 4 simple steps. No complicated setup, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 relative z-10">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
