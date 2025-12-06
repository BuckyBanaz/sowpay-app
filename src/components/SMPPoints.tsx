import { Info } from "lucide-react";

const smpTable = [
  { category: "1%", customer: 6, distributor: 1, ch: 1, dh: 0.5, sh: 0.5, gh: 0.5, co: 0.25, com: 0.25, total: 10 },
  { category: "2%", customer: 20, distributor: 2, ch: 2, dh: 1, sh: 1, gh: 1, co: 0.5, com: 0.5, total: 28 },
  { category: "5%", customer: 40, distributor: 4, ch: 4, dh: 2, sh: 2, gh: 2, co: 1, com: 1, total: 56 },
  { category: "10%", customer: 60, distributor: 6, ch: 6, dh: 3, sh: 3, gh: 3, co: 1.5, com: 1.5, total: 84 },
  { category: "15%", customer: 80, distributor: 8, ch: 8, dh: 4, sh: 4, gh: 4, co: 2, com: 2, total: 112 },
  { category: "20%", customer: 100, distributor: 10, ch: 10, dh: 5, sh: 5, gh: 5, co: 2.5, com: 2.5, total: 140 },
];

const SMPPoints = () => {
  return (
    <section id="smp-points" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Rewards System
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SMP <span className="text-primary">Points System</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Earn SMP (Sowpay Mart Points) on every ₹100 purchase. Higher category shops mean more rewards!
          </p>
        </div>

        {/* Value Card */}
        <div className="max-w-md mx-auto mb-12">
          <div className="gradient-primary rounded-2xl p-6 text-center text-primary-foreground">
            <p className="text-lg mb-2">SMP Point Value</p>
            <p className="text-5xl font-bold mb-2">1 SMP = ₹0.50</p>
            <p className="text-primary-foreground/80 text-sm">Points are generated in multiples of 100</p>
          </div>
        </div>

        {/* Points Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">Purchase (₹100)</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">Customer</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">Distributor</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">CH</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">DH</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">SH</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">GH</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">Co</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">Com</th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-primary">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {smpTable.map((row, index) => (
                    <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-4 font-medium text-foreground">{row.category}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.customer}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.distributor}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.ch}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.dh}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.sh}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.gh}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.co}</td>
                      <td className="px-4 py-4 text-center text-muted-foreground">{row.com}</td>
                      <td className="px-4 py-4 text-center font-bold text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-5 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Calculated Monthly</h4>
            </div>
            <p className="text-sm text-muted-foreground">SMPs are calculated on the 10th, 20th, and 30th of each month.</p>
          </div>
          
          <div className="bg-card rounded-xl p-5 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-foreground">Carry Forward</h4>
            </div>
            <p className="text-sm text-muted-foreground">Unused SMPs carry forward to the next period. Never lose your points!</p>
          </div>
          
          <div className="bg-card rounded-xl p-5 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Min. Withdrawal</h4>
            </div>
            <p className="text-sm text-muted-foreground">₹100 minimum for bank transfers, in multiples of 100.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMPPoints;
