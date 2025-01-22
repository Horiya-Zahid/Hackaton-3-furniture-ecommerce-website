import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'm91nv8ug', // Replace with your project ID
  dataset: 'production',      // Replace with your dataset name (e.g., 'production')
  useCdn: true,                 // True for faster response, false for real-time data
  apiVersion: '2023-01-01',     // Replace with your API version
});

export default client;
