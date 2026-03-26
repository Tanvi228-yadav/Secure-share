// authentication utilities for token management, login, logout, and session handling

// Save token to local storage
export const saveToken = (token) => {
    localStorage.setItem('authToken', token);
};

// Retrieve token from local storage
export const getToken = () => {
    return localStorage.getItem('authToken');
};

// Remove token from local storage
export const removeToken = () => {
    localStorage.removeItem('authToken');
};

// Mock login function
export const login = async (username, password) => {
    // Normally here we would make an API call to validate user credentials
    const mockToken = 'mockToken123'; // Mock token for demonstration
    saveToken(mockToken);
    return mockToken;
};

// Logout function
export const logout = () => {
    removeToken();
};

// Check if user is logged in
export const isLoggedIn = () => {
    return getToken() !== null;
};

// Function to handle sessions
export const handleSession = () => {
    if (!isLoggedIn()) {
        // Redirect to login or show login modal
        console.log('User is not logged in. Redirecting to login...');
    }
};