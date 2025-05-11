import { createServer } from 'http';
import { parse } from 'url';
import express from 'express';
import path from 'path';
import fs from 'fs';

// Initialize express
const app = express();
app.use(express.json());

// Import routes
const routes = require('../dist/routes');

// Register routes
routes.registerRoutes(app);

// Handle all API requests
export default function handler(req, res) {
  // Create a node server instance to handle the request
  const server = createServer((nodeReq, nodeRes) => {
    // Process the incoming request
    app(nodeReq, nodeRes);
  });
  
  // Pass the request to the server
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  
  server.emit('request', req, res);
} 