import React, { useState } from 'react';

const FileManager = () => {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleShare = (fileName) => {
    // Logic for sharing the file
    alert(`Sharing ${fileName}`);
  };

  const handleDownload = (fileName) => {
    // Logic for downloading the file
    alert(`Downloading ${fileName}`);
  };

  return (
    <div>
      <h1>File Manager</h1>
      <input type="text" placeholder="Search files..." value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredFiles.map(file => (
          <li key={file.name}>
            {file.name}
            <button onClick={() => handleShare(file.name)}>Share</button>
            <button onClick={() => handleDownload(file.name)}>Download</button>
            <button onClick={() => handleDelete(file.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManager;
