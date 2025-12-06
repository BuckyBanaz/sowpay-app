import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  const userEmail = location.state?.email || "user@example.com";
  const userPhone = location.state?.phone || "+91 XXXXX XXXXX";
  const userType = location.state?.userType || "customer";

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to customer dashboard for customers
      navigate("/dashboard");
    }, 2000);
  };

  const handleResendOTP = () => {
    setResendTimer(60);
    setOtp("");
    
    // Simulate resend
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link to="/register" className="inline-flex items-center gap-2 mb-6 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Verify Your Account</h1>
          <p className="text-muted-foreground">We've sent a verification code to your email and phone</p>
        </div>

        {/* OTP Card */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle>Enter OTP</CardTitle>
            <CardDescription>
              Enter the 6-digit code we sent to verify your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => { e.preventDefault(); handleVerifyOTP(); }} className="space-y-6">
              {/* Contact Info Display */}
              <div className="space-y-3 p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Email: <span className="text-foreground font-medium">{userEmail}</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Phone: <span className="text-foreground font-medium">{userPhone}</span></span>
                </div>
              </div>

              {/* OTP Input */}
              <div className="space-y-3">
                <Label className="text-foreground">Verification Code</Label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="border-border/50" />
                      <InputOTPSlot index={1} className="border-border/50" />
                      <InputOTPSlot index={2} className="border-border/50" />
                      <InputOTPSlot index={3} className="border-border/50" />
                      <InputOTPSlot index={4} className="border-border/50" />
                      <InputOTPSlot index={5} className="border-border/50" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              {/* Verify Button */}
              <Button 
                type="submit" 
                variant="hero"
                className="w-full"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">or</span>
              </div>
            </div>

            {/* Resend OTP */}
            <div className="space-y-3">
              <p className="text-center text-sm text-muted-foreground">
                Didn't receive the code?
              </p>
              <Button 
                type="button"
                variant="outline" 
                className="w-full border-border/50"
                onClick={handleResendOTP}
                disabled={resendTimer > 0}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
              </Button>
            </div>

            {/* Help Text */}
            <p className="text-center text-xs text-muted-foreground mt-4">
              Having trouble? <a href="#" className="text-primary hover:text-primary/80">Contact support</a>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          This code will expire in <span className="font-semibold text-foreground">10 minutes</span>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
