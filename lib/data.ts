// Shared saree data for the entire application
export interface Saree {
  id: string;
  name: string;
  image: string;
  description: string;
  fabric: string;
  style: string;
  details: string;
}

export const allSarees: Saree[] = [
  { 
    id: "silk-elegance-1", 
    name: "Rose x Gold", 
    image: "/images/sarees/IMG_4629.jpg", 
    description: "A soft romance woven in timeless kanchipuram elegance",
    fabric: "Pure Kanchipuram Silk",
    style: "Traditional Wedding",
    details: "This magnificent saree features intricate zari work woven by master craftsmen. The rich silk fabric drapes beautifully and the traditional motifs speak of timeless Indian heritage. Perfect for weddings and special celebrations.",
  },
  { 
    id: "silk-elegance-2", 
    name: "Orchid x Copper", 
    image: "/images/sarees/IMG_4630.jpg", 
    description: "A kanchipuram classic with a warm copper glow",
    fabric: "Banarasi Silk",
    style: "Festive Occasion",
    details: "A stunning Banarasi silk saree with golden traditional motifs that catch the light beautifully. The lustrous fabric and intricate weaving make this piece a treasured addition to any collection.",
  },
  { 
    id: "silk-elegance-3", 
    name: "Blush x Copper", 
    image: "/images/sarees/IMG_4633.jpg", 
    description: "A gentle Kanchipuram masterpiece woven in tradition",
    fabric: "Tussar Silk",
    style: "Contemporary Ethnic",
    details: "This contemporary piece blends traditional craftsmanship with modern design sensibilities. The rich crimson color is both bold and elegant, perfect for the modern woman who appreciates heritage with a twist.",
  },
  { 
    id: "silk-elegance-4", 
    name: "Plum x Bronze", 
    image: "/images/sarees/IMG_4635.jpg", 
    description: "Where regal plum meets the warmth of bronze kanchipuram ",
    fabric: "Raw Silk",
    style: "Elegant Casual",
    details: "An ethereal ivory saree featuring delicate handwork that showcases the artisan's exceptional skill. The subtle elegance makes it versatile for various occasions from festive gatherings to special dinners.",
  },
  { 
    id: "silk-elegance-5", 
    name: "Emerald x Gold", 
    image: "/images/sarees/IMG_4645.jpg", 
    description: "A deep, earthy Kanchipuram elegance",
    fabric: "Patola Silk",
    style: "Heritage Collection",
    details: "A magnificent emerald green saree featuring the famous double ikat Patola weaving technique. Each motif is woven with precision, creating a masterpiece that takes months to complete.",
  },
  { 
    id: "silk-elegance-6", 
    name: "Olive x Gold", 
    image: "/images/sarees/IMG_4647.jpg", 
    description: "A whisper of pure Kanchipuram elegance",
    fabric: "Chanderi Silk",
    style: "Graceful Drape",
    details: "This azure Chanderi silk saree features elegant border designs that frame the fabric beautifully. The lightweight fabric makes it comfortable for extended wear while maintaining its luxurious appearance.",
  },
  { 
    id: "silk-elegance-7", 
    name: "Mint x Gold", 
    image: "/images/sarees/IMG_4659_jpg.jpg", 
    description: "A quiet touch of nature in pure kanchipuram silk",
    fabric: "Organza Silk",
    style: "Evening Wear",
    details: "Capturing the warmth of a sunset, this saree blends traditional techniques with modern aesthetics. The organza silk offers a beautiful sheen while the warm colors create an unforgettable impression.",
  },
  { 
    id: "silk-elegance-8", 
    name: "Ocean x Gold", 
    image: "/images/sarees/IMG_4663.jpg", 
    description: "Where ocean tones meet the heritage of kanchipuram weaves",
    fabric: "Mysore Silk",
    style: "Understated Luxury",
    details: "Named for its pearl-like luster, this Mysore silk saree whispers elegance rather than shouting it. Perfect for those who appreciate subtle luxury and refined craftsmanship.",
  },
  { 
    id: "silk-elegance-9", 
    name: "Royal x Gold", 
    image: "/images/sarees/IMG_4666.jpg", 
    description: "A bold regality expressed through classic kanchipuram artistry",
    fabric: "Kanjivaram Silk",
    style: "Royal Collection",
    details: "A majestic burgundy Kanjivaram silk saree with royal zari embellishments. The deep, rich color combined with the intricate metallic threadwork creates a piece fit for royalty.",
  },
  { 
    id: "silk-elegance-10", 
    name: "Aqua x Gold", 
    image: "/images/sarees/IMG_4675.jpg", 
    description: "A breath of calm kanchipuram grace",
    fabric: "Tissue Silk",
    style: "Modern Elegance",
    details: "This champagne tissue silk saree offers understated luxury with its soft, luminous fabric. The contemporary color makes it versatile while the silk quality speaks of premium craftsmanship.",
  },
  { 
    id: "silk-elegance-11", 
    name: "Powder Blue x Gold", 
    image: "/images/sarees/IMG_4677.jpg", 
    description: "A kanchipuram symphony of calm and opulence",
    fabric: "Handloom Silk",
    style: "Romantic Traditional",
    details: "A romantic saree featuring delicate floral motifs inspired by blooming rose gardens. The premium handloom silk provides the perfect canvas for these intricate designs.",
  },
  { 
    id: "silk-elegance-12", 
    name: "Champagne x Bronze", 
    image: "/images/sarees/IMG_4627.jpg", 
    description: "A delicate Kanchipuram weave in soft blush tones and antique warmth",
    fabric: "Pure Silk",
    style: "Classic Luxury",
    details: "A stunning saree featuring rich, deep tones that exude sophistication. The pure silk fabric and meticulous craftsmanship make this piece perfect for evening occasions and special celebrations.",
  },
];

// Featured sarees for homepage (custom selection with varied colors)
export const featuredSarees = [
  allSarees[0],  // Royal Silk Elegance - red
  allSarees[4],  // Emerald Splendor - green (IMG_4645.jpg)
  allSarees[7],  // Pearl Whisper - blue (IMG_4663.jpg)
  allSarees[3],  // Ivory Dreams
];

// Get saree by ID
export function getSareeById(id: string): Saree | undefined {
  return allSarees.find(s => s.id === id);
}

// Get all saree IDs for static generation
export function getAllSareeIds(): string[] {
  return allSarees.map(s => s.id);
}
