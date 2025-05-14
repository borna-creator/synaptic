import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-inter)] bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 backdrop-blur-sm bg-opacity-80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-400">SynapticFlow</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
            <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <div>
            <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-950 to-blue-900 min-h-[calc(100vh-73px)] flex items-center border-b border-gray-800">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/pricing-wave-animation.svg" 
            alt="Wave Animation" 
            fill 
            priority 
            className="object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 opacity-40"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
        
        <div className="container relative z-10 mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative mt-8 md:mt-0">
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
                <h1 className="relative text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-center md:text-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">AI Voice Agents</span> That Never Sleep
                </h1>
              </div>
              <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed text-center md:text-left px-4 md:px-0">Keep your business connected 24/7 with intelligent AI voice agents that handle calls, capture information, and book appointments—even while you're sleeping. Our advanced AI technology ensures no customer inquiry goes unanswered, helping you convert more leads and provide exceptional service around the clock.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="/contact" className="group bg-blue-600 text-white px-8 py-3 rounded-full text-center hover:bg-blue-500 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/30">
                  Schedule a Demo
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a href="#features" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full text-center hover:bg-blue-900/30 transition-all duration-300 font-medium">
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                
                {/* Main Card with Phone Animation */}
                <div className="relative w-full h-[28rem] bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20"></div>
                  
                  {/* Floating Elements Inside Card */}
                  <div className="absolute top-10 left-10 w-8 h-8 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
                  
                  {/* Improved Phone Animation with Better Readability */}
                  <div className="relative h-full flex flex-col justify-center items-center">
                    {/* Phone Device - Moved higher up for better spacing */}
                    <div className="relative w-60 h-60 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform hover:scale-105 transition-transform duration-500 mx-auto mt-8 shadow-lg border-4 border-gray-700/50 overflow-hidden">
                      {/* Phone Screen */}
                      <div className="absolute inset-2 bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-4">
                        {/* Phone Elements */}
                        <div className="w-16 h-1 bg-gray-700 rounded-full mb-6"></div>
                        
                        {/* Animated Waveform - Reduced animation intensity */}
                        <div className="flex items-center justify-center space-x-1 mb-4">
                          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse duration-[2000ms]"></div>
                          <div className="w-1 h-5 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-75"></div>
                          <div className="w-1 h-8 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-150"></div>
                          <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-300"></div>
                          <div className="w-1 h-6 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-150"></div>
                          <div className="w-1 h-8 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-75"></div>
                          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse duration-[2000ms]"></div>
                        </div>
                        
                        {/* Phone Icon - Slightly larger for better visibility */}
                        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Overlay - Improved with background for better readability */}
                    <div className="w-full text-center px-4 mt-6 mb-4">
                      <div className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                        <h3 className="text-2xl font-semibold mb-2 text-white">Intelligent Voice Assistant</h3>
                        <p className="text-gray-200 text-base">Handles calls, recognizes customers, books appointments, and provides seamless customer service 24/7</p>
                        
                        {/* Animated Dots - Slower animation */}
                        <div className="flex justify-center space-x-2 mt-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse duration-[2000ms]"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-300"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse duration-[2000ms] delay-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">How Our AI Voice Agents Help Your Business</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50 hover:border-blue-500/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Availability</h3>
              <p className="text-gray-300">Never miss a call again. Our AI agents handle incoming calls at any time, capturing key customer information instantly. Reduce missed opportunities and ensure every potential customer receives immediate attention, regardless of when they call.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50 hover:border-blue-500/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Calendar Integration</h3>
              <p className="text-gray-300">The AI checks real-time availability, books appointments, and confirms details with callers in seconds. Seamlessly integrates with Google Calendar, Microsoft Outlook, and other popular scheduling platforms to eliminate double-bookings and scheduling conflicts.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50 hover:border-blue-500/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Intelligent Conversations</h3>
              <p className="text-gray-300">Our AI recognizes returning callers, greets them by name, and continues previous interactions seamlessly. The system builds a comprehensive customer profile over time, learning preferences and history to provide increasingly personalized service with each interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 border-b border-gray-700">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Simple, Transparent Pricing</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700 relative z-10">
              <div className="p-8 border-b border-gray-700">
                <h3 className="text-2xl font-bold mb-2 text-white">AI Voice Agent Package</h3>
                <p className="text-gray-300 mb-6">Everything you need to get started with your AI voice assistant</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-blue-400">$1,000</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 mb-2">First month: $1,500 (includes setup fee)</p>
                  <p className="text-gray-300">One-time setup fee: $500</p>
                </div>
                
                <a href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-500 transition-colors font-medium">Get Started</a>
              </div>
              
              <div className="p-8">
                <h4 className="font-semibold mb-4 text-white">What's included:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 AI voice agent availability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Calendar integration for appointment booking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Google Spreadsheet integration for data logging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>English language support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customer memory for returning caller recognition</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-gray-400">Note: Backend costs (make.com, VAPI, OpenAI) are covered by the customer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-950 to-gray-900 border-b border-gray-800">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Onboarding Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="relative pl-10 pb-10 border-l border-blue-500/30 group">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">1</div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Discovery Call</h3>
                  <p className="text-gray-300">We'll understand your business goals and use case (bookings, lead gen, support). We'll collect key information like business hours, common FAQs, tone preferences, and call scripts.</p>
                </div>
              </div>
              
              <div className="relative pl-10 pb-10 border-l border-blue-500/30 group">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">2</div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Demo</h3>
                  <p className="text-gray-300">We'll show you a quick demo or use a past example to validate if our AI agent fits your needs and set clear expectations.</p>
                </div>
              </div>
              
              <div className="relative pl-10 pb-10 border-l border-blue-500/30 group">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">3</div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Agreement & Payment</h3>
                  <p className="text-gray-300">We'll send a simple service agreement to formalize our partnership.</p>
                </div>
              </div>
              
              <div className="relative pl-10 pb-10 border-l border-blue-500/30 group">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">4</div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Agent Setup</h3>
                  <p className="text-gray-300">We'll train the AI agent by uploading custom FAQs/scripts, connecting your CRM, calendar, or required tools, and setting voice, language, and fallback logic.</p>
                </div>
              </div>
              
              <div className="relative pl-10 pb-10 border-l border-blue-500/30 group">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">5</div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Test & QA</h3>
                  <p className="text-gray-300">We'll run internal test calls, let you review and suggest edits, and adjust based on real-world testing.</p>
                </div>
              </div>
              
              <div className="relative pl-10 pb-10 border-l border-blue-500/30 group">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">6</div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-white">Go Live</h3>
                  <p className="text-gray-300">We'll deploy on your phone system, website, or wherever needed, and monitor the first 1-2 weeks closely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">How quickly can you set up an AI voice agent?</h3>
              <p className="text-gray-300">We can typically have your AI voice agent up and running within 7-10 business days from the initial discovery call. Complex integrations may require additional time.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">Can the AI voice agent transfer calls to a human?</h3>
              <p className="text-gray-300">Yes, we can configure your AI voice agent to transfer calls to designated team members based on specific triggers or customer requests. This ensures complex issues are handled appropriately.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">What languages do your AI voice agents support?</h3>
              <p className="text-gray-300">Our standard package includes English language support. Additional languages are available for an extra fee. Contact us for specific language requirements.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">How do you ensure data privacy and security?</h3>
              <p className="text-gray-300">We take data security seriously. All conversations are encrypted, and we comply with industry standards for data protection. We can sign custom NDAs and provide details about our security protocols upon request.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 border-b border-gray-700">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-10">Schedule a discovery call today and see how our AI voice agents can transform your business.</p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5">Schedule a Demo</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 text-white py-12">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">SynapticFlow</h2>
              <p className="text-gray-400 mt-2">AI voice agents that never sleep</p>
            </div>
            <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} SynapticFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
