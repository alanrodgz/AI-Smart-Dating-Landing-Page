// app/contact/page.tsx
'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Support Home
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Contact Support</h1>

          {  
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-6">
              <p>Thank you for contacting us! We&apos;ve received your request and will get back to you as soon as possible.</p>
            </div>
          }

                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <div className="flex flex-col">
                          <div>
                              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                              <div className="space-y-6">
                                  <div>
                                      <h3 className="text-lg font-medium">Contact Person</h3>
                                      <p className="text-gray-600">Alan Rodriguez</p>
                                  </div>
                                  <div>
                                      <h3 className="text-lg font-medium">Email Support</h3>
                                      <p className="text-gray-600">rufortian@gmail.com</p>
                                  </div>
                                  <div>
                                      <h3 className="text-lg font-medium">Phone Support</h3>
                                      <p className="text-gray-600">(510) 592-4834</p>
                                      <p className="text-sm text-gray-500">Monday-Friday, 9AM-5PM ET</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
}