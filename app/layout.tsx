// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

// Define your app name as a constant
const APP_NAME = 'AI Wingman';

export const metadata: Metadata = {
  title: `Support Center | ${APP_NAME}`,
  description: `Technical support for ${APP_NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">{APP_NAME}</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/guides" className="text-gray-600 hover:text-blue-600">Guides</Link>
              <Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
              <button className="text-gray-600">Menu</button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">{APP_NAME}</h3>
                {/* <p className="text-gray-300">Making your work easier since 2023.</p> */}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="/guides" className="text-gray-300 hover:text-white">Guides</Link></li>
                  <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
              {/* <div>
                <h3 className="font-bold text-lg mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="https://twitter.com" className="text-gray-300 hover:text-white">Twitter</a></li>
                  <li><a href="https://linkedin.com" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                  <li><a href="https://github.com" className="text-gray-300 hover:text-white">GitHub</a></li>
                </ul>
              </div> */}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}