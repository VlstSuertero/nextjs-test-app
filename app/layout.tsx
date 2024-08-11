import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
        <body className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-xl font-bold">Pet Breed Explorer</h1>
            </header>

            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 Pet Breed Explorer. All rights reserved.</p>
            </footer>
        </body>
      </html>
  );
}
