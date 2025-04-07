// app/terms-of-service/page.tsx
"use client";

import React from 'react';

// Section component for each ToS section
const SectionView = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">TERMS OF SERVICE</h1>
        
        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-6">Last Updated: February 24, 2025</p>
        
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700">
            Welcome to Wingman AI. These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and Wingman AI (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms govern your access to and use of the Wingman AI application (&ldquo;App&rdquo;), including any updates, modifications, or enhancements. By downloading, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must discontinue the use of the App immediately.
          </p>
        </div>
        
        {/* Section 1: Eligibility */}
        <SectionView 
          title="1. ELIGIBILITY" 
          content="You must be at least 18 years of age to access or use this App. By using the App, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement. The Company reserves the right to refuse service, terminate accounts, or remove or edit content at its sole discretion."
        />
        
        {/* Section 2: Modifications to Terms */}
        <SectionView 
          title="2. MODIFICATIONS TO TERMS" 
          content="We reserve the right to modify these Terms at any time at our sole discretion. Changes will become effective immediately upon posting. Continued use of the App after any modification constitutes your acceptance of the revised Terms."
        />
        
        {/* Section 3: Subscription, Payments, and Pricing */}
        <SectionView 
          title="3. SUBSCRIPTION, PAYMENTS, AND PRICING" 
          content="The App operates on a subscription-based model with in-app purchases available. The subscription fees and pricing are subject to change at our discretion with or without prior notice. Payments are processed via third-party payment processors, and you agree to comply with their terms and conditions. No refunds will be issued except where required by law."
        />
        
        {/* Section 4: Data Collection and Privacy */}
        <SectionView 
          title="4. DATA COLLECTION AND PRIVACY" 
          content="We collect and process personal data, including but not limited to account information, usage data, and AI-generated insights. Data is stored using Google Firebase and may later be hosted on AWS. For more details, please refer to our Privacy Policy."
        />
        
        {/* Section 5: User Obligations */}
        <SectionView 
          title="5. USER OBLIGATIONS" 
          content="You agree to use the App in compliance with all applicable laws and regulations. You are solely responsible for maintaining the confidentiality of your account credentials and activities conducted under your account. You shall not engage in unauthorized data extraction, reverse engineering, or misuse of the App."
        />
        
        {/* Section 6: Artificial Intelligence Limitations */}
        <SectionView 
          title="6. ARTIFICIAL INTELLIGENCE LIMITATIONS" 
          content="The App provides AI-generated insights and analyses for informational purposes only. The Company does not guarantee the accuracy, reliability, or applicability of AI-generated content. Users assume all risks associated with reliance on AI-generated recommendations."
        />
        
        {/* Section 7: Third-Party Services */}
        <SectionView 
          title="7. THIRD-PARTY SERVICES" 
          content="The App integrates with third-party services such as OpenAI, Google Firebase, AWS, and Digital Ocean. Your use of third-party services is subject to their respective terms of service and privacy policies."
        />
        
        {/* Section 8: Limitation of Liability */}
        <SectionView 
          title="8. LIMITATION OF LIABILITY" 
          content="TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM THE USE OR INABILITY TO USE THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE APP IN THE LAST 12 MONTHS."
        />
        
        {/* Section 9: User-Generated Content (Future Feature) */}
        <SectionView 
          title="9. USER-GENERATED CONTENT (FUTURE FEATURE)" 
          content="Users will be able to post and share content in future updates. The Company reserves the right to remove any content deemed inappropriate or in violation of these Terms."
        />
        
        {/* Section 10: Termination */}
        <SectionView 
          title="10. TERMINATION" 
          content="We reserve the right to suspend, restrict, or terminate your access to the App at any time for any violation of these Terms."
        />
        
        {/* Section 11: Governing Law and Dispute Resolution */}
        <SectionView 
          title="11. GOVERNING LAW AND DISPUTE RESOLUTION" 
          content="These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes shall be resolved through binding arbitration in [Your State], except where prohibited by law."
        />
        
        {/* Section 12: Contact Information */}
        <SectionView 
          title="12. CONTACT INFORMATION" 
          content="For any questions, please contact us at rufortian@gmail.com."
        />
      </div>
    </div>
  );
}