
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Scale, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
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
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-semibold">Contact</Link>
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
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about GIUSTI.AI? We're here to help. Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="How can we help you?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Mail className="h-8 w-8 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-2">
                For general inquiries and support
              </p>
              <a href="mailto:support@giusti.ai" className="text-blue-200 hover:text-white transition-colors">
                support@giusti.ai
              </a>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Phone className="h-8 w-8 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-2">
                Monday - Friday, 9:00 AM - 6:00 PM
              </p>
              <a href="tel:+1234567890" className="text-blue-200 hover:text-white transition-colors">
                +1 (234) 567-8900
              </a>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <MapPin className="h-8 w-8 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <div className="text-blue-100">
                <p>123 Legal Tech Avenue</p>
                <p>Innovation District</p>
                <p>Tech City, TC 12345</p>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <MessageCircle className="h-8 w-8 text-blue-200 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4">
                Get instant answers to your questions
              </p>
              <Link to="/login">
                <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                  Start Chat
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
