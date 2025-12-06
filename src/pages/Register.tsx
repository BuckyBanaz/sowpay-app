import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, User, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState<"customer" | "shopkeeper">("customer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    address: "",
    referralCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    
    // Simulate signup API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/otp-verification", {
        state: {
          email: formData.email,
          phone: formData.mobileNumber,
          userType: userType,
          name: formData.name,
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img 
              src="/svg/main-logo3.svg" 
              alt="SowPay Mart Logo" 
              className="h-16 w-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Join Sowpay Mart</h1>
          <p className="text-muted-foreground mt-2">Create your account to start earning rewards</p>
        </div>

        {/* Registration Form with Tabs */}
        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Choose your account type and fill in your details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs 
              value={userType} 
              onValueChange={(value) => setUserType(value as "customer" | "shopkeeper")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="customer" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Customer
                </TabsTrigger>
                <TabsTrigger value="shopkeeper" className="flex items-center gap-2">
                  <Store className="w-4 h-4" />
                  Shopkeeper
                </TabsTrigger>
              </TabsList>

              {/* Customer Registration */}
              <TabsContent value="customer" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-foreground">
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      name="mobileNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Address Field */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-foreground">
                      Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Your address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Referral Code Field */}
                  <div className="space-y-2">
                    <Label htmlFor="referral" className="text-foreground">
                      Referral Code (Optional)
                    </Label>
                    <Input
                      id="referral"
                      name="referralCode"
                      type="text"
                      placeholder="Enter referral code if you have one"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus-visible:ring-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-foreground">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus-visible:ring-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero"
                    className="w-full mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Customer Account"}
                  </Button>
                </form>
              </TabsContent>

              {/* Shopkeeper Registration */}
              <TabsContent value="shopkeeper" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="shop-name" className="text-foreground">
                      Shop Name
                    </Label>
                    <Input
                      id="shop-name"
                      name="name"
                      type="text"
                      placeholder="Your Shop Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Owner Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="owner-name" className="text-foreground">
                      Owner Name
                    </Label>
                    <Input
                      id="owner-name"
                      type="text"
                      placeholder="Owner's full name"
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="shop-email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="shop-email"
                      name="email"
                      type="email"
                      placeholder="shop@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="shop-mobile" className="text-foreground">
                      Mobile Number
                    </Label>
                    <Input
                      id="shop-mobile"
                      name="mobileNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Shop Address Field */}
                  <div className="space-y-2">
                    <Label htmlFor="shop-address" className="text-foreground">
                      Shop Address
                    </Label>
                    <Input
                      id="shop-address"
                      name="address"
                      type="text"
                      placeholder="Your shop address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus-visible:ring-primary"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="shop-password" className="text-foreground">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="shop-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus-visible:ring-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="shop-confirm-password" className="text-foreground">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="shop-confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus-visible:ring-primary pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero"
                    className="w-full mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Shopkeeper Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-muted-foreground">
              <Link 
                to="/login"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="text-primary hover:text-primary/80">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-primary hover:text-primary/80">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
