import React from "react";
import { Menu, Search, Phone, User, Heart, ShoppingCart, Store, CircleHelp, MapPin, X } from "lucide-react";

const navItems = [
  { id: "sofas", label: "Sofas" },
  { id: "living", label: "Living" },
  { id: "bedroom", label: "Bedroom" },
  { id: "mattress", label: "Mattress" },
  { id: "dining", label: "Dining" },
  { id: "storage", label: "Storage" },
  { id: "office", label: "Study & Office" },
  { id: "outdoor", label: "Outdoor & Balcony" },
  { id: "furnishings", label: "Furnishings" },
  { id: "lighting", label: "Lighting & Decor" },
  { id: "interiors", label: "Interiors" },
  { id: "wsluxe", label: "WS Luxe" },
];

const menuData = {
  sofas: {
    columns: [
      ["3-Seater Sofas", "2-Seater Sofas", "Recliners", "Sectional Sofas", "Sofa Sets"],
      ["Fabric Sofas", "Leather Sofas", "Wooden Sofas", "Sofa Chairs"],
      ["Modular Sofas", "L-Shape Sofas", "Sofa Beds", "Ottomans"]
    ],
    featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },
  living: {
    columns: [
      ["TV Units", "Coffee Tables", "Side Tables", "Console Tables", "Shoe Racks"],
      ["Bookshelves", "Display Units", "Bar Cabinets", "Wall Shelves"],
      ["Bean Bags", "Floor Lamps", "Wall Art", "Cushions"]
    ],
   featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    
     
    ]
  },
  bedroom: {
    columns: [
      ["Beds", "Wardrobes", "Bedside Tables", "Dressing Tables", "Chest of Drawers"],
      ["King Beds", "Queen Beds", "Single Beds", "Bunk Beds"],
      ["Sliding Wardrobes", "Hinged Wardrobes", "Walk-in Wardrobes"]
    ],
    featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },

  mattress: {
    columns: [
      ["Memory Foam", "Orthopedic", "Latex Mattress", "Spring Mattress"],
      ["King Mattress", "Queen Mattress", "Single Mattress"],
      ["Mattress Protectors", "Toppers", "Pillows"]
    ],
    featured: [
      {
        label: "Memory Foam Mattress",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/m/e/memory-foam-mattress-pepperfry-example.jpg"
      },
      {
        label: "Premium Orthopedic Mattress",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/o/r/orthopedic-mattress-pepperfry-example.jpg"
      }
    ]
  },

  dining: {
    columns: [
      ["Dining Sets", "Dining Tables", "Dining Chairs"],
      ["Sideboards", "Kitchen Cabinets", "Crockery Units"],
      ["Bar Units", "Serving Trolleys", "Dining Benches"]
    ],
    featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },

  storage: {
    columns: [
      ["Wardrobes", "Storage Cabinets", "Bookshelves"],
      ["Shoe Racks", "Chest of Drawers", "Kitchen Storage"],
      ["Wall Shelves", "Modular Storage", "Trunks"]
    ],
   featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },

  office: {
    columns: [
      ["Office Chairs", "Study Tables", "Work Desks"],
      ["Bookshelves", "File Cabinets", "Storage Units"],
      ["Laptop Tables", "Study Lamps", "Whiteboards"]
    ],
   featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },

  outdoor: {
    columns: [
      ["Outdoor Sofas", "Balcony Sets", "Patio Tables"],
      ["Swings", "Hammocks", "Garden Benches"],
      ["Planters", "Outdoor Storage", "Outdoor Lighting"]
    ],
   featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },

  furnishings: {
    columns: [
      ["Bedsheets", "Blankets", "Quilts"],
      ["Curtains", "Cushions", "Throws"],
      ["Rugs", "Carpets", "Table Linen"]
    ],
   featured: [
      { label: "1 Lac+ Options", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { label: "Sofas", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" }
    ]
  },

  lighting: {
    columns: [
      ["Ceiling Lights", "Pendant Lights", "Chandeliers"],
      ["Table Lamps", "Floor Lamps", "Wall Sconces"],
      ["LED Strips", "Decor Lamps", "Smart Lights"]
    ],
    featured: [
      {
        label: "Black Pendant Lamp",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/bamboo-hanging-cane-fabric-lamp-for-home-decoration-rattan-webbing-pendant-lamp--ceiling-light-for-h-n2j2gf.jpg"
      },
     
    ]
  },

  interiors: {
    columns: [
      ["Modular Kitchens", "Wardrobe Designs", "TV Unit Designs"],
      ["Wall Paint", "Wallpaper", "False Ceilings"],
      ["Full Home Interiors", "Interior Consultation", "3D Design"]
    ],
    featured: [
      {
        label: "Modular Kitchen Design",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/k/e/494x544/kevin-l-shaped-modular-kitchen-designed-in-bwr-ply-kevin-l-shaped-modular-kitchen-designed-in-bwr-pl-vpylyx.jpg"
      },
      {
        label: "3D Interior Package",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/5/x/494x544/5x3-ft-abstract-radha-krishna-3d-relief-mural-wall-art-5x3-ft-abstract-radha-krishna-3d-relief-mural-lyytai.jpg"
      }
    ]
  },

  wsluxe: {
    columns: [
      ["Luxury Sofas", "Designer Beds", "Premium Tables"],
      ["Imported Furniture", "Handcrafted Pieces", "Marble Furniture"],
      ["Art Furniture", "High-End Lighting", "Premium Decor"]
    ],
    featured: [
      {
        label: "Luxury Velvet Sofa",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/l/u/494x544/lucca-italian-marble-six-seater-dining-table-lucca-italian-marble-six-seater-dining-table-gokdnz.jpg"
      },
      {
        label: "Marble Coffee Table",
        image:
          "https://ii1.pepperfry.com/media/catalog/product/r/o/494x544/round-2-tier-marble-top-coffee-table-in-gold-colour-round-2-tier-marble-top-coffee-table-in-gold-col-79a1ou.jpg"
      }
    ]
  } 

};

export default function Header() {
  const [openId, setOpenId] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  return (
    <header className="w-full bg-white font-sans">
      <div className="hidden md:block w-full" style={{ background: "#F9F8F2", height: "60px" }}>
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center text-sm text-gray-700">
          <div className="flex gap-6 items-center">
            <span className="cursor-pointer font-semibold" style={{ color: "#FF7F19" }}>Furniture</span>
            <span className="cursor-pointer hover:text-orange-500">Home Interiors</span>
            <span className="cursor-pointer hover:text-orange-500">Bulk order</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500">
              <Phone size={14} style={{ color: "#FF7F19" }} />
              +91 9628209929
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500">
              <MapPin size={14} style={{ color: "#FF7F19" }} />
              Track Order
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-orange-500">
              <CircleHelp size={14} style={{ color: "#FF7F19" }} />
              Help Center
            </span>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="hidden md:flex justify-between items-center">
            <div className="text-2xl font-bold select-none">
              <span style={{ color: "#FF7F19" }}>SAND</span>
              <span className="text-black">ICO</span>
            </div>
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input type="search" className="border w-full rounded-full px-5 py-2.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" placeholder="Search Product, Furniture & More..." />
                <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: "#FF7F19" }} />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center cursor-pointer group">
                <Store size={22} style={{ color: "#FF7F19" }} />
                <span className="text-xs mt-1 text-gray-700 group-hover:text-orange-500">Stores</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <User size={22} style={{ color: "#FF7F19" }} />
                <span className="text-xs mt-1 text-gray-700 group-hover:text-orange-500">Profile</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <Heart size={22} style={{ color: "#FF7F19" }} />
                <span className="text-xs mt-1 text-gray-700 group-hover:text-orange-500">Wishlist (0)</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <ShoppingCart size={22} style={{ color: "#FF7F19" }} />
                <span className="text-xs mt-1 text-gray-700 group-hover:text-orange-500">Cart (1)</span>
              </div>
            </div>
          </div>

          <div className="flex md:hidden justify-between items-center">
            <button className="p-1" onClick={() => setMobileOpen(true)}>
              <Menu size={24} className="text-gray-700" />
            </button>
            <div className="text-xl font-bold select-none">
              <span style={{ color: "#FF7F19" }}>SAND</span>
              <span className="text-black">ICO</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
                <Search size={22} className="text-gray-700" />
              </button>
              <Heart size={22} className="text-gray-700" />
              <ShoppingCart size={22} className="text-gray-700" />
            </div>
          </div>

          {mobileSearchOpen && (
            <div className="md:hidden mt-3">
              <div className="relative">
                <input type="search" className="border w-full rounded-full px-4 py-2 pr-10 text-sm" placeholder="Search for '3 Seater Sofas'" />
                <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#FF7F19" }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="hidden md:block border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative" onMouseEnter={() => setOpenId(item.id)} onMouseLeave={() => setOpenId(null)}>
                <button className={`py-3.5 px-4 text-sm font-medium transition-all ${openId === item.id ? "border-b-2" : "text-gray-700 hover:text-orange-500"}`} style={openId === item.id ? { color: "#FF7F19", borderColor: "#FF7F19" } : {}}>
                  {item.label}
                </button>
                {openId === item.id && menuData[item.id] && (
                  <div className="fixed left-0 w-full bg-white shadow-lg border-t z-50">
                    <div className="max-w-7xl mx-auto p-8">
                      <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-9 grid grid-cols-3 gap-6">
                          {menuData[item.id].columns.map((col, i) => (
                            <ul key={i} className="space-y-2.5">
                              {col.map((link) => (
                                <li key={link} className="text-gray-700 text-sm hover:text-orange-500 cursor-pointer transition-colors">{link}</li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        {menuData[item.id].featured && (
                          <div className="col-span-3 space-y-4">
                            {menuData[item.id].featured.map((feature, idx) => (
                              <div key={idx} className="text-center cursor-pointer hover:scale-105 transition-transform">
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                                  <img src={feature.image} alt={feature.label} className="w-full h-32 object-cover" />
                                </div>
                                <p className="text-sm font-medium text-gray-700 mt-2">{feature.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 md:hidden overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-bold">
                <span style={{ color: "#FF7F19" }}>SAND</span>
                <span className="text-black">ICO</span>
              </span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <button className="px-4 py-2 text-sm font-medium text-white rounded-full whitespace-nowrap" style={{ background: "#FF7F19" }}>Furniture</button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-full whitespace-nowrap">Luxury</button>
                <button className="px-4 py-2 text-sm font-medium border rounded-full whitespace-nowrap" style={{ color: "#FF7F19", borderColor: "#FF7F19" }}>Sofas & Seating</button>
              </div>
              <div className="mb-6">
                <button className="w-16 h-16 rounded-full text-white text-xs font-semibold shadow-lg flex flex-col items-center justify-center" style={{ background: "#FF7F19" }}>
                  <span>Explore</span>
                  <span>All</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center cursor-pointer">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200" alt="Options" className="w-full h-20 object-cover" />
                  </div>
                  <p className="text-xs text-gray-600">1 Lac+ Options</p>
                </div>
                <div className="text-center cursor-pointer">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200" alt="Sofas" className="w-full h-20 object-cover" />
                  </div>
                  <p className="text-xs text-gray-600">Sofas</p>
                </div>
                <div className="text-center cursor-pointer">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=200" alt="Sets" className="w-full h-20 object-cover" />
                  </div>
                  <p className="text-xs text-gray-600">Sofa Sets</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full py-3 text-white rounded-lg font-medium" style={{ background: "#FF7F19" }}>Buy On Phone</button>
              </div>
              <ul className="mt-6 space-y-1">
                {navItems.map((item) => (
                  <li key={item.id} className="py-3 px-2 text-gray-700 cursor-pointer hover:bg-gray-50 hover:text-orange-500 rounded transition-colors">{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </header>
  );
}