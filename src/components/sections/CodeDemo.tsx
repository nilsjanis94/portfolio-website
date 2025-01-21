'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const demos = [
  {
    title: 'Machine Learning mit Python',
    code: `import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Daten vorbereiten
X = np.random.rand(100, 1)
y = 2 * X + 1 + np.random.randn(100, 1) * 0.1

# Model trainieren
model = LinearRegression()
model.fit(X, y)

# Vorhersagen
predictions = model.predict(X)`,
    language: 'python'
  },
  {
    title: 'Next.js API Route',
    code: `export async function POST(req: Request) {
  try {
    const { data } = await req.json();
    const result = await processData(data);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
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
    code: `export function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
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
    code: `<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 p-6 bg-gradient-to-br 
    from-blue-500 to-purple-600 
    rounded-lg shadow-lg
    transform hover:scale-105 
    transition-all duration-300"
  >
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

  return (
    <section id="code-demo" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Code Beispiele
          </span>
        </motion.h2>
        
        <div className="flex gap-4 mb-8 justify-center">
          {demos.map((demo, index) => (
            <motion.button
              key={demo.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDemo(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
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
          className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          <SyntaxHighlighter
            language={demos[activeDemo].language}
            style={atomDark}
            showLineNumbers
            className="text-sm md:text-base"
          >
            {demos[activeDemo].code}
          </SyntaxHighlighter>
        </motion.div>
      </div>
    </section>
  );
} 