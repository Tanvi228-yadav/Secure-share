import React, { useState } from 'react';
import Modal from 'react-modal';

const ShareModal = ({ isOpen, onRequestClose }) => {
    const [emails, setEmails] = useState('');
    const [permissions, setPermissions] = useState('read');
    const [expirationDate, setExpirationDate] = useState('');

    const handleShare = () => {
        // Implement share functionality here
        console.log(`Sharing files with: ${emails}, Permissions: ${permissions}, Expiration Date: ${expirationDate}`);
        // Reset form values
        setEmails('');
        setPermissions('read');
        setExpirationDate('');
        onRequestClose(); // Close modal after sharing
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Share Files</h2>
            <form>
                <label>
                    User Emails:
                    <input
                        type="text"
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                        placeholder="Enter email addresses, separated by commas"
                    />
                </label>
                <label>
                    Permissions:
                    <select value={permissions} onChange={(e) => setPermissions(e.target.value)}>
                        <option value="read">Read</option>
                        <option value="write">Write</option>
                    </select>
                </label>
                <label>
                    Expiration Date:
                    <input
                        type="datetime-local"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleShare}>Share</button>
            </form>
        </Modal>
    );
};

export default ShareModal;
