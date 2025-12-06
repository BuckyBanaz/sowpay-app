import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, User, MapPin, Search, Mic, Sliders, ChevronLeft, ChevronRight, MapPin as MapPinIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const categories = [
    { name: "All", icon: "🛒" },
    { name: "Grocery", icon: "🥬" },
    { name: "Electronic", icon: "📱" },
    { name: "Fashion", icon: "👗" },
    { name: "Stationery", icon: "📝" },
    { name: "Hardware", icon: "🔧" },
    { name: "Pharmacy", icon: "💊" },
  ];

  const shops = [
    {
      id: 82,
      name: "Singla General Store",
      category: "Cosmetic",
      address: "Singla Genral store chopta bazar Hansi",
      image: "https://via.placeholder.com/300x200?text=Singla+Store",
      discount: "20%",
      rating: 4.5,
    },
    {
      id: 83,
      name: "Fashion Hub",
      category: "Clothing",
      address: "Hansi Market, Haryana",
      image: "https://via.placeholder.com/300x200?text=Fashion+Hub",
      discount: "15%",
      rating: 4.2,
    },
    {
      id: 84,
      name: "Electronics Plus",
      category: "Electronics",
      address: "Faridabad, Haryana",
      image: "https://via.placeholder.com/300x200?text=Electronics+Plus",
      discount: "10%",
      rating: 4.8,
    },
  ];

  const handlePrevCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev === 0 ? Math.max(0, categories.length - 5) : prev - 1
    );
  };

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev < categories.length - 5 ? prev + 1 : prev
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Green Header with Location and Profile */}
      <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <div>
              <p className="text-sm opacity-90">HOME</p>
              <p className="font-semibold">Your Location</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-2 rounded-full text-sm font-mono">
              REF-16390AA7
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <User className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <h2 className="text-lg font-semibold">आपका स्वागत है आज आप क्या खरीदना पसंद करेंगे?</h2>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search Anything"
              className="pl-10 pr-4 py-2 rounded-lg border-border/50"
            />
          </div>
          <Button size="icon" variant="outline" className="border-border/50">
            <Mic className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="outline" className="border-border/50">
            <Sliders className="w-5 h-5" />
          </Button>
        </div>

        {/* Categories Carousel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <div className="flex gap-2">
              <button
                onClick={handlePrevCategory}
                className="p-1 hover:bg-secondary rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextCategory}
                className="p-1 hover:bg-secondary rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg min-w-fit transition-all ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-xs font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Shops List */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Nearby Shops</h3>

          {shops.map((shop) => (
            <Card key={shop.id} className="overflow-hidden border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  {/* Shop Image */}
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-full h-full object-cover"
                    />
                    {shop.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        SAVE {shop.discount}
                      </div>
                    )}
                  </div>

                  {/* Shop Info */}
                  <div className="flex-1 py-3 pr-3">
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Shop ID: #{shop.id}
                        </p>
                        <h4 className="font-semibold text-foreground truncate">
                          {shop.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {shop.category}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <p className="text-xs text-primary font-medium">
                          {shop.address}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="hero"
                          className="h-8 text-xs"
                        >
                          View Shop
                        </Button>
                        <button className="text-primary hover:text-primary/80 text-xs font-medium flex items-center gap-1">
                          <MapPinIcon className="w-3 h-3" />
                          View on Map
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
        <div className="flex justify-around items-center p-3 max-w-2xl mx-auto">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-primary">
            <div className="w-8 h-8 flex items-center justify-center text-xl">🏠</div>
            <span className="text-xs">Home</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <div className="w-8 h-8 flex items-center justify-center text-xl">🎁</div>
            <span className="text-xs">Deals</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <div className="w-8 h-8 flex items-center justify-center text-xl">🏪</div>
            <span className="text-xs">Shops</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <div className="w-8 h-8 flex items-center justify-center text-xl">📱</div>
            <span className="text-xs">Wallet</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <div className="w-8 h-8 flex items-center justify-center text-xl">👤</div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
