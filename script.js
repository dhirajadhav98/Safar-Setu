//base file // Modal functionality
        document.addEventListener('DOMContentLoaded', function() {
            const loginModal = document.getElementById('loginModal');
            const signupModal = document.getElementById('signupModal');
            const loginButton = document.getElementById('loginButton');
            const signupButton = document.getElementById('signupButton');
            const footerLogin = document.getElementById('footerLogin');
            const footerSignup = document.getElementById('footerSignup');
            const closeButtons = document.querySelectorAll('.close-modal');
            
            // Login button click event
            loginButton.addEventListener('click', function() {
                loginModal.style.display = 'block';
            });
            
            footerLogin.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.style.display = 'block';
            });
            
            // Signup button click event
            signupButton.addEventListener('click', function() {
                signupModal.style.display = 'block';
            });
            
            footerSignup.addEventListener('click', function(e) {
                e.preventDefault();
                signupModal.style.display = 'block';
            });
            
            // Close button click event
            closeButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    loginModal.style.display = 'none';
                    signupModal.style.display = 'none';
                });
            });
            
            // Click outside modal to close
            window.addEventListener('click', function(event) {
                if (event.target == loginModal) {
                    loginModal.style.display = 'none';
                }
                if (event.target == signupModal) {
                    signupModal.style.display = 'none';
                }
            });
            
            // Form submission
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            
            loginForm.addEventListener('submit', function(e) {
                // In a real app, you would validate and authenticate here
                // For now, just redirect to the index.html page
                // e.preventDefault(); // Remove this line to allow form submission to index.html
            });
            
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // In a real app, you would create an account
                // For this demo, redirect to login after signup
                signupModal.style.display = 'none';
                loginModal.style.display = 'block';
            });
        });


//base file

    // Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Category Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const destinationCards = document.querySelectorAll('.destination-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter destinations
            destinationCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navToggle.click();
                }
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm === '') return;
        
        // Filter destinations based on search term
        let foundResults = false;
        destinationCards.forEach(card => {
            const title = card.querySelector('.destination-title').textContent.toLowerCase();
            const description = card.querySelector('.destination-desc').textContent.toLowerCase();
            const category = card.querySelector('.destination-category').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
                foundResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Reset category filters to show the search is active
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons[0].classList.add('active'); // Set "All Places" as active
        
        // Scroll to destinations section
        document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Optional: Display a message if no results found
        if (!foundResults) {
            alert('No destinations found matching "' + searchTerm + '". Please try another search term.');
            // Reset to show all destinations
            destinationCards.forEach(card => {
                card.style.display = 'block';
            });
        }
    }
});




//chatbot script



