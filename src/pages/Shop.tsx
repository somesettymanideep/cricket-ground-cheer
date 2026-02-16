import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart, Search, SlidersHorizontal, X, Star, IndianRupee } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageBanner from "@/components/PageBanner";
import bannerShop from "@/assets/banner-shop.jpg";
import productLed from "@/assets/product-led.jpg";
import productPortable from "@/assets/product-portable.jpg";
import productManual from "@/assets/product-manual.jpg";
import productCustom from "@/assets/product-custom.jpg";

type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
};

const allProducts: Product[] = [
  { id: 1, name: "LED Pro Stadium Scoreboard", slug: "led", category: "LED Scoreboards", price: 185000, originalPrice: 210000, image: productLed, rating: 4.8, reviews: 42, badge: "Best Seller", inStock: true },
  { id: 2, name: "LED Academy Scoreboard", slug: "led", category: "LED Scoreboards", price: 95000, image: productLed, rating: 4.6, reviews: 28, inStock: true },
  { id: 3, name: "LED Mini Display Board", slug: "led", category: "LED Scoreboards", price: 55000, image: productLed, rating: 4.4, reviews: 15, badge: "New", inStock: true },
  { id: 4, name: "Portable Tournament Scoreboard", slug: "portable", category: "Portable Scoreboards", price: 42000, originalPrice: 48000, image: productPortable, rating: 4.7, reviews: 36, badge: "Popular", inStock: true },
  { id: 5, name: "Portable Club Scoreboard", slug: "portable", category: "Portable Scoreboards", price: 28000, image: productPortable, rating: 4.5, reviews: 22, inStock: true },
  { id: 6, name: "Portable Mini Scoreboard", slug: "portable", category: "Portable Scoreboards", price: 18000, image: productPortable, rating: 4.3, reviews: 11, inStock: false },
  { id: 7, name: "Manual Pro Scoreboard", slug: "manual", category: "Manual Scoreboards", price: 22000, image: productManual, rating: 4.6, reviews: 54, inStock: true },
  { id: 8, name: "Manual Standard Scoreboard", slug: "manual", category: "Manual Scoreboards", price: 15000, originalPrice: 18000, image: productManual, rating: 4.4, reviews: 38, badge: "Value Pick", inStock: true },
  { id: 9, name: "Manual Basic Scoreboard", slug: "manual", category: "Manual Scoreboards", price: 8500, image: productManual, rating: 4.2, reviews: 19, inStock: true },
  { id: 10, name: "Custom Stadium Display", slug: "custom", category: "Custom Scoreboards", price: 350000, image: productCustom, rating: 5.0, reviews: 8, badge: "Premium", inStock: true },
  { id: 11, name: "Custom Hybrid Scoreboard", slug: "custom", category: "Custom Scoreboards", price: 150000, image: productCustom, rating: 4.9, reviews: 12, inStock: true },
  { id: 12, name: "Custom Branded Scoreboard", slug: "custom", category: "Custom Scoreboards", price: 120000, image: productCustom, rating: 4.7, reviews: 6, inStock: true },
];

const categories = ["LED Scoreboards", "Portable Scoreboards", "Manual Scoreboards", "Custom Scoreboards"];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

const Shop = () => {
  const { addItem } = useCart();
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 400000]);
  const [sortBy, setSortBy] = useState("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    let result = allProducts.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (inStockOnly && !p.inStock) return false;
      return true;
    });

    switch (sortBy) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "reviews": result.sort((a, b) => b.reviews - a.reviews); break;
    }
    return result;
  }, [search, selectedCategories, priceRange, sortBy, inStockOnly]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setPriceRange([0, 400000]);
    setInStockOnly(false);
    setSortBy("featured");
  };

  const activeFilterCount = selectedCategories.length + (inStockOnly ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 400000 ? 1 : 0);

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm hover:text-primary transition-colors">
              <Checkbox
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <span>{cat}</span>
              <span className="ml-auto text-muted-foreground text-xs">
                ({allProducts.filter((p) => p.category === cat).length})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-3">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={400000}
          step={5000}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-3">Availability</h3>
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <Checkbox checked={inStockOnly} onCheckedChange={(v) => setInStockOnly(!!v)} />
          <span>In Stock Only</span>
        </label>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
          <X className="w-3 h-3 mr-1" /> Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      <PageBanner
        title="Shop Scoreboards"
        subtitle="Browse our complete range of professional cricket scoreboards."
        image={bannerShop}
      />

      <section className="py-8 md:py-12">
        <div className="container">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search scoreboards..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-1" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:inline">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden mb-8 p-4 rounded-lg border bg-card">
              <FilterSidebar />
            </div>
          )}

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24">
                <FilterSidebar />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">No products match your filters.</p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>Clear Filters</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((product, i) => (
                    <ScrollReveal key={product.id} delay={i * 0.05}>
                      <Card className="group overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.badge && (
                            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                              {product.badge}
                            </Badge>
                          )}
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                              <Badge variant="secondary" className="text-sm">Out of Stock</Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4 flex flex-col flex-1">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
                          <h3 className="font-display font-semibold text-lg leading-tight mb-2">{product.name}</h3>

                          <div className="flex items-center gap-1 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                          </div>

                          <div className="mt-auto flex items-end justify-between">
                            <div>
                              <span className="text-xl font-bold text-foreground">{formatPrice(product.price)}</span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through ml-2">
                                  {formatPrice(product.originalPrice)}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="flex-1" asChild>
                              <Link to={`/products/${product.slug}`}>View Details</Link>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={!product.inStock}
                              onClick={() => addItem({ id: product.id, name: product.name, slug: product.slug, price: product.price, image: product.image })}
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
