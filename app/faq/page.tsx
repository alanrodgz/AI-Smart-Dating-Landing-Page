// app/faq/page.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FAQ() {
  const faqCategories = [
    {
      category: 'Account & Billing',
      questions: [
        {
          question: 'How do I change my password?',
          answer: 'You can change your password by going to your Account Settings, selecting the Security tab, and clicking on "Change Password". You\'ll need to enter your current password and then your new password twice to confirm.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual subscriptions.'
        },
        {
          question: 'Can I cancel my subscription at any time?',
          answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will remain until the end of your current billing period.'
        },
        {
          question: 'How do I update my billing information?',
          answer: 'You can update your billing information by going to Account Settings, selecting the Billing tab, and clicking on "Update Payment Method".'
        }
      ]
    },
    {
      category: 'Software Features',
      questions: [
        {
          question: 'Can I export my data?',
          answer: 'Yes, we offer data export options in CSV, JSON, and Excel formats. Go to the Data section, select the data you want to export, and click the Export button.'
        },
        {
          question: 'Is there a limit to how many projects I can create?',
          answer: 'The number of projects you can create depends on your subscription plan. Free accounts can create up to 3 projects, Professional accounts up to 15, and Enterprise accounts have unlimited projects.'
        },
        {
          question: 'Can I collaborate with my team?',
          answer: 'Yes, our software offers robust collaboration features. You can invite team members, assign tasks, share documents, and communicate within the platform.'
        }
      ]
    },
    {
      category: 'Security & Privacy',
      questions: [
        {
          question: 'Is my data secure?',
          answer: 'Yes, we use industry-standard encryption and security practices to protect your data. All information is stored on secure servers with regular backups.'
        },
        {
          question: 'Do you comply with GDPR?',
          answer: 'Yes, our software is fully GDPR compliant. We have implemented all necessary measures to protect user data and privacy in accordance with European regulations.'
        },
        {
          question: 'Can I request deletion of my data?',
          answer: 'Yes, you can request complete deletion of your data at any time by contacting our support team or using the "Delete Account" option in your account settings.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Support Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        {faqCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
            <div className="space-y-6">
              {category.questions.map((faq, faqIndex) => (
                <div key={faqIndex} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-8">
          <h2 className="font-semibold text-lg mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-4">If you couldn&apos;t find the answer you were looking for, our support team is ready to help.</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}