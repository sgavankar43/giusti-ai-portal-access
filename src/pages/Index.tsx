
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, MessageCircle, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
              <Link to="/about" className="text-white hover:text-blue-200 transition-colors">About</Link>
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

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to GIUSTI.AI
        </h1>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Your intelligent legal assistant. Get instant guidance and answers to your legal questions
          powered by advanced AI technology.
        </p>

        <Link to="/login">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3">
            Start Legal Consultation
          </Button>
        </Link>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <MessageCircle className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Legal Guidance</h3>
            <p className="text-blue-100">Get immediate answers to your legal questions 24/7</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Shield className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accurate Analysis</h3>
            <p className="text-blue-100">AI-powered legal analysis based on established principles</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
            <p className="text-blue-100">Clear, concise, and professional legal assistance</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
