import axios from 'axios';

const API_URL = 'https://your-backend-api.com'; // Replace with your actual backend API URL

export const registerUser = async (userData: any) => {
    return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (credentials: any) => {
    return await axios.post(`${API_URL}/auth/login`, credentials);
};

export const uploadFile = async (file: File, token: string) => {
    const formData = new FormData();
    formData.append('file', file);
    
    return await axios.post(`${API_URL}/files/upload`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const fetchFiles = async (token: string) => {
    return await axios.get(`${API_URL}/files`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const deleteFile = async (fileId: string, token: string) => {
    return await axios.delete(`${API_URL}/files/${fileId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
