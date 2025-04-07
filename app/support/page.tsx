// app/page.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
          <p className="text-xl md:text-2xl max-w-2xl">Get the help you need with our comprehensive support resources.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">New to our software? Learn the basics and set up your account.</p>
            <Link href="/guides/getting-started" className="text-blue-600 flex items-center">
              View guides <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
            <p className="text-gray-600 mb-4">Find solutions to common problems and error messages.</p>
            <Link href="/guides/troubleshooting" className="text-blue-600 flex items-center">
              Resolve issues <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Feature Guides</h2>
            <p className="text-gray-600 mb-4">Detailed instructions on how to use specific features.</p>
            <Link href="/guides/features" className="text-blue-600 flex items-center">
              Explore features <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How do I reset my password?",
                answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions."
              },
              {
                question: "Can I cancel my subscription at any time?",
                answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will remain until the end of your current billing period."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we use industry-standard encryption and security practices to protect your data. All information is stored on secure servers with regular backups."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/faq" className="text-blue-600 flex items-center">
              View all FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
          <p className="text-gray-600 mb-6">Can&apos;t find what you&apos;re looking for? Our support team is here to help.</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}









