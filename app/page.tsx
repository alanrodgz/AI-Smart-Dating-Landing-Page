// app/page.tsx
// import Link from 'next/link';
import Image from 'next/image';
import AnimatedTryButton from '../components/AnimatedTryButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm text-sm font-medium mb-6">
                Your Ultimate Dating Companion
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Never Be Speechless On A Date <span className="text-pink-200">Again</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your personal AI wingman that whispers the perfect thing to say at the perfect time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <AnimatedTryButton />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-112">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl shadow-xl rotate-3 transform-gpu"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl -rotate-3 overflow-hidden transform-gpu">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src="/woman.jpeg"
                            alt="Woman profile"
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-800">Jessica</p>
                          {/* <p className="text-xs text-gray-500">Online</p> */}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-green-500 bg-green-100 px-2 py-1 rounded-full">
                        Active Date
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="bg-gray-100 rounded-xl p-3 mb-3 max-w-xs">
                        <p className="text-sm text-gray-800">What do you think about traveling? Any favorite places?</p>
                      </div>
                      <div className="flex justify-end mb-3">
                        <div className="bg-purple-600 text-white rounded-xl p-3 max-w-xs">
                          <p className="text-sm">I love exploring new cultures! Japan was incredible last year.</p>
                        </div>
                      </div>
                      <div className="bg-pink-100 border border-pink-200 rounded-xl p-3 mb-3 max-w-xs">
                        <p className="text-sm text-pink-700 font-medium">
                          💡 Wingman Tip: Ask about her favorite part of Japanese culture. People love sharing specific memories!
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      
                    <div className="flex justify-center">
  <button className="p-4 bg-red-600 text-white rounded-full flex items-center justify-center relative">
    <div className="absolute w-16 h-16 bg-red-200 rounded-full animate-ping opacity-50"></div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  </button>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by dating-app users in over 30 countries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['USA 🇺🇸', 'Canada 🇨🇦', 'UK 🇬🇧', 'Australia 🇦🇺'].map((app) => (
              <div key={app} className="text-gray-400 font-bold text-xl">{app}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DateWhisperer guides you through conversations with real-time suggestions and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🎯",
                title: "Real-time Assistance",
                description: "Get suggestions for what to say next based on the current conversation flow."
              },
              {
                icon: "🧠",
                title: "Learn & Adapt",
                description: "Our AI learns your dating style and adapts to provide personalized advice."
              },
              {
                icon: "📱",
                title: "Discreet Interface",
                description: "Subtle notifications and an intuitive design that won't distract from your date."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Date, Upgraded</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first dates to long-term relationships, we&apos;ve got your back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Connect Your Device",
                    description: "Pair your phone or wear subtle earbuds for audio suggestions."
                  },
                  {
                    number: "02",
                    title: "Start Your Date",
                    description: "The AI listens to your conversation and analyzes the emotional tone."
                  },
                  {
                    number: "03",
                    title: "Get Real-time Guidance",
                    description: "Receive suggested topics, follow-up questions, and even jokes when appropriate."
                  },
                  {
                    number: "04",
                    title: "Review & Learn",
                    description: "After your date, get insights on how it went and tips for improvement."
                  }
                ].map((step) => (
                  <div key={step.number} className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-80 sm:w-80 sm:h-96">
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden transform-gpu">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-purple-600 font-bold">DateWhisperer</div>
                      <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</div>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      <div className="bg-purple-100 p-4 rounded-xl">
                        <h4 className="font-bold text-purple-800 mb-2">Date Analysis</h4>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-purple-600 font-medium">Interest Level</span>
                            <div className="h-2 bg-gray-200 rounded-full mt-1">
                              <div className="h-2 bg-purple-500 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div>
                            <span className="text-xs text-purple-600 font-medium">Conversation Flow</span>
                            <div className="h-2 bg-gray-200 rounded-full mt-1">
                              <div className="h-2 bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          <div>
                            <span className="text-xs text-purple-600 font-medium">Connection Quality</span>
                            <div className="h-2 bg-gray-200 rounded-full mt-1">
                              <div className="h-2 bg-purple-500 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-pink-100 p-4 rounded-xl">
                        <h4 className="font-bold text-pink-800 mb-2">Suggested Topics</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center text-pink-700">
                            <span className="mr-2">📚</span> Recent books they&apos;ve enjoyed
                          </li>
                          <li className="flex items-center text-pink-700">
                            <span className="mr-2">✈️</span> Dream vacation destinations
                          </li>
                          <li className="flex items-center text-pink-700">
                            <span className="mr-2">🍳</span> Favorite local restaurants
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Love Stories Begin With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how DateWhisperer has helped people find connection and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was so nervous on first dates, but with DateWhisperer, I felt like I had a friend giving me advice. Now I'm dating someone amazing!",
                name: "Alex K.",
                location: "Toronto, CA"
              },
              {
                quote: "The conversation suggestions helped me connect on a deeper level. What would have been an awkward silence turned into a meaningful discussion.",
                name: "Sarah J.",
                location: "London, UK"
              },
              {
                quote: "As someone with social anxiety, this app has been a game-changer. It helped me relax and be myself on dates.",
                name: "Miguel R.",
                location: "Madrid, ES"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex-1">
                  <div className="text-purple-600 text-3xl mb-4"></div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Pricing */}
      {/* <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Choose Your Wingman Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect support level for your dating journey.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9.99",
                period: "per month",
                description: "Perfect for casual daters testing the waters",
                features: [
                  "5 dates per month",
                  "Basic conversation suggestions",
                  "Text-based support",
                  "24-hour date review"
                ],
                buttonText: "Get Started",
                highlighted: false
              },
              {
                name: "Premium",
                price: "$19.99",
                period: "per month",
                description: "For active daters seeking deeper connections",
                features: [
                  "Unlimited dates",
                  "Advanced conversation analysis",
                  "Voice and text support",
                  "Real-time sentiment analysis",
                  "Date replay with insights"
                ],
                buttonText: "Go Premium",
                highlighted: true
              },
              {
                name: "Relationship",
                price: "$14.99",
                period: "per month",
                description: "For established couples looking to keep the spark",
                features: [
                  "Unlimited interactions",
                  "Long-term conversation strategies",
                  "Special occasion reminders",
                  "Relationship health monitoring",
                  "Custom date night suggestions"
                ],
                buttonText: "Build Connection",
                highlighted: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden ${plan.highlighted ? 'ring-2 ring-purple-500 shadow-xl scale-105' : 'shadow-md'}`}
              >
                <div className={`p-8 ${plan.highlighted ? 'bg-white' : 'bg-white'}`}>
                  {plan.highlighted && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      plan.highlighted 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA */}
      {/* <div className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready For Your Next Great Date?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of happy users who transformed their dating life with DateWhisperer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Get Started Free
            </Link>
            <Link href="/demo" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Watch Demo
            </Link>
          </div>
        </div>
      </div> */}

      {/* FAQ */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about your new dating companion.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How does DateWhisperer actually work?",
                answer: "DateWhisperer uses your phone's microphone to listen to your conversation, analyzes the context through our AI, and suggests personalized responses or conversation topics through text or audio, depending on your settings."
              },
              {
                question: "Is my conversation data private?",
                answer: "Absolutely! Your privacy is our top priority. All conversation data is encrypted, processed locally when possible, and never stored permanently. We don't share your data with third parties."
              },
              {
                question: "Can people tell I'm using an AI assistant?",
                answer: "DateWhisperer is designed to be subtle. You can receive suggestions via text that only you can see, or with our premium plan, use a discreet earpiece for audio guidance that's undetectable to others."
              },
              {
                question: "Can I use DateWhisperer for long-term relationships?",
                answer: "Yes! Beyond first dates, our Relationship plan helps couples maintain meaningful conversations, suggests activities based on shared interests, and provides insights to strengthen your connection."
              },
              {
                question: "Does it work in noisy environments?",
                answer: "Our advanced noise-filtering technology allows DateWhisperer to function effectively in restaurants, coffee shops, and other common dating locations. For very loud venues, you can switch to manual mode."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}