
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Join thousands of businesses already using our platform to build amazing digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
            Start Free Trial
            <ArrowRight size={20} />
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all">
            Schedule Demo
          </button>
        </div>
        
        <p className="text-sm text-purple-200 mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
