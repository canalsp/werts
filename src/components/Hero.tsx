
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              ✨ New Product Launch
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Amazing
              <span className="text-blue-600 block">Digital Products</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create stunning websites and applications with our powerful platform. 
              Fast, reliable, and designed for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                Get Started Free
                <ArrowRight size={20} />
              </button>
              
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:bg-gray-50">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No credit card required
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dashboard</h3>
                    <p className="text-sm text-gray-500">Analytics Overview</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">2.4k</div>
                    <div className="text-sm opacity-90">Active Users</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">$12.5k</div>
                    <div className="text-sm opacity-90">Revenue</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Website Traffic</span>
                    <span className="text-sm font-semibold text-green-600">+12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-float">
              <span className="text-2xl">🚀</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
