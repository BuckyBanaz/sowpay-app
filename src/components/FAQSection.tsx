import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are SMP (Sowpay Mart Points)?",
    answer: "SMP stands for Sowpay Mart Points - our reward currency. Every time you shop at a partner store and scan their QR code, you earn SMP based on your purchase amount. 1 SMP = ₹0.50, and points are generated in multiples of 100 (e.g., for ₹270 at a 5% shop, you get SMP for ₹200, and ₹70 carries forward to your next purchase).",
  },
  {
    question: "How do I earn SMP points?",
    answer: "Simply scan the shop's QR code using the Sowpay Mart app, enter your shopping amount, and wait for the shopkeeper to confirm. Based on the shop's category (1% to 20%), you'll receive SMP points. Higher category shops give more rewards!",
  },
  {
    question: "When are SMP points calculated?",
    answer: "SMP points are calculated and credited on the 10th, 20th, and 30th of each month. Don't worry - unused SMPs from one period carry forward to the next, so you never lose your points!",
  },
  {
    question: "How does the wallet system work?",
    answer: "Your wallet is linked to your registered mobile number. All transactions across different shops are stored in the same wallet. You can track your SMP balance, total savings, purchase points, and team points in real-time through the app.",
  },
  {
    question: "What is the minimum withdrawal amount?",
    answer: "The minimum withdrawal is ₹100 for bank transfers, and it must be in multiples of 100. For wallet-to-wallet transfers, the minimum is ₹100. KYC verification (Aadhaar, email, mobile, bank details) is required for withdrawals.",
  },
  {
    question: "How do I register my shop on Sowpay Mart?",
    answer: "Shopkeepers can register by providing: referral code, shop name, location details, mobile number with OTP verification, Google location, shop category, and shop images. After verification, you'll receive a unique QR code for your shop.",
  },
  {
    question: "What are the different shop categories?",
    answer: "Shops are categorized from 1% to 20% based on their type. Higher percentage categories offer more SMP rewards to customers. For example, a 5% category shop gives 56 total SMP per ₹100 purchase, while a 20% category shop gives 140 SMP.",
  },
  {
    question: "Can I refer friends and earn rewards?",
    answer: "Yes! You can share your referral link and earn team points when your referrals shop. The app tracks your referral network and you can see your team income in your wallet dashboard.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about SMP points, wallet system, and earning rewards with Sowpay Mart.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-none shadow-card px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a
            href="mailto:support@sowpaymart.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
