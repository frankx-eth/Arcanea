import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static('public'));

// Sample data - in a real app, this would come from MCP Server Memory
const sampleData = {
  nodes: [
    // Primordial Elements
    { id: 'earth', group: 1, type: 'primordial', description: 'The foundation, stability, material form' },
    { id: 'water', group: 1, type: 'primordial', description: 'Flow, emotion, intuition, adaptation' },
    { id: 'air', group: 1, type: 'primordial', description: 'Thought, communication, freedom, abstraction' },
    { id: 'fire', group: 1, type: 'primordial', description: 'Energy, transformation, will, passion' },
    { id: 'spirit', group: 1, type: 'primordial', description: 'Consciousness, connection, the numinous' },
    { id: 'void', group: 1, type: 'primordial', description: 'Potential, the unmanifest, pure possibility' },
    
    // Combined Archetypes
    { id: 'stone', group: 2, type: 'archetype', description: 'earth + water :: Endurance, patience, memory' },
    { id: 'crystal', group: 2, type: 'archetype', description: 'earth + air :: Structure, clarity, focus' },
    { id: 'metal', group: 2, type: 'archetype', description: 'earth + fire :: Strength, refinement, value' },
    { id: 'mist', group: 2, type: 'archetype', description: 'water + air :: Dreams, intuition, mystery' },
    { id: 'storm', group: 2, type: 'archetype', description: 'air + fire :: Sudden change, inspiration' },
    
    // Higher Order Archetypes
    { id: 'time', group: 3, type: 'higher', description: 'earth + spirit :: Cycles, duration, history' },
    { id: 'space', group: 3, type: 'higher', description: 'air + spirit :: Connection, relationship, context' },
    { id: 'mind', group: 3, type: 'higher', description: 'fire + spirit :: Intellect, will, focus' },
    { id: 'soul', group: 3, type: 'higher', description: 'water + spirit :: Emotion, intuition, depth' },
  ],
  links: [
    // Elemental combinations
    { source: 'earth', target: 'stone', value: 1 },
    { source: 'water', target: 'stone', value: 1 },
    
    { source: 'earth', target: 'crystal', value: 1 },
    { source: 'air', target: 'crystal', value: 1 },
    
    { source: 'earth', target: 'metal', value: 1 },
    { source: 'fire', target: 'metal', value: 1 },
    
    { source: 'water', target: 'mist', value: 1 },
    { source: 'air', target: 'mist', value: 1 },
    
    { source: 'air', target: 'storm', value: 1 },
    { source: 'fire', target: 'storm', value: 1 },
    
    // Higher order connections
    { source: 'earth', target: 'time', value: 2 },
    { source: 'spirit', target: 'time', value: 2 },
    
    { source: 'air', target: 'space', value: 2 },
    { source: 'spirit', target: 'space', value: 2 },
    
    { source: 'fire', target: 'mind', value: 2 },
    { source: 'spirit', target: 'mind', value: 2 },
    
    { source: 'water', target: 'soul', value: 2 },
    { source: 'spirit', target: 'soul', value: 2 },
  ]
};

// API endpoint to get graph data
app.get('/api/graph', (req, res) => {
  try {
    res.json(sampleData);
  } catch (error) {
    console.error('Error fetching graph data:', error);
    res.status(500).json({ error: 'Failed to fetch graph data' });
  }
});

// Serve the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
