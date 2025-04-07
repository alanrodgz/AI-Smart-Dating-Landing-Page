// app/privacy-policy/page.tsx
"use client";

import React from 'react';

// Section component for each privacy policy section
const SectionView = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700 whitespace-pre-line">{content}</p>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">PRIVACY POLICY</h1>
        
        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-6">Last Updated: February 24, 2025</p>
        
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700">
            Wingman AI (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and disclose your data when you use our application (&ldquo;App&rdquo;).
          </p>
        </div>
        
        {/* Section 1: Information We Collect */}
        <SectionView 
          title="1. INFORMATION WE COLLECT" 
          content="Account Information: Name, email, payment details.
Usage Data: AI-generated insights, interactions, and logs.
Device Information: IP address, device ID, browser type."
        />
        
        {/* Section 2: How We Use Your Data */}
        <SectionView 
          title="2. HOW WE USE YOUR DATA" 
          content="To provide, maintain, and improve the App.
To personalize user experiences and analyze usage trends.
To ensure security, prevent fraud, and comply with legal obligations."
        />
        
        {/* Section 3: Data Storage, Retention, and Deletion */}
        <SectionView 
          title="3. DATA STORAGE, RETENTION, AND DELETION" 
          content="Data is stored on Google Firebase and may later be hosted on AWS.
Users can request data deletion at any time by contacting rufortian@gmail.com.
Data is retained for the duration necessary to fulfill legal and operational requirements."
        />
        
        {/* Section 4: Disclosure of Information */}
        <SectionView 
          title="4. DISCLOSURE OF INFORMATION" 
          content="We do not sell personal data.
Data may be shared with third-party service providers such as OpenAI, Google Firebase, AWS, and Digital Ocean, solely for the purpose of providing the App's functionality."
        />
        
        {/* Section 5: Security Measures */}
        <SectionView 
          title="5. SECURITY MEASURES" 
          content="We implement industry-standard security measures to protect data.
Despite our efforts, no system is 100% secure; users assume the risks associated with data transmission."
        />
        
        {/* Section 6: User Rights */}
        <SectionView 
          title="6. USER RIGHTS" 
          content="Users have the right to request access, correction, or deletion of their data.
Privacy preferences can be managed within account settings."
        />
        
        {/* Section 7: Age Restrictions */}
        <SectionView 
          title="7. AGE RESTRICTIONS" 
          content="The App is strictly limited to users aged 18 and older."
        />
        
        {/* Section 8: Changes to Privacy Policy */}
        <SectionView 
          title="8. CHANGES TO PRIVACY POLICY" 
          content="We reserve the right to modify this Privacy Policy at any time.
Continued use of the App constitutes acceptance of any changes."
        />
        
        {/* Section 9: Contact Information */}
        <SectionView 
          title="9. CONTACT INFORMATION" 
          content="For privacy-related inquiries, contact us at rufortian@gmail.com."
        />
        
        {/* Acknowledgment */}
        <p className="text-sm text-gray-500 mt-6">
          By using Wingman AI, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
}