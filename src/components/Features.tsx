
import { Zap, Shield, Users, Smartphone, Globe, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with cutting-edge technology."
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Enterprise-grade security to protect your data and privacy."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members in real-time."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Perfect experience across all devices and screen sizes."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our global infrastructure network."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Crafted with attention to detail and user experience in mind."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            🎯 Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="text-purple-600 block">succeed online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need 
            to build, launch, and scale your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