// chatbot-data.js
const chatbotData = {
// Tourist spots by category
touristSpots: {
religious: [
  { name: "Trimbakeshwar Temple", description: "One of the 12 Jyotirlingas", location: "28km from Nashik city" },
  { name: "Kalaram Temple", description: "Ancient temple dedicated to Lord Rama", location: "Panchavati, Nashik" },
  { name: "Saptashrungi Devi Temple", description: "One of the 51 Shakti Peethas", location: "60km from Nashik" },
  { name: "Muktidham Temple", description: "Beautiful white marble temple", location: "Nashik Road" }
],
nature: [
  { name: "Anjaneri Hills", description: "Birthplace of Lord Hanuman", location: "20km from Nashik" },
  { name: "Harihar Fort", description: "Famous for its steep rock-cut steps", location: "40km from Nashik" },
  { name: "Umbrella Falls", description: "Beautiful waterfall in Satpura range", location: "65km from Nashik" },
  { name: "Dugarwadi Waterfall", description: "Spectacular monsoon waterfall", location: "25km from Nashik" }
],
wineries: [
  { name: "Sula Vineyards", description: "India's largest winery with tours", location: "15km from Nashik" },
  { name: "York Winery", description: "Boutique winery with premium tastings", location: "Near Sula Vineyards" },
  { name: "Soma Vine Village", description: "Vineyard resort with wine tours", location: "15km from Nashik" },
  { name: "Grover Zampa Vineyards", description: "Premium winery with guided tours", location: "Sanjegaon, Nashik" }
],
historical: [
  { name: "Pandavleni Caves", description: "Ancient Buddhist caves (1st century BCE)", location: "8km from Nashik" },
  { name: "Ramshej Fort", description: "Historical fort from Satavahana dynasty", location: "15km from Nashik" },
  { name: "Coin Museum", description: "India's only coin museum", location: "Nashik city" }
]
},

// Itineraries by duration
itineraries: {
"1day": {
  title: "One-Day Nashik Highlights",
  morning: "Start with Trimbakeshwar Temple, then visit Sula Vineyards for wine tasting and lunch.",
  afternoon: "Explore Pandavleni Caves followed by Nashik's riverside Ghat area.",
  evening: "Visit Kalaram Temple and shop for local specialties in the old market."
},
"2day": {
  title: "Two-Day Nashik Experience",
  day1: {
    morning: "Trimbakeshwar Temple, then Anjaneri Hills.",
    afternoon: "Sula Vineyards for wine tasting and lunch.",
    evening: "Nashik's riverside Ghats and Kalaram Temple."
  },
  day2: {
    morning: "Pandavleni Caves and Coin Museum.",
    afternoon: "York Winery for wine tasting.",
    evening: "Shopping at local markets and farewell dinner."
  }
},
"3day": {
  title: "Three-Day Complete Nashik Tour",
  day1: {
    morning: "Trimbakeshwar Temple.",
    afternoon: "Sula Vineyards for wine tasting and lunch.",
    evening: "Riverside Ghats and evening aarti."
  },
  day2: {
    morning: "Trek to Anjaneri Hills or Harihar Fort.",
    afternoon: "Relax at a local restaurant.",
    evening: "Kalaram Temple and old city area."
  },
  day3: {
    morning: "Pandavleni Caves.",
    afternoon: "Another winery like York or Soma.",
    evening: "Shopping and farewell dinner."
  }
},
"weekend": {
  title: "Weekend Getaway in Nashik",
  day1: {
    morning: "Arrive and visit Trimbakeshwar Temple.",
    afternoon: "Wine tasting at Sula Vineyards.",
    evening: "Relax by Godavari Ghats."
  },
  day2: {
    morning: "Pandavleni Caves and Coin Museum.",
    afternoon: "Another winery or Kalaram Temple.",
    evening: "Shopping before departure."
  }
}
},

// Transportation information
transportation: {
reaching: {
  train: "Nashik Road Railway Station connects to major cities. Mumbai to Nashik: 3.5 hours.",
  bus: "State transport and private luxury buses from Mumbai, Pune, and Aurangabad.",
  flight: "Nashik Airport (limited flights). Mumbai Airport (180km) is main gateway.",
  car: "Mumbai to Nashik: approx. 3 hours via Mumbai-Nashik Expressway."
},
local: {
  autorickshaw: "Available for short distances. Use meter or negotiate fare.",
  taxi: "Available for city tours or intercity travel.",
  bus: "City buses cover major locations but limited frequency.",
  rental: "Bike and car rentals available near tourist spots and railway station."
},
distances: {
  "Nashik to Trimbakeshwar": "28 km (40 minutes)",
  "Nashik to Sula Vineyards": "15 km (25 minutes)",
  "Nashik to Saptashrungi": "60 km (1.5 hours)",
  "Nashik to Shirdi": "85 km (2 hours)",
  "Nashik to Mumbai": "170 km (3 hours)"
}
},

// Weather and best time to visit
weather: {
bestTime: "October to March (pleasant 15-30°C).",
monsoon: "June to September (heavy rainfall, ideal for waterfalls).",
summer: "April to June (hot 30-40°C), good for indoor activities.",
winter: "November to February (cool 10-28°C), perfect for sightseeing.",
festivals: "Kumbh Mela (every 12 years), SulaFest (February), Ram Navami (March/April)."
},

// Accommodation options (condensed)
accommodations: {
luxury: [
  { name: "The Gateway Hotel Ambad", location: "Ambad Industrial Area", features: "Pool, spa, dining" },
  { name: "Express Inn", location: "Mumbai Agra Road", features: "Rooftop restaurant, city views" },
  { name: "Sula Vineyards Resort", location: "Gangapur-Savargaon Road", features: "Vineyard views, fine dining" }
],
midRange: [
  { name: "Quality Inn Regency", location: "Near Mahamarg Bus Stand", features: "Restaurant, conference facilities" },
  { name: "Ginger Nashik", location: "Mumbai Naka", features: "Modern rooms, cafe" }
],
budget: [
  { name: "Hotel Panchavati", location: "Near Nashik Road Station", features: "Basic amenities, restaurant" },
  { name: "Hotel Kaveri", location: "CBS Area", features: "Clean rooms, dining options" }
],
nearTemples: [
  { name: "Hotel Virasat", location: "Near Kalaram Temple", features: "Traditional decor, vegetarian restaurant" },
  { name: "MTDC Resort", location: "Near Trimbakeshwar", features: "Government-run, reasonable rates" }
],
nearWineries: [
  { name: "Sula The Source", location: "At Sula Vineyards", features: "Luxury rooms, vineyard access" },
  { name: "Beyond by Sula", location: "At Sula Vineyards", features: "Budget-friendly, vineyard access" }
]
},

// Food options (condensed)
food: {
local: [
  { name: "Misal Pav", description: "Spicy curry with sprouts and bread", where: "Sadhana Misal, Jai Bhavani Misal" },
  { name: "Maharashtrian Thali", description: "Complete meal with multiple items", where: "Bhojanam, Panchavati Gaurav" },
  { name: "Kharvas", description: "Traditional milk-based dessert", where: "Sweet shops in old city area" }
],
restaurants: [
  { name: "Bhojanam", location: "College Road", cuisine: "Authentic Maharashtrian" },
  { name: "Sula Vineyards Restaurants", location: "Sula Vineyards", cuisine: "Italian, Indian, World cuisine" },
  { name: "Sadhana Misal", location: "Multiple locations", cuisine: "Famous for Misal Pav" }
],
cafes: [
  { name: "Little Italy Ristorante", location: "College Road", specialty: "Italian cuisine and coffee" },
  { name: "The Tasting Room", location: "Sula Vineyards", specialty: "Wine and cheese platters" }
]
},

// Events and festivals (condensed)
events: [
{ name: "Kumbh Mela", timing: "Every 12 years (next in 2027)", description: "One of world's largest religious gatherings" },
{ name: "SulaFest", timing: "First weekend of February", description: "Wine, music and food festival at Sula Vineyards" },
{ name: "Grape Harvesting", timing: "January-February", description: "Experience grape picking at vineyards" }
],

// FAQs (condensed)
faqs: {
"Is Nashik safe for solo travelers?": "Yes, Nashik is generally safe. Take standard precautions as in any tourist destination.",
"Where can I rent a bike or car?": "Available near Railway Station, CBS area, and major tourist spots. Hotels can also arrange rentals.",
"Are guides available at attractions?": "Yes, official guides available at major attractions. Contact Maharashtra Tourism for city tours.",
"What is the local language?": "Marathi is local language. Hindi and English widely understood at tourist places.",
"What about medical facilities?": "Good medical facilities including Nashik Civil Hospital, Wockhardt Hospital, and Apollo Hospital."
}
};

