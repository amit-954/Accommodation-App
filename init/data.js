// const sampleListings = [
//   {
//     title: "Cozy Beach House",
//     description: "A beautiful beach house with a sea view.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1500,
//     location: "Miami",
//     country: "USA",
//   },
//   {
//     title: "Mountain Retreat",
//     description: "A peaceful retreat in the mountains.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2000,
//     location: "Aspen",
//     country: "USA",
//   },
//   {
//     title: "Urban Apartment",
//     description: "Modern apartment in the city center.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2500,
//     location: "New York",
//     country: "USA",
//   },
//   {
//     title: "Countryside Villa",
//     description: "A spacious villa in the countryside.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1800,
//     location: "Tuscany",
//     country: "Italy",
//   },
//   {
//     title: "Lakefront Cabin",
//     description: "A cozy cabin by the lake.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1300,
//     location: "Lake Tahoe",
//     country: "USA",
//   },
//   {
//     title: "Penthouse Suite",
//     description: "Luxury penthouse with stunning views.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 5000,
//     location: "Dubai",
//     country: "UAE",
//   },
//   {
//     title: "Seaside Cottage",
//     description: "Charming cottage by the sea.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1200,
//     location: "Brighton",
//     country: "UK",
//   },
//   {
//     title: "Historic Mansion",
//     description: "A grand mansion with historical significance.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 3500,
//     location: "Edinburgh",
//     country: "UK",
//   },
//   {
//     title: "Ski Lodge",
//     description: "A lodge perfect for ski enthusiasts.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2200,
//     location: "Whistler",
//     country: "Canada",
//   },
//   {
//     title: "Tropical Bungalow",
//     description: "A bungalow surrounded by tropical gardens.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1400,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "City Loft",
//     description: "A chic loft in the heart of the city.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2700,
//     location: "San Francisco",
//     country: "USA",
//   },
//   {
//     title: "Desert Oasis",
//     description: "A serene oasis in the desert.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1600,
//     location: "Marrakech",
//     country: "Morocco",
//   },
//   {
//     title: "Forest Cabin",
//     description: "A cabin nestled in the forest.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1100,
//     location: "Yosemite",
//     country: "USA",
//   },
//   {
//     title: "Beachfront Villa",
//     description: "A villa right on the beach.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 3000,
//     location: "Malibu",
//     country: "USA",
//   },
//   {
//     title: "Farmhouse",
//     description: "A traditional farmhouse with modern amenities.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1700,
//     location: "Somerset",
//     country: "UK",
//   },
//   {
//     title: "Island Getaway",
//     description: "A private island getaway.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Suburban Home",
//     description: "A family home in the suburbs.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1400,
//     location: "Toronto",
//     country: "Canada",
//   },
//   {
//     title: "Luxury Condo",
//     description: "A high-end condo with all amenities.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2800,
//     location: "Singapore",
//     country: "Singapore",
//   },
//   {
//     title: "Cultural Heritage House",
//     description: "A house with rich cultural heritage.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1900,
//     location: "Kyoto",
//     country: "Japan",
//   },
//   {
//     title: "Secluded Cottage",
//     description: "A secluded cottage in the woods.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1200,
//     location: "Scotland",
//     country: "UK",
//   },
//   {
//     title: "Oceanview Apartment",
//     description: "An apartment with a stunning ocean view.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2700,
//     location: "Sydney",
//     country: "Australia",
//   },
//   {
//     title: "Mediterranean Villa",
//     description: "A villa with a Mediterranean flair.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2500,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Historic Cottage",
//     description: "A charming cottage with historic details.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1500,
//     location: "Cotswolds",
//     country: "UK",
//   },
//   {
//     title: "Urban Studio",
//     description: "A compact studio in the city.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2200,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Beach Bungalow",
//     description: "A simple bungalow by the beach.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1300,
//     location: "Goa",
//     country: "India",
//   },
//   {
//     title: "Lakeside Villa",
//     description: "A villa with a beautiful lake view.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 3200,
//     location: "Zurich",
//     country: "Switzerland",
//   },
//   {
//     title: "Mountain Chalet",
//     description: "A chalet in the mountains.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1800,
//     location: "Chamonix",
//     country: "France",
//   },
//   {
//     title: "Riverside Cottage",
//     description: "A cottage by the river.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1500,
//     location: "Cornwall",
//     country: "UK",
//   },
//   {
//     title: "Modern House",
//     description: "A sleek, modern house.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2600,
//     location: "Berlin",
//     country: "Germany",
//   },
//   {
//     title: "Palatial Estate",
//     description: "A grand estate fit for royalty.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 8000,
//     location: "Versailles",
//     country: "France",
//   },
//   {
//     title: "Contemporary Apartment",
//     description: "A contemporary apartment with modern design.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2400,
//     location: "Barcelona",
//     country: "Spain",
//   },
//   {
//     title: "Rustic Cabin",
//     description: "A rustic cabin in the wilderness.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1200,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Luxury Villa",
//     description: "A luxurious villa with all amenities.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 5000,
//     location: "Monaco",
//     country: "Monaco",
//   },
//   {
//     title: "Charming Bungalow",
//     description: "A charming bungalow in a quiet neighborhood.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1700,
//     location: "Nairobi",
//     country: "Kenya",
//   },
//   {
//     title: "Historic Townhouse",
//     description: "A townhouse with historical significance.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2200,
//     location: "Boston",
//     country: "USA",
//   },
//   {
//     title: "Country Cottage",
//     description: "A quaint cottage in the countryside.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1400,
//     location: "Wales",
//     country: "UK",
//   },
//   {
//     title: "Modern Loft",
//     description: "A stylish loft in the city.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2300,
//     location: "Chicago",
//     country: "USA",
//   },
//   {
//     title: "Beachside Villa",
//     description: "A villa right by the beach.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 3400,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Forest Retreat",
//     description: "A retreat in the heart of the forest.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1800,
//     location: "Black Forest",
//     country: "Germany",
//   },
//   {
//     title: "Rooftop Apartment",
//     description: "An apartment with a rooftop terrace.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2500,
//     location: "Paris",
//     country: "France",
//   },
//   {
//     title: "Harborview Condo",
//     description: "A condo with harbor views.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2900,
//     location: "Vancouver",
//     country: "Canada",
//   },
//   {
//     title: "Eco-Friendly House",
//     description: "A house designed with sustainability in mind.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2000,
//     location: "Portland",
//     country: "USA",
//   },
//   {
//     title: "Desert Villa",
//     description: "A villa in the middle of the desert.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2100,
//     location: "Abu Dhabi",
//     country: "UAE",
//   },
//   {
//     title: "Oceanfront House",
//     description: "A house with an oceanfront view.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 3200,
//     location: "Cape Town",
//     country: "South Africa",
//   },
//   {
//     title: "Countryside Barn",
//     description: "A renovated barn in the countryside.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1600,
//     location: "Devon",
//     country: "UK",
//   },
//   {
//     title: "Riverfront Apartment",
//     description: "An apartment overlooking the river.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2300,
//     location: "Melbourne",
//     country: "Australia",
//   },
//   {
//     title: "City Center Flat",
//     description: "A flat in the center of the city.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 2700,
//     location: "Madrid",
//     country: "Spain",
//   },
//   {
//     title: "Secluded Retreat",
//     description: "A secluded retreat perfect for relaxation.",
//     image: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg",
//     price: 1400,
//     location: "Himalayas",
//     country: "India",
//   },
// ];

// module.exports = { data: sampleListings };



























const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };