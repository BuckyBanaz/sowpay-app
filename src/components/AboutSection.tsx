import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers and shopkeepers, ensuring everyone benefits from our platform.",
  },
  {
    icon: Award,
    title: "Trust & Transparency",
    description: "Every transaction is secure and transparent. No hidden fees, no surprises.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We continuously improve our platform to deliver the best rewards experience.",
  },
];

const team = [
  {
    name: "Jogender Ji",
    role: "Founder & CEO",
    description: "Visionary leader driving Sowpay Mart's mission to revolutionize local shopping rewards in India.",
  },
  {
    name: "Deepak Bhambu",
    role: "Technical Lead",
    description: "Building robust technology solutions to power seamless transactions and reward distributions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Sowpay Mart</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering local businesses and rewarding smart shoppers across India.
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-secondary to-muted rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sowpay Mart Pvt Ltd was founded with a simple vision: to bridge the gap between local 
              shopkeepers and customers while creating a rewarding shopping experience for everyone. 
              We believe that every rupee spent at local stores should bring value back to the community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our innovative SMP (Sowpay Mart Points) system ensures that customers earn real rewards 
              on every purchase, while shopkeepers grow their business through increased customer loyalty 
              and our referral network. Together, we're building a stronger local economy.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-primary">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create India's largest rewards ecosystem that empowers local shopkeepers, 
              delights customers with real savings, and strengthens community bonds through 
              every transaction.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-accent">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the trusted partner for every local shop in India, making rewards 
              and savings accessible to millions of customers while driving growth for 
              small businesses nationwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{member.name}</h4>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-muted rounded-2xl px-8 py-6">
            <p className="text-sm text-muted-foreground mb-1">Registered as</p>
            <p className="text-lg font-bold text-foreground">Sowpay Mart Pvt Ltd</p>
            <p className="text-sm text-muted-foreground mt-2">Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
