import React, { useState } from 'react';

const FileDownload: React.FC = () => {
    const [decryptedFile, setDecryptedFile] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>('example.txt'); // Placeholder filename

    const decryptFile = async () => {
        // Implement your decryption logic here
        const fileContent = "Decrypted content goes here."; // Mocked content
        setDecryptedFile(fileContent);
    };

    const previewFile = () => {
        if (decryptedFile) {
            // Logic for previewing the file
            alert(`Previewing: ${decryptedFile}`);
        } else {
            alert("Please decrypt the file first.");
        }
    };

    const downloadFile = () => {
        if (decryptedFile) {
            const blob = new Blob([decryptedFile], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            alert("Please decrypt the file first.");
        }
    };

    return (
        <div>
            <button onClick={decryptFile}>Decrypt File</button>
            <button onClick={previewFile}>Preview File</button>
            <button onClick={downloadFile}>Download File</button>
        </div>
    );
};

export default FileDownload;