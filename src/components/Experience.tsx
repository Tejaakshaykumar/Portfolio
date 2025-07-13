import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000`}>
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-4 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="space-y-8">
          {/* Main Experience Card */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 hover:border-gray-700 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mr-4 border border-gray-700 overflow-hidden">
  <img
    src="1747457288219.jpeg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI & Full-Stack Software Intern</h3>
                  <p className="text-gray-300 text-lg">Forsys Inc., Hyderabad</p>
                </div>
              </div>
              <div className="mt-4 lg:mt-0">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  May 2025 - July 2025
                </span>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-8">
              {/* Project 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-white mb-4"> DI_DM Tool</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">Built AI Agents:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Explain <strong className="text-white">Product & Pricing Rules</strong> in <strong className="text-white">Conga</strong> and <strong className="text-white">Salesforce CPQ</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Provides <strong className="text-white">configuration steps</strong> to setup in the target system</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">Developed ML-based Recommendation System:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong className="text-white">Product Recommendations</strong> with action insights (e.g., Merge, Review, Duplicate) — <span className="text-green-400 font-semibold">~87% accuracy</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong className="text-white">Bundle Recommendations</strong> using transaction data to suggest optimal product bundling</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'TailwindCSS', 'Python (FastAPI)', 'PostgreSQL', 'Prompt Engineering', 'Conga CPQ', 'Salesforce CPQ'].map((tech) => (
                        <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-white mb-4"> Pre-Sales Automation Tool</h4>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Designed and developed a new AI-driven tool to <strong className="text-white">automate the pre-sales process</strong>, reducing manual effort and cycle time.
                  </p>

                  <div>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">Implemented Workflow Automation using AI Agents:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Generate and compare multiple <strong className="text-white">scope/cost/project plan scenarios</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Enable <strong className="text-white">real-time collaboration</strong> with stakeholders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span> Resulted in a <span className="text-green-400 font-semibold">7x increase in pre-sales handling capacity</span> and <span className="text-green-400 font-semibold">~75% reduction in turnaround time.</span></span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'TailwindCSS', 'Python (FastAPI)', 'PostgreSQL', 'Prompt Engineering', 'n8n', 'Google Cloud Console'].map((tech) => (
                        <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;