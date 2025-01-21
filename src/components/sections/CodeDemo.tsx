'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TypeAnimation } from 'react-type-animation';

const demos = [
  {
    title: 'NumPy Data Analysis',
    code: `import numpy as np

# 1. Daten generieren
# Erstelle 1000 normalverteilte Zufallszahlen
data = np.random.normal(0, 1, 1000)

# 2. Statistische Analyse
# Berechne Mittelwert, Standardabweichung und Quartile
mean = np.mean(data)
std = np.std(data)
percentiles = np.percentile(data, [25, 50, 75])  # Q1, Median, Q3

# 3. Datenverarbeitung
# Filtere Werte über dem Mittelwert
filtered_data = data[data > mean]
# Z-Score Normalisierung
normalized_data = (data - mean) / std

# 4. Matrix-Transformationen
# Reshape in 25x40 Matrix für Korrelationsanalyse
matrix = data.reshape((25, 40))
# Berechne Korrelationsmatrix
correlation = np.corrcoef(matrix)
# Eigenwertanalyse der Korrelationsmatrix
eigenvalues = np.linalg.eigvals(correlation)`,
    language: 'python'
  },
  {
    title: 'PyTorch Neural Network',
    code: `import torch
import torch.nn as nn

# Definition eines einfachen neuronalen Netzwerks für MNIST
class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        # Flatten-Layer für Eingabedaten (28x28 Pixel)
        self.flatten = nn.Flatten()
        
        # Sequentielles Modell mit drei Schichten
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 512),    # Eingabeschicht -> Hidden Layer 1
            nn.ReLU(),                # Aktivierungsfunktion
            nn.Dropout(0.2),          # Dropout zur Regularisierung
            nn.Linear(512, 256),      # Hidden Layer 1 -> Hidden Layer 2
            nn.ReLU(),                # Aktivierungsfunktion
            nn.Linear(256, 10)        # Ausgabeschicht (10 Klassen)
        )

    def forward(self, x):
        x = self.flatten(x)           # Flatten des Eingabebildes
        logits = self.linear_relu_stack(x)
        return logits

# Modell, Verlustfunktion und Optimizer initialisieren
model = NeuralNetwork()
loss_fn = nn.CrossEntropyLoss()      # Standardverlustfunktion für Klassifikation
optimizer = torch.optim.Adam(model.parameters())  # Adam-Optimizer`,
    language: 'python'
  },
  {
    title: 'SQL Datenanalyse',
    code: `-- Temporäre Tabelle (CTE) für Benutzerstatistiken
WITH UserStats AS (
  SELECT 
    user_id,
    COUNT(*) as total_orders,         -- Gesamtanzahl der Bestellungen
    SUM(order_total) as total_spent,  -- Gesamtausgaben
    AVG(order_total) as avg_order_value  -- Durchschnittlicher Bestellwert
  FROM orders
  -- Nur Bestellungen des letzten Jahres
  WHERE order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
  GROUP BY user_id
)

-- Hauptabfrage für Top-Kunden
SELECT 
  u.user_name,
  us.total_orders,
  ROUND(us.total_spent, 2) as total_spent,      -- Auf 2 Dezimalstellen gerundet
  ROUND(us.avg_order_value, 2) as avg_order     -- Auf 2 Dezimalstellen gerundet
FROM UserStats us
JOIN users u ON u.id = us.user_id               -- Verknüpfung mit Benutzertabelle
WHERE us.total_orders > 10                      -- Nur aktive Kunden
ORDER BY us.total_spent DESC                    -- Sortierung nach Ausgaben
LIMIT 10;                                       -- Top 10 Kunden`,
    language: 'sql'
  },
  {
    title: 'Next.js API Route',
    code: `// API-Route für Datenverarbeitung
export async function POST(req: Request) {
  try {
    // Daten aus Request-Body extrahieren
    const { data } = await req.json();
    
    // Datenverarbeitung durchführen
    // processData ist eine hypothetische Funktion
    const result = await processData(data);
    
    // Erfolgreiche Antwort zurückgeben
    return NextResponse.json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    // Fehlerbehandlung
    return NextResponse.json(
      { error: 'Processing failed' },
      { status: 500 }
    );
  }
}`,
    language: 'typescript'
  },
  {
    title: 'Framer Motion',
    code: `// Animierte Karten-Komponente mit Framer Motion
export function AnimatedCard({ children }) {
  return (
    <motion.div
      // Initial-Zustand beim Mounten
      initial={{ opacity: 0, y: 20 }}
      
      // Animation beim Sichtbarwerden
      whileInView={{ opacity: 1, y: 0 }}
      
      // Hover-Animation
      whileHover={{ scale: 1.05 }}
      
      // Übergangseinstellungen
      transition={{ duration: 0.3 }}
      
      // Tailwind-Styling
      className="rounded-lg shadow-lg p-6"
    >
      {children}
    </motion.div>
  );
}`,
    language: 'typescript'
  },
  {
    title: 'Tailwind CSS',
    code: `<!-- Responsive Flex-Container mit Tailwind CSS -->
<div className="flex flex-col md:flex-row gap-4">
  <!-- Gradient-Karte mit Hover-Effekt -->
  <div className="
    flex-1 p-6 
    bg-gradient-to-br from-blue-500 to-purple-600  /* Farbverlauf */
    rounded-lg shadow-lg                           /* Styling */
    transform hover:scale-105                      /* Hover-Animation */
    transition-all duration-300                    /* Übergangseffekt */
  ">
    <h2 className="text-2xl font-bold text-white">
      Responsive Card
    </h2>
  </div>
</div>`,
    language: 'html'
  }
];

export default function CodeDemo() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  return (
    <section id="code-demo" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Code Beispiele
          </span>
        </motion.h2>
        
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center px-2">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              onClick={() => setActiveDemo(index)}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-lg transition-colors whitespace-nowrap ${
                activeDemo === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              {demo.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          <div className="bg-[#2d2d2d] p-4">
            <TypeAnimation
              sequence={[
                demos[activeDemo].code,
                () => setIsTyping(false)
              ]}
              wrapper="div"
              cursor={true}
              repeat={0}
              speed={90}
              style={{ 
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                color: '#fff',
                overflowX: 'auto',
                fontSize: '14px'
              }}
              className="text-xs md:text-sm lg:text-base scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 