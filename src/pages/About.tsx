
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, Brain, Clock, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">GIUSTI.AI</span>
              <span className="text-sm text-blue-100">Intelligent Legal Assistant</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-200 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-semibold">About</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">Contact</Link>
              <Link to="/login">
                <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About GIUSTI.AI</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Revolutionizing legal assistance through advanced artificial intelligence, 
            making legal guidance accessible, accurate, and available to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm mb-12">
          <div className="text-center mb-8">
            <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To democratize legal knowledge and make professional legal guidance accessible 
              to individuals and businesses through cutting-edge AI technology, ensuring 
              everyone has access to accurate legal information when they need it most.
            </p>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Clock className="h-12 w-12 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-blue-100">
              Get legal guidance anytime, anywhere. Our AI assistant never sleeps, 
              ensuring you have support when you need it most.
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Shield className="h-12 w-12 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accurate Analysis</h3>
            <p className="text-blue-100">
              Built on comprehensive legal databases and trained on established 
              legal principles to provide reliable and accurate guidance.
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Users className="h-12 w-12 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p className="text-blue-100">
              Complex legal concepts explained in simple, understandable terms 
              that make legal guidance accessible to everyone.
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Award className="h-12 w-12 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
            <p className="text-blue-100">
              Delivering professional-grade legal analysis and guidance that 
              meets the highest standards of legal practice.
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Scale className="h-12 w-12 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Practice Areas</h3>
            <p className="text-blue-100">
              Covering various areas of law including employment, property, 
              contract, family law, and more.
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Brain className="h-12 w-12 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-blue-100">
              Leveraging the latest in artificial intelligence technology to 
              provide intelligent, contextual legal assistance.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Experience the future of legal assistance with GIUSTI.AI
          </p>
          <Link to="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Start Your Legal Journey
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default About;
