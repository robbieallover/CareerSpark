// Set a cookie
document.cookie = 'user=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';

// Get a cookie
const userCookie = document.cookie.split(';').find(cookie => cookie.includes('user'));
const userName = userCookie ? userCookie.split('=')[1].trim() : null;
