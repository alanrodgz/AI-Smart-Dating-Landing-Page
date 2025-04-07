
// app/guides/page.tsx
import Link from 'next/link';

export default function Guides() {
  const guideCategories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of our software and set up your account.',
      link: '/guides/getting-started',
      articles: [
        { title: 'Creating an account', link: '/guides/getting-started/create-account' },
        { title: 'Setting up your profile', link: '/guides/getting-started/profile-setup' },
        { title: 'Understanding the dashboard', link: '/guides/getting-started/dashboard' },
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Solve common problems and error messages.',
      link: '/guides/troubleshooting',
      articles: [
        { title: 'Login issues', link: '/guides/troubleshooting/login-issues' },
        { title: 'Connection problems', link: '/guides/troubleshooting/connection' },
        { title: 'Data sync errors', link: '/guides/troubleshooting/sync-errors' },
      ]
    },
    {
      title: 'Feature Guides',
      description: 'Detailed instructions for using specific features.',
      link: '/guides/features',
      articles: [
        { title: 'Project management', link: '/guides/features/project-management' },
        { title: 'Reporting tools', link: '/guides/features/reporting' },
        { title: 'Collaboration features', link: '/guides/features/collaboration' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Support Guides</h1>
          <p className="text-xl max-w-2xl">Browse our comprehensive collection of guides to help you get the most out of our software.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {guideCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.articles.map((article, articleIndex) => (
                <Link key={articleIndex} href={article.link} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                  <p className="text-blue-600">Read article →</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}