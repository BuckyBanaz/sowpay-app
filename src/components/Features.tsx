import { 
  Wallet, 
  MapPin, 
  Star, 
  Truck, 
  Shield, 
  Users,
  Store,
  TrendingUp
} from "lucide-react";

const customerFeatures = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "One wallet linked to your mobile number for all transactions across shops.",
  },
  {
    icon: MapPin,
    title: "Nearby Shops",
    description: "Discover partner shops near you with ratings, distance, and cashback offers.",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Rate shopkeepers after scanning and help the community find the best stores.",
  },
  {
    icon: TrendingUp,
    title: "Track Savings",
    description: "Monitor your total savings, purchase points, and team points in real-time.",
  },
];

const shopkeeperFeatures = [
  {
    icon: Store,
    title: "Easy Registration",
    description: "Register your shop with OTP verification and start accepting customers instantly.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Opt-in for home delivery services and reach more customers in your area.",
  },
  {
    icon: Shield,
    title: "KYC Verified",
    description: "Complete KYC with Aadhaar for secure withdrawals and bank transfers.",
  },
  {
    icon: Users,
    title: "Team Income",
    description: "Earn locked team income from referrals and grow your business network.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            For Everyone
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features for <span className="text-primary">Customers</span> & <span className="text-accent">Shopkeepers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a shopper earning rewards or a business owner growing your customer base, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Customer Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Customers</h3>
            </div>
            
            <div className="space-y-4">
              {customerFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-card hover:shadow-soft transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopkeeper Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <Store className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Shopkeepers</h3>
            </div>
            
            <div className="space-y-4">
              {shopkeeperFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-card hover:shadow-soft transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
