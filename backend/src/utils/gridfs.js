const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');


let gfsBucket;


function initGridFS() {
const conn = mongoose.connection;
gfsBucket = new GridFSBucket(conn.db, { bucketName: 'uploads' });
}


function getBucket() { if (!gfsBucket) throw new Error('GridFS not initialized'); return gfsBucket; }


module.exports = { initGridFS, getBucket };