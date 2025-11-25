import mongoose from "mongoose";

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'test-db';

await mongoose.connect(dbUrl, { dbName });