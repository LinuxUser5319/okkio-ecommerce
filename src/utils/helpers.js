// Helper functions for the application

// Format price with currency
export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, discountPrice) => {
  const discount = ((originalPrice - discountPrice) / originalPrice) * 100;
  return Math.round(discount);
};

// Format rating for display
export const formatRating = (rating) => {
  return rating.toFixed(1);
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Debounce function for search
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Get image placeholder URL
export const getImagePlaceholder = (width = 300, height = 300) => {
  return `https://via.placeholder.com/${width}x${height}?text=Image`;
};