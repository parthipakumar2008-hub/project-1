const products = [
    // --- FLAGSHIPS (> 50k) ---
    {
        id: "apple-iphone-15-pro",
        name: "iPhone 15 Pro",
        brand: "Apple",
        category: "mobile",
        price: 134900,
        image: "assets/images/iphone_15_pro.png",
        rating: 4.8,
        specs: { display: "6.1\" Super Retina", processor: "A17 Pro", camera: "48MP Main", battery: "3274 mAh", ram: "8GB", storage: "128GB" },
        tags: ["trending", "flagship", "camera"],
        pros: ["Titanium Design", "A17 Pro Chip", "USB-C"],
        cons: ["Expensive", "Slow Charging"],
        bestFor: ["Vloggers", "Professionals"]
    },
    {
        id: "samsung-s24-ultra",
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "mobile",
        price: 129999,
        image: "assets/images/s24_ultra.png",
        rating: 4.9,
        specs: { display: "6.8\" QHD+ 120Hz", processor: "Snapdragon 8 Gen 3", camera: "200MP Quad", battery: "5000 mAh", ram: "12GB", storage: "256GB" },
        tags: ["trending", "flagship", "productivity"],
        pros: ["S-Pen", "AI Features", "Best Zoom"],
        cons: ["Very Large", "Pricey"],
        bestFor: ["Power Users", "Zoom Photos"]
    },

    // --- MID-RANGE (20k - 50k) ---
    {
        id: "oneplus-12r",
        name: "OnePlus 12R",
        brand: "OnePlus",
        category: "mobile",
        price: 39999,
        image: "assets/images/oneplus_12r.png",
        rating: 4.5,
        specs: { display: "6.78\" AMOLED", processor: "SD 8 Gen 2", camera: "50MP Triple", battery: "5500 mAh", ram: "8GB", storage: "128GB" },
        tags: ["gaming", "performance"],
        pros: ["Huge Battery", "Flagship Perf", "Great Display"],
        cons: ["Avg Ultrawide", "Curved Screen (Polarizing)"],
        bestFor: ["Gamers", "Students"]
    },
    {
        id: "nothing-phone-2a",
        name: "Nothing Phone (2a)",
        brand: "Nothing",
        category: "mobile",
        price: 23999,
        image: "assets/images/nothing_2a.png",
        rating: 4.4,
        specs: { display: "6.7\" AMOLED", processor: "Dimensity 7200 Pro", camera: "50MP Dual", battery: "5000 mAh", ram: "8GB", storage: "128GB" },
        tags: ["design", "unique"],
        pros: ["Glyph Interface", "Clean OS", "Lightweight"],
        cons: ["Plastic Back", "No Charger"],
        bestFor: ["Design Lovers", "Minimalists"]
    },

    // --- BUDGET (< 20k) ---
    {
        id: "realme-narzo-60",
        name: "Realme Narzo 60 5G",
        brand: "Realme",
        category: "mobile",
        price: 17999,
        image: "assets/images/realme_narzo.png",
        rating: 4.3,
        specs: { display: "6.43\" sAMOLED", processor: "Dimensity 6020", camera: "64MP", battery: "5000 mAh", ram: "8GB", storage: "128GB" },
        tags: ["budget", "5g"],
        pros: ["AMOLED Display", "Premium Design", "Good Battery"],
        cons: ["Old Processor", "Bloatware"],
        bestFor: ["Media Consumption", "Students"]
    },
    {
        id: "redmi-13c-5g",
        name: "Redmi 13C 5G",
        brand: "Xiaomi",
        category: "mobile",
        price: 10999,
        image: "assets/images/redmi_13c.png",
        rating: 4.1,
        specs: { display: "6.74\" 90Hz", processor: "Dimensity 6100+", camera: "50MP AI", battery: "5000 mAh", ram: "4GB", storage: "128GB" },
        tags: ["budget", "5g", "entry"],
        pros: ["Cheapest 5G", "90Hz Screen", "Star Trail Design"],
        cons: ["Slow Charging", "HD+ Display"],
        bestFor: ["First Time Smartphone", "Tight Budget"]
    },
    {
        id: "moto-g34",
        name: "Motorola G34 5G",
        brand: "Motorola",
        category: "mobile",
        price: 10999,
        image: "https://placehold.co/400x500/222/fff?text=Moto+G34",
        rating: 4.2,
        specs: { display: "6.5\" 120Hz", processor: "Snapdragon 695", camera: "50MP", battery: "5000 mAh", ram: "8GB", storage: "128GB" },
        tags: ["budget", "clean-ui"],
        pros: ["Clean Android", "Stereo Speakers", "Vegan Leather"],
        cons: ["Slow Charging", "Cameras Average"],
        bestFor: ["Stock Android Fans", "Elders"]
    },
    {
        id: "poco-m6-pro",
        name: "POCO M6 Pro 5G",
        brand: "POCO",
        category: "mobile",
        price: 9999,
        image: "https://placehold.co/400x500/000/yellow?text=POCO+M6",
        rating: 4.4,
        specs: { display: "6.79\" 90Hz", processor: "Snapdragon 4 Gen 2", camera: "50MP", battery: "5000 mAh", ram: "4GB", storage: "64GB" },
        tags: ["budget", "value"],
        pros: ["Glass Back", "Best Performance in Budget", "IR Blaster"],
        cons: ["Hybrid Slot", "Big Size"],
        bestFor: ["Gamers on Budget", "Students"]
    },
    {
        id: "infinix-hot-40",
        name: "Infinix Hot 40i",
        brand: "Infinix",
        category: "mobile",
        price: 8999,
        image: "https://placehold.co/400x500/green/fff?text=Infinix",
        rating: 4.0,
        specs: { display: "6.6\" 90Hz", processor: "Unisoc T606", camera: "50MP", battery: "5000 mAh", ram: "8GB", storage: "256GB" },
        tags: ["entry", "storage"],
        pros: ["Huge Storage", "Magic Ring UI", "Cheap"],
        cons: ["Slow Processor", "Plastic Build"],
        bestFor: ["Storage Heavy Users"]
    },

    // --- LAPTOPS ---
    {
        id: "apple-macbook-air-m2",
        name: "Apple MacBook Air M2",
        brand: "Apple",
        category: "laptop",
        price: 89900,
        image: "https://placehold.co/600x400/333/fff?text=MacBook+Air",
        rating: 4.8,
        specs: { display: "13.6\" Liquid Retina", processor: "M2 Chip", camera: "1080p Facetime", battery: "18 Hours", ram: "8GB", storage: "256GB" },
        tags: ["laptop", "premium"],
        pros: ["Silent", "Insane Battery", "Premium Build"],
        cons: ["Not for Gaming", "Ports Limited"],
        bestFor: ["Coding", "Office", "Travel"]
    },
    {
        id: "hp-15s",
        name: "HP Laptop 15s",
        brand: "HP",
        category: "laptop",
        price: 38990,
        image: "https://placehold.co/600x400/ccc/000?text=HP+Laptop",
        rating: 4.2,
        specs: { display: "15.6\" FHD", processor: "Core i3 12th Gen", camera: "720p", battery: "7 Hours", ram: "8GB", storage: "512GB SSD" },
        tags: ["laptop", "budget"],
        pros: ["Reliable", "Decent Keyboard", "Lightweight"],
        cons: ["Plastic Body", "Average Screen"],
        bestFor: ["Students", "Office Work"]
    },
    {
        id: "asus-tuf-f15",
        name: "ASUS TUF F15",
        brand: "ASUS",
        category: "laptop",
        price: 54990,
        image: "https://placehold.co/600x400/000/red?text=ASUS+TUF",
        rating: 4.5,
        specs: { display: "15.6\" 144Hz", processor: "Core i5 11th Gen", camera: "720p", battery: "4 Hours", ram: "16GB", storage: "512GB SSD" },
        tags: ["laptop", "gaming"],
        pros: ["Gaming Performance", "Rugged", "144Hz Screen"],
        cons: ["Heavy", "Battery Life"],
        bestFor: ["Gaming", "Engineering"]
    },

    // --- AUDIO / GADGETS ---
    {
        id: "boat-airdopes-161",
        name: "boAt Airdopes 161",
        brand: "boAt",
        category: "audio",
        price: 999,
        image: "https://placehold.co/400x400/000/fff?text=boAt+Airdopes",
        rating: 4.1,
        specs: { type: "TWS", battery: "40 Hours", anc: "No", water_resistance: "IPX5" },
        tags: ["audio", "budget"],
        pros: ["Cheap", "Bass Heavy", "Fast Pairing"],
        cons: ["Call Quality Avg", "Build Quality"],
        bestFor: ["Gym", "Bass Lovers"]
    },
    {
        id: "sony-zm5",
        name: "Sony WF-1000XM5",
        brand: "Sony",
        category: "audio",
        price: 19990,
        image: "assets/images/sony_xm5.png",
        rating: 4.7,
        specs: { type: "TWS", battery: "36 Hours", anc: "Best in Class", water_resistance: "IPX4" },
        tags: ["audio", "premium"],
        pros: ["Best ANC", "Amazing Sound", "Tiny Size"],
        cons: ["Expensive", "Foam Tips wear out"],
        bestFor: ["Travel", "Audiophiles"]
    },
    {
        id: "noise-colorfit",
        name: "Noise ColorFit Pro 5",
        brand: "Noise",
        category: "smartwatch",
        price: 3499,
        image: "https://placehold.co/400x400/orange/fff?text=Noise+Watch",
        rating: 4.2,
        specs: { display: "1.85\" AMOLED", battery: "7 Days", health: "HR, SpO2", water_resistance: "IP68" },
        tags: ["smartwatch", "fitness"],
        pros: ["Good Display", "Calling Feature", "Straps"],
        cons: ["UI Laggy", "Accuracy"],
        bestFor: ["Fashion", "Basic Fitness"]
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Phones Under ₹20,000 in 2026",
        date: "Jan 20, 2026",
        excerpt: "Looking for a budget beast? Here are our top picks for performance and camera on a budget.",
        image: "assets/images/redmi_13c.png"
    },
    {
        id: 2,
        title: "iPhone 16 Rumors: What to Expect?",
        date: "Jan 18, 2026",
        excerpt: "Leaks suggest a major redesign and AI features. Here is everything we know so far.",
        image: "assets/images/iphone_15_pro.png"
    },
    {
        id: 3,
        title: "Best Laptops for Engineering Students",
        date: "Jan 15, 2026",
        excerpt: "From coding to CAD, these laptops can handle it all without breaking the bank.",
        image: "https://placehold.co/600x400/333/fff?text=Laptops"
    }
];