// Quick replies for common queries
const quickReplies = [
{ text: "Top places to visit", query: "top places in Nashik" },
{ text: "2-day itinerary", query: "2 day plan for Nashik" },
{ text: "How to reach Nashik", query: "how to reach Nashik" },
{ text: "Best time to visit", query: "best time to visit Nashik" },
{ text: "Hotels in Nashik", query: "accommodation in Nashik" },
{ text: "Food recommendations", query: "food in Nashik" }
];

// Translation data
const translations = {
en: {
placeholder: "Ask about Nashik tourism...",
welcome: "👋 Hello! I'm your Nashik Tourism Assistant. How can I help plan your Nashik adventure today?",
quickReplies: "You can ask about:",
send: "➤",
},
hi: {
placeholder: "नासिक पर्यटन के बारे में पूछें...",
welcome: "👋 नमस्ते! मैं आपका नासिक पर्यटन सहायक हूँ। आज मैं आपकी नासिक यात्रा की योजना बनाने में कैसे मदद कर सकता हूँ?",
quickReplies: "आप इनके बारे में पूछ सकते हैं:",
send: "➤",
}
};

// chatbot-ui.js - UI logic for Nashik Tourism Chatbot

document.addEventListener('DOMContentLoaded', function() {
// DOM Elements
const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendMessage');
const minimizeButton = document.getElementById('minimizeChat');
const languageSelector = document.getElementById('languageSelector');

// State variables
let currentLanguage = 'en';
let isTyping = false;

// Initialize chatbot
function initChatbot() {
// Set initial language
currentLanguage = languageSelector.value;
updateLanguage();

// Add event listeners
chatToggle.addEventListener('click', toggleChat);
minimizeButton.addEventListener('click', toggleChat);
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
languageSelector.addEventListener('change', function() {
  currentLanguage = this.value;
  updateLanguage();
});

// Show welcome message after a short delay
setTimeout(() => {
  showBotMessage(translations[currentLanguage].welcome);
  showQuickReplies();
}, 500);
}

// Update language
function updateLanguage() {
userInput.placeholder = translations[currentLanguage].placeholder;
sendButton.textContent = translations[currentLanguage].send;
}

// Toggle chat visibility
function toggleChat() {
if (chatContainer.style.display === 'flex') {
  chatContainer.style.display = 'none';
} else {
  chatContainer.style.display = 'flex';
  userInput.focus();
}
}

// Show bot message
function showBotMessage(message) {
showTypingIndicator();

// Simulate bot thinking time
setTimeout(() => {
  removeTypingIndicator();
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot-message';
  messageDiv.innerHTML = message;
  chatMessages.appendChild(messageDiv);
  scrollToBottom();
}, 800);
}

// Show user message
function showUserMessage(message) {
const messageDiv = document.createElement('div');
messageDiv.className = 'message user-message';
messageDiv.textContent = message;
chatMessages.appendChild(messageDiv);
scrollToBottom();
}

// Show typing indicator
function showTypingIndicator() {
if (isTyping) return;
isTyping = true;

const typingDiv = document.createElement('div');
typingDiv.className = 'message typing-indicator';
typingDiv.id = 'typingIndicator';
typingDiv.innerHTML = '<span></span><span></span><span></span>';
chatMessages.appendChild(typingDiv);
scrollToBottom();
}

// Remove typing indicator
function removeTypingIndicator() {
isTyping = false;
const typingIndicator = document.getElementById('typingIndicator');
if (typingIndicator) {
  typingIndicator.remove();
}
}

// Show quick replies
function showQuickReplies() {
const repliesDiv = document.createElement('div');
repliesDiv.className = 'quick-replies';

const promptDiv = document.createElement('div');
promptDiv.className = 'message bot-message';
promptDiv.textContent = translations[currentLanguage].quickReplies;
chatMessages.appendChild(promptDiv);

quickReplies.forEach(reply => {
  const button = document.createElement('button');
  button.className = 'quick-reply-btn';
  button.textContent = reply.text;
  button.addEventListener('click', function() {
    handleUserInput(reply.query);
  });
  repliesDiv.appendChild(button);
});

chatMessages.appendChild(repliesDiv);
scrollToBottom();
}

// Send message
function sendMessage() {
const message = userInput.value.trim();
if (message === '') return;

showUserMessage(message);
userInput.value = '';
handleUserInput(message);
}

// Handle user input

function handleUserInput(input) {
const lowerInput = input.toLowerCase();
let response = '';
let matched = false;

// Helper function to process and mark as matched
function processCategory(category, responseFunction) {
  response = responseFunction(lowerInput);
  matched = true;
  return true;
}

// Greeting detection
if (containsAny(lowerInput, ['hello', 'hi', 'hey', 'namaste', 'नमस्ते', 'greet'])) {
  response = translations[currentLanguage].welcome;
  matched = true;
} 

// Tourist spots - broader categories with more synonyms
else if (!matched && containsAny(lowerInput, [
  'place', 'spot', 'visit', 'attraction', 'see', 'स्थान', 'places', 'spots', 'tourism', 
  'temple', 'religious', 'spiritual', 'holy', 'sacred', 'मंदिर', 'shrine', 'worship',
  'nature', 'hill', 'trek', 'hike', 'mountain', 'waterfall', 'प्रकृति', 'outdoor', 'scenery', 'scenic',
  'wine', 'vineyard', 'winery', 'sula', 'york', 'वाइन', 'grapes', 'tasting',
  'historical', 'history', 'ancient', 'cave', 'fort', 'ऐतिहासिक', 'monument', 'heritage', 'old',
  'sightseeing', 'tourist', 'famous', 'popular', 'must see', 'top', 'best'
])) {
  processCategory('tourist', generateTouristSpotResponse);
}

// Itineraries - add more variations of planning terms
else if (!matched && containsAny(lowerInput, [
  'itinerary', 'plan', 'day', 'schedule', 'योजना', 'weekend', 'trip', 'tour', 'agenda',
  'visit', 'days', 'one-day', 'two-day', 'three-day', '1 day', '2 day', '3 day', 'one day', 'two days', 'three days',
  'short trip', 'long trip', 'vacation', 'holiday', 'route', 'planner'
])) {
  processCategory('itinerary', generateItineraryResponse);
}

// Transportation - expand to include all travel-related terms
else if (!matched && containsAny(lowerInput, [
  'transport', 'travel', 'reach', 'getting', 'go', 'यातायात', 'how to go', 'how to reach',
  'distance', 'far', 'near', 'close', 'commute', 'journey', 'route',
  'train', 'bus', 'car', 'taxi', 'auto', 'flight', 'drive', 'ride', 'rental',
  'from mumbai', 'from pune', 'from delhi', 'airport', 'station', 'local transport'
])) {
  processCategory('transportation', generateTransportationResponse);
}

// Weather - add more climate and timing related terms
else if (!matched && containsAny(lowerInput, [
  'weather', 'season', 'when', 'best time', 'मौसम', 'climate', 'temperature',
  'rain', 'monsoon', 'summer', 'winter', 'hot', 'cold', 'wet', 'dry', 
  'month', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 
  'august', 'september', 'october', 'november', 'december', 'visiting season'
])) {
  processCategory('weather', generateWeatherResponse);
}

// Accommodation - expand with lodging terms
else if (!matched && containsAny(lowerInput, [
  'hotel', 'stay', 'accommodation', 'resort', 'lodge', 'होटल', 'room', 'booking',
  'sleep', 'night', 'inn', 'motel', 'guesthouse', 'homestay', 'bnb', 'hostel',
  'luxury', 'budget', 'cheap', 'expensive', 'mid-range', 'affordable', 'five-star',
  'where to stay', 'lodging', 'resting'
])) {
  processCategory('accommodation', generateAccommodationResponse);
}

// Food - add cuisine and dining terms
else if (!matched && containsAny(lowerInput, [
  'food', 'eat', 'restaurant', 'cuisine', 'dish', 'खाना', 'meal', 'dining',
  'breakfast', 'lunch', 'dinner', 'speciality', 'local food', 'traditional food',
  'snack', 'sweet', 'dessert', 'coffee', 'cafe', 'bar', 'pub', 'drink',
  'vegetarian', 'non-vegetarian', 'veg', 'non-veg', 'thali', 'street food'
])) {
  processCategory('food', generateFoodResponse);
}

// Events - add festival and cultural terms
else if (!matched && containsAny(lowerInput, [
  'festival', 'event', 'celebration', 'fest', 'त्योहार', 'kumbh', 'fair',
  'cultural', 'tradition', 'ceremony', 'ritual', 'mela', 'function', 'program',
  'when is', 'upcoming', 'annual', 'seasonal', 'special', 'holy', 'religious event'
])) {
  processCategory('events', generateEventsResponse);
}

// Wine tourism - specific wine-related terms
else if (!matched && containsAny(lowerInput, [
  'wine', 'vineyard', 'winery', 'sula', 'york', 'वाइन', 'tasting', 'grapes',
  'wine tour', 'wine tasting', 'sulafest', 'red wine', 'white wine', 'sparkling',
  'alcohol', 'drinking', 'sommelier', 'wine festival', 'vineyard tour', 'cellar'
])) {
  processCategory('winery', generateWineryResponse);
}

// FAQs - handle common questions
else if (!matched && containsAny(lowerInput, [
  'faq', 'question', 'answer', 'safe', 'safety', 'problem', 'issue', 'concern',
  'language', 'money', 'currency', 'cost', 'price', 'expensive', 'cheap', 'budget',
  'guide', 'tour guide', 'medical', 'hospital', 'emergency', 'police', 'security'
])) {
  response = "<strong>Frequently Asked Questions:</strong><br>";
  for (const [question, answer] of Object.entries(chatbotData.faqs)) {
      response += `<b>Q: ${question}</b><br>A: ${answer}<br><br>`;
  }
  matched = true;
}

// Help or general information
else if (!matched && containsAny(lowerInput, [
  'help', 'मदद', 'what', 'how', 'guide', 'info', 'information', 'tell me',
  'suggest', 'recommendation', 'tips', 'advice', 'assist', 'support', 'explain',
  'about', 'nashik', 'overview', 'summary', 'brief', 'general'
])) {
  response = "I can help with information about tourist spots, itineraries, transportation, weather, accommodations, food, and events in Nashik. What would you like to know?";
  setTimeout(showQuickReplies, 1000);
  matched = true;
}

// Fallback for unrecognized queries
if (!matched) {
  // Try to detect intent from generic keywords
  if (lowerInput.includes('nashik') || lowerInput.includes('nasik')) {
      response = "Nashik is a beautiful city known for its temples, wineries, and natural attractions. What specific information about Nashik would you like to know? You can ask about places to visit, accommodations, food, or activities.";
      setTimeout(showQuickReplies, 1000);
  } else {
      response = "I'm not sure I understand. Could you please ask about tourist spots, itineraries, transportation, weather, accommodations, or food in Nashik?";
      setTimeout(showQuickReplies, 1000);
  }
}

showBotMessage(response);
}
// Helper function to check if input contains any of the keywords
function containsAny(input, keywords) {
return keywords.some(keyword => input.includes(keyword));
}

// Generate response for tourist spots
function generateTouristSpotResponse(input) {
let response = "";

if (containsAny(input, ['temple', 'religious', 'spiritual', 'मंदिर'])) {
  response = "<strong>Religious Places in Nashik:</strong><br>";
  chatbotData.touristSpots.religious.forEach(spot => {
    response += `• <b>${spot.name}</b>: ${spot.description}. Located at ${spot.location}.<br>`;
  });
} 
else if (containsAny(input, ['nature', 'hill', 'trek', 'waterfall', 'hiking', 'प्रकृति'])) {
  response = "<strong>Nature Spots around Nashik:</strong><br>";
  chatbotData.touristSpots.nature.forEach(spot => {
    response += `• <b>${spot.name}</b>: ${spot.description}. Located at ${spot.location}.<br>`;
  });
}
else if (containsAny(input, ['wine', 'vineyard', 'winery', 'sula', 'वाइन'])) {
  response = "<strong>Wineries in Nashik:</strong><br>";
  chatbotData.touristSpots.wineries.forEach(spot => {
    response += `• <b>${spot.name}</b>: ${spot.description}. Located at ${spot.location}.<br>`;
  });
}
else if (containsAny(input, ['historical', 'history', 'ancient', 'cave', 'fort', 'ऐतिहासिक'])) {
  response = "<strong>Historical Places in Nashik:</strong><br>";
  chatbotData.touristSpots.historical.forEach(spot => {
    response += `• <b>${spot.name}</b>: ${spot.description}. Located at ${spot.location}.<br>`;
  });
}
else {
  // General overview of top spots
  response = "<strong>Top Places to Visit in Nashik:</strong><br>";
  response += "• <b>Religious</b>: Trimbakeshwar Temple, Kalaram Temple<br>";
  response += "• <b>Nature</b>: Anjaneri Hills, Dugarwadi Waterfall<br>";
  response += "• <b>Wineries</b>: Sula Vineyards, York Winery<br>";
  response += "• <b>Historical</b>: Pandavleni Caves, Coin Museum<br>";
  response += "<br>Would you like more details about any specific category?";
}

return response;
}

// Generate response for itineraries
function generateItineraryResponse(input) {
let response = "";

if (containsAny(input, ['1 day', 'one day', 'single day', 'एक दिन'])) {
  const itinerary = chatbotData.itineraries["1day"];
  response = `<strong>${itinerary.title}</strong><br>`;
  response += `• <b>Morning</b>: ${itinerary.morning}<br>`;
  response += `• <b>Afternoon</b>: ${itinerary.afternoon}<br>`;
  response += `• <b>Evening</b>: ${itinerary.evening}<br>`;
}
else if (containsAny(input, ['2 day', '2-day', 'two day', 'दो दिन'])) {
  const itinerary = chatbotData.itineraries["2day"];
  response = `<strong>${itinerary.title}</strong><br>`;
  response += `<b>Day 1:</b><br>`;
  response += `• Morning: ${itinerary.day1.morning}<br>`;
  response += `• Afternoon: ${itinerary.day1.afternoon}<br>`;
  response += `• Evening: ${itinerary.day1.evening}<br><br>`;
  response += `<b>Day 2:</b><br>`;
  response += `• Morning: ${itinerary.day2.morning}<br>`;
  response += `• Afternoon: ${itinerary.day2.afternoon}<br>`;
  response += `• Evening: ${itinerary.day2.evening}<br>`;
}
else if (containsAny(input, ['3 day', '3-day', 'three day', 'तीन दिन'])) {
  const itinerary = chatbotData.itineraries["3day"];
  response = `<strong>${itinerary.title}</strong><br>`;
  response += `<b>Day 1:</b><br>`;
  response += `• Morning: ${itinerary.day1.morning}<br>`;
  response += `• Afternoon: ${itinerary.day1.afternoon}<br>`;
  response += `• Evening: ${itinerary.day1.evening}<br><br>`;
  response += `<b>Day 2:</b><br>`;
  response += `• Morning: ${itinerary.day2.morning}<br>`;
  response += `• Afternoon: ${itinerary.day2.afternoon}<br>`;
  response += `• Evening: ${itinerary.day2.evening}<br><br>`;
  response += `<b>Day 3:</b><br>`;
  response += `• Morning: ${itinerary.day3.morning}<br>`;
  response += `• Afternoon: ${itinerary.day3.afternoon}<br>`;
  response += `• Evening: ${itinerary.day3.evening}<br>`;
}
else if (containsAny(input, ['weekend', 'सप्ताहांत'])) {
  const itinerary = chatbotData.itineraries.weekend;
  response = `<strong>${itinerary.title}</strong><br>`;
  response += `<b>Day 1:</b><br>`;
  response += `• Morning: ${itinerary.day1.morning}<br>`;
  response += `• Afternoon: ${itinerary.day1.afternoon}<br>`;
  response += `• Evening: ${itinerary.day1.evening}<br><br>`;
  response += `<b>Day 2:</b><br>`;
  response += `• Morning: ${itinerary.day2.morning}<br>`;
  response += `• Afternoon: ${itinerary.day2.afternoon}<br>`;
  response += `• Evening: ${itinerary.day2.evening}<br>`;
}
else {
  // General itinerary information
  response = "<strong>Nashik Itinerary Options:</strong><br>";
  response += "I have detailed itineraries for:<br>";
  response += "• One-day visit<br>";
  response += "• Two-day trip<br>";
  response += "• Three-day exploration<br>";
  response += "• Weekend getaway<br><br>";
  response += "How many days are you planning to spend in Nashik?";
}

return response;
}

// Generate response for transportation
function generateTransportationResponse(input) {
let response = "";

if (containsAny(input, ['reach', 'to nashik', 'getting to', 'from mumbai', 'from pune'])) {
  response = "<strong>How to Reach Nashik:</strong><br>";
  response += `• <b>By Train</b>: ${chatbotData.transportation.reaching.train}<br>`;
  response += `• <b>By Bus</b>: ${chatbotData.transportation.reaching.bus}<br>`;
  response += `• <b>By Flight</b>: ${chatbotData.transportation.reaching.flight}<br>`;
  response += `• <b>By Car</b>: ${chatbotData.transportation.reaching.car}<br>`;
}
else if (containsAny(input, ['local', 'within', 'around', 'inside'])) {
  response = "<strong>Getting Around in Nashik:</strong><br>";
  response += `• <b>Auto-rickshaws</b>: ${chatbotData.transportation.local.autorickshaw}<br>`;
  response += `• <b>Taxis</b>: ${chatbotData.transportation.local.taxi}<br>`;
  response += `• <b>City Buses</b>: ${chatbotData.transportation.local.bus}<br>`;
  response += `• <b>Rentals</b>: ${chatbotData.transportation.local.rental}<br>`;
}
else if (containsAny(input, ['distance', 'far', 'how long', 'how much time'])) {
  response = "<strong>Key Distances from Nashik:</strong><br>";
  for (const [route, distance] of Object.entries(chatbotData.transportation.distances)) {
    response += `• <b>${route}</b>: ${distance}<br>`;
  }
}
else {
  // General transportation information
  response = "<strong>Transportation in Nashik:</strong><br>";
  response += "• <b>Reaching Nashik</b>: Well-connected by trains from Mumbai (3.5 hrs), buses from major cities, and limited flights<br>";
  response += "• <b>Local Transport</b>: Auto-rickshaws, taxis, limited city buses, and vehicle rentals available<br>";
  response += "• <b>From Mumbai</b>: 170 km (3 hrs) by road<br><br>";
  response += "Would you like specific information about reaching Nashik or getting around the city?";
}

return response;
}

// Generate response for weather
function generateWeatherResponse() {
let response = "<strong>Best Time to Visit Nashik:</strong><br>";
response += `• <b>Peak Season</b>: ${chatbotData.weather.bestTime}<br>`;
response += `• <b>Monsoon</b>: ${chatbotData.weather.monsoon}<br>`;
response += `• <b>Summer</b>: ${chatbotData.weather.summer}<br>`;
response += `• <b>Winter</b>: ${chatbotData.weather.winter}<br>`;
response += `• <b>Festival Times</b>: ${chatbotData.weather.festivals}<br>`;
return response;
}

// Generate response for accommodation
function generateAccommodationResponse(input) {
let response = "";

if (containsAny(input, ['luxury', 'premium', '5 star', 'five star', 'लक्ज़री'])) {
  response = "<strong>Luxury Accommodations in Nashik:</strong><br>";
  chatbotData.accommodations.luxury.forEach(hotel => {
    response += `• <b>${hotel.name}</b>: Located at ${hotel.location}. Features: ${hotel.features}<br>`;
  });
}
else if (containsAny(input, ['mid', 'medium', 'moderate', 'mid-range', 'मध्यम'])) {
  response = "<strong>Mid-Range Accommodations in Nashik:</strong><br>";
  chatbotData.accommodations.midRange.forEach(hotel => {
    response += `• <b>${hotel.name}</b>: Located at ${hotel.location}. Features: ${hotel.features}<br>`;
  });
}
else if (containsAny(input, ['budget', 'cheap', 'affordable', 'low cost', 'किफायती'])) {
  response = "<strong>Budget Accommodations in Nashik:</strong><br>";
  chatbotData.accommodations.budget.forEach(hotel => {
    response += `• <b>${hotel.name}</b>: Located at ${hotel.location}. Features: ${hotel.features}<br>`;
  });
}
else if (containsAny(input, ['temple', 'religious', 'pilgrimage', 'धार्मिक'])) {
  response = "<strong>Accommodations Near Temples:</strong><br>";
  chatbotData.accommodations.nearTemples.forEach(hotel => {
    response += `• <b>${hotel.name}</b>: Located at ${hotel.location}. Features: ${hotel.features}<br>`;
  });
}
else if (containsAny(input, ['wine', 'vineyard', 'winery', 'sula', 'वाइन'])) {
  response = "<strong>Accommodations Near Wineries:</strong><br>";
  chatbotData.accommodations.nearWineries.forEach(hotel => {
    response += `• <b>${hotel.name}</b>: Located at ${hotel.location}. Features: ${hotel.features}<br>`;
  });
}
else {
  // General accommodation information
  response = "<strong>Accommodation Options in Nashik:</strong><br>";
  response += "• <b>Luxury</b>: The Gateway Hotel, Express Inn, Sula Vineyards Resort<br>";
  response += "• <b>Mid-Range</b>: Quality Inn Regency, Ginger Nashik<br>";
  response += "• <b>Budget</b>: Hotel Panchavati, Hotel Kaveri<br>";
  response += "• <b>Near Temples</b>: Hotel Virasat, MTDC Resort<br>";
  response += "• <b>Near Wineries</b>: Sula The Source, Beyond by Sula<br><br>";
  response += "What type of accommodation are you looking for?";
}

return response;
}

// Generate response for food
function generateFoodResponse() {
let response = "<strong>Food in Nashik:</strong><br>";
response += "<b>Local Specialties:</b><br>";
chatbotData.food.local.forEach(dish => {
  response += `• <b>${dish.name}</b>: ${dish.description}. Try at: ${dish.where}<br>`;
});
response += "<br><b>Popular Restaurants:</b><br>";
chatbotData.food.restaurants.slice(0, 3).forEach(restaurant => {
  response += `• <b>${restaurant.name}</b> (${restaurant.location}): ${restaurant.cuisine}<br>`;
});
response += "<br><b>Cafes & Wine Tasting:</b><br>";
chatbotData.food.cafes.forEach(cafe => {
  response += `• <b>${cafe.name}</b> (${cafe.location}): ${cafe.specialty}<br>`;
});
return response;
}

// Generate response for events
function generateEventsResponse() {
let response = "<strong>Events & Festivals in Nashik:</strong><br>";
chatbotData.events.forEach(event => {
  response += `• <b>${event.name}</b> (${event.timing}): ${event.description}<br>`;
});
return response;
}

// Generate response for wineries
function generateWineryResponse() {
let response = "<strong>Nashik Wine Tourism:</strong><br>";
response += "Nashik is known as India's Wine Capital with several world-class vineyards.<br><br>";
response += "<b>Top Wineries to Visit:</b><br>";
chatbotData.touristSpots.wineries.forEach(winery => {
  response += `• <b>${winery.name}</b>: ${winery.description}. Located at ${winery.location}<br>`;
});
response += "<br><b>Wine Tourism Tips:</b><br>";
response += "• Best time for vineyard visits: November to March<br>";
response += "• Grape harvesting season: January-February<br>";
response += "• Most wineries offer guided tours, tastings, and have restaurants<br>";
response += "• SulaFest (February) is a popular wine and music festival<br>";
return response;
}

// Scroll to bottom of chat
function scrollToBottom() {
chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize the chatbot
initChatbot();
});
document.addEventListener('DOMContentLoaded', function() {
  // Widget elements
  const trigger = document.getElementById('reviewWidgetTrigger');
  const panel = document.getElementById('reviewWidgetPanel');
  const closeBtn = document.getElementById('closeReviewPanel');
  const tabs = document.querySelectorAll('.panel-tab');
  const tabContents = document.querySelectorAll('.panel-content');
  const writeFirstBtn = document.getElementById('writeFirstReview');
  const widgetContainer = document.getElementById('nashikReviewWidget');
  
  // Position widget in lower left corner
  function positionWidget() {
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '20px';
    widgetContainer.style.left = '20px';
    widgetContainer.style.right = 'auto';
    widgetContainer.style.top = 'auto';
    
    // Position panel to open upward
    panel.style.bottom = '60px'; // Position above the trigger button
    panel.style.top = 'auto';    // Clear any top positioning
    panel.style.left = '20px';   // Align with the trigger
  }
  
  // Set position on page load
  positionWidget();
  
  // Remove any saved position
  localStorage.removeItem('nashikWidgetPosition');
  
  // Toggle panel visibility
  trigger.addEventListener('click', function() {
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close panel
  closeBtn.addEventListener('click', function() {
    panel.style.display = 'none';
  });
  
  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabType = this.getAttribute('data-tab');
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update active content
      tabContents.forEach(content => content.classList.remove('active'));
      if (tabType === 'read') {
        document.getElementById('readReviewsTab').classList.add('active');
      } else {
        document.getElementById('writeReviewTab').classList.add('active');
      }
    });
  });
  
  // "Be the first to review" button
  writeFirstBtn.addEventListener('click', function() {
    tabs.forEach(t => t.classList.remove('active'));
    tabs[1].classList.add('active');
    
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById('writeReviewTab').classList.add('active');
  });
  
  // Form submission
  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const location = document.getElementById('reviewLocation').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const title = document.getElementById('reviewTitle').value;
    const text = document.getElementById('reviewText').value;
    const name = document.getElementById('reviewerName').value;
    const date = document.getElementById('visitDate').value;
    
    // Create review object
    const review = {
      id: Date.now(),
      location,
      rating,
      title,
      text,
      name,
      date,
      timestamp: new Date().toISOString()
    };
    
    // Save to local storage
    saveReview(review);
    
    // Reset form
    reviewForm.reset();
    
    // Switch to read tab
    tabs[0].click();
    
    // Show success notification
    alert('Thank you for your review!');
  });
  
  // Location filter change
  const locationFilter = document.getElementById('reviewLocationFilter');
  locationFilter.addEventListener('change', function() {
    displayReviews();
  });
  
  // Save review to local storage
  function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('nashikReviews')) || [];
    reviews.push(review);
    localStorage.setItem('nashikReviews', JSON.stringify(reviews));
    displayReviews();
  }
  
  // Display reviews based on filter
  function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const selectedLocation = locationFilter.value;
    
    // Get reviews from storage
    let reviews = JSON.parse(localStorage.getItem('nashikReviews')) || [];
    
    // Filter by location if not "all"
    if (selectedLocation !== 'all') {
      reviews = reviews.filter(r => r.location === selectedLocation);
    }
    
    // Sort by newest first
    reviews.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Clear current list
    reviewsList.innerHTML = '';
    
    // Show empty state if no reviews
    if (reviews.length === 0) {
      reviewsList.innerHTML = `
        <div class="empty-reviews-message">
          <p>No reviews yet for this location.</p>
          <button class="write-review-btn" id="writeFirstReviewInner">Be the first to review!</button>
        </div>
      `;
      
      document.getElementById('writeFirstReviewInner').addEventListener('click', function() {
        tabs[1].click();
      });
      
      return;
    }
    
    // Add reviews to the list
    reviews.forEach(review => {
      const card = document.createElement('div');
      card.className = 'review-card';
      
      // Format date
      const visitDate = new Date(review.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      
      // Create stars based on rating
      const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      
      card.innerHTML = `
        <div class="review-header">
          <div class="review-location">${review.location}</div>
          <div class="review-stars">${stars}</div>
        </div>
        <div class="review-title">${review.title}</div>
        <div class="review-text">${review.text}</div>
        <div class="review-meta">
          <span>${review.name}</span>
          <span>Visited: ${visitDate}</span>
        </div>
      `;
      
      reviewsList.appendChild(card);
    });
  }
  
  // Initial display of reviews
  displayReviews();
  
  // Handle clicks outside panel to close it
  document.addEventListener('click', function(e) {
    if (!panel.contains(e.target) && !trigger.contains(e.target) && panel.style.display === 'block') {
      panel.style.display = 'none';
    }
  });
  
  // Remove cursor grab styles since it's no longer draggable
  trigger.style.cursor = 'pointer';
});
