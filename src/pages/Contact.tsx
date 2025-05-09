
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageSquare, Send, Github, Linkedin, MapPin, User, ArrowRight, HelpCircle, Instagram, Globe, FileText, CalendarDays, Cpu, Award, Target } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import LiveChat from "@/components/LiveChat";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const Contact = () => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send the email
    // For now, we'll just show a toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <MainLayout>
      <section className="py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-6xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair gradient-text">
              Get in Touch
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Have questions or need help with QwiX CV? Our team is ready to assist you.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-modern-blue-500 to-soft-purple mx-auto rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card className="glassmorphism p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 font-sf-pro">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium flex items-center">
                      <User className="w-4 h-4 mr-2 text-modern-blue-500" />
                      Your Name
                    </Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="John Doe" 
                      className="form-input-enhanced"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-modern-blue-500" />
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                      className="form-input-enhanced"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium flex items-center">
                      <HelpCircle className="w-4 h-4 mr-2 text-modern-blue-500" />
                      Subject
                    </Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="How can we help?" 
                      className="form-input-enhanced"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-modern-blue-500" />
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="Let us know how we can help you..."
                      rows={5}
                      className="form-input-enhanced"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-gradient"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-2"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <Card className="p-8 bg-gradient-to-r from-modern-blue-600 to-soft-purple text-white h-full">
                <div className="flex items-center mb-6">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Contact Us</Badge>
                </div>
                <h2 className="text-2xl font-bold mb-8 font-sf-pro">Founder Contact</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Dhadi Sai Praneeth Reddy</h3>
                      <p className="text-white/80 text-sm">Founder & CTO, QwikZen Group India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:spreddydhadi@gmail.com" className="text-white/90 hover:text-white">
                        spreddydhadi@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Official Website</h3>
                      <a 
                        href="https://qwikzen.lovable.so" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white"
                      >
                        qwikzen.lovable.so
                      </a>
                    </div>
                  </div>

                  <Separator className="bg-white/20" />
                  <p className="text-white/80 text-sm">Connect With Us</p>
                  
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">GitHub</h3>
                      <a 
                        href="https://github.com/dspraneeth07" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white"
                      >
                        github.com/dspraneeth07
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/dspraneeth07" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white"
                      >
                        linkedin.com/in/dspraneeth07
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/praneethinspires" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white"
                      >
                        @praneethinspires
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Research & Articles</h3>
                      <a 
                        href="https://medium.com/@spreddydhadi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white"
                      >
                        medium.com/@spreddydhadi
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-full"
                    onClick={() => setShowLiveChat(true)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Start Live Chat
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* Developer Bio Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 px-6 py-1 text-modern-blue-600 border-modern-blue-200">
                About the Developer
              </Badge>
              <h2 className="text-3xl font-bold mb-4">FOUNDER & CTO</h2>
              <Separator className="w-32 mx-auto" />
            </div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 glassmorphism text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-modern-blue-500 to-soft-purple rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    DSP
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Dhadi Sai Praneeth Reddy</h3>
                <p className="text-modern-blue-600 font-medium mb-4">Founder & CTO of QwikZen Group India</p>
                <p className="text-gray-600 text-sm mb-6">
                  B.Tech in Computer Science and Engineering
                  <br />Vasavi College of Engineering, Hyderabad
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://github.com/dspraneeth07" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="https://linkedin.com/in/dspraneeth07" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:spreddydhadi@gmail.com" className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    <Mail className="h-4 w-4" />
                  </a>
                  <a href="https://medium.com/@spreddydhadi" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600">
                    <FileText className="h-4 w-4" />
                  </a>
                </div>
              </Card>

              <Card className="p-6 lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
                <p className="text-gray-700 mb-4">
                  Dhadi Sai Praneeth Reddy is an emerging leader in India's deep-tech and innovation landscape. 
                  He is the Founder and Chief Technology Officer (CTO) of QwikZen Group India, a forward-thinking startup 
                  committed to building AI-powered solutions, intelligent hardware systems, and educational platforms 
                  tailored to societal needs.
                </p>
                <p className="text-gray-700 mb-6">
                  His work spans the convergence of Artificial Intelligence, Embedded IoT, Natural Language Processing (NLP), 
                  and Sacred Geography Research, reflecting a rare blend of technical depth, interdisciplinary curiosity, 
                  and visionary entrepreneurship.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-modern-blue-600" />
                    Research Publications
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Cybersecurity and Ethical Design Inspired by World Philosophies</li>
                    <li>Generative AI and Conditional GANs for Data Imbalance</li>
                    <li>Multi-Tenant FPGA Cloud Optimization</li>
                    <li>Geophysical Signal Analysis in Ocean Microseism Studies</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Cpu className="h-4 w-4 mr-2 text-modern-blue-600" />
                    Flagship Initiatives at QwikZen
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>QwiXSuite:</strong> A powerful suite of AI tools for code generation, real-time translation, grammar correction, and student solutions.</li>
                    <li><strong>QwiXGenie:</strong> An independently developed AI coding assistant built using transformer-based models, without reliance on external APIs.</li>
                    <li><strong>QwikZen Store:</strong> A product arm offering smart IoT hardware such as automatic water tank controllers with real-time monitoring.</li>
                    <li><strong>XpeditionR:</strong> A research vertical exploring Indian sacred geography using GIS, NLP, and original fieldwork.</li>
                    <li><strong>QwiXEd:</strong> A new educational initiative combining AI and pedagogy to support real-time learning improvements for students.</li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  Sai Praneeth brings a deep sense of purpose to every project, ensuring not only technological excellence but also 
                  societal relevance, sustainability, and accessibility. His personal mission is to democratize advanced technologies 
                  and inspire the next generation of student-entrepreneurs, researchers, and cultural technologists.
                </p>
              </Card>
            </motion.div>

            <div className="mt-8 bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-modern-blue-600" />
                Achievements & Recognition
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="mr-3 text-modern-blue-600">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">2025</h4>
                    <p className="text-gray-700">Led QwikZen to first place in the Gen AI Hackathon conducted by SmartBridge, NASSCOM, and FutureSkills Prime, gaining national recognition.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-3 text-modern-blue-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Publishing</h4>
                    <p className="text-gray-700">Actively publishes articles and thought pieces on platforms like Medium, ShortStoryLovers, and ResearchGate.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-3 text-modern-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Community Engagement</h4>
                    <p className="text-gray-700">Frequently involved in hackathons, innovation challenges, and educational outreach.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-3 text-modern-blue-600">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Mission</h4>
                    <p className="text-gray-700">Democratizing advanced technologies and inspiring the next generation of student-entrepreneurs, researchers, and cultural technologists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center font-sf-pro">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 glassmorphism hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-modern-blue-500" />
                  How does the AI assistant work?
                </h3>
                <p className="text-gray-600">
                  Our AI assistant analyzes your resume against industry standards and job descriptions to provide 
                  tailored suggestions for improvement, ensuring your resume passes ATS systems.
                </p>
              </Card>
              
              <Card className="p-6 glassmorphism hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-modern-blue-500" />
                  How do I download my resume?
                </h3>
                <p className="text-gray-600">
                  After creating your resume in the builder, you can preview it and click the "Download PDF" button 
                  to save a professional copy that fits on a single page.
                </p>
              </Card>
              
              <Card className="p-6 glassmorphism hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-modern-blue-500" />
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Yes, we take data privacy seriously. Your resume information is securely stored and not shared 
                  with third parties without your explicit consent.
                </p>
              </Card>
              
              <Card className="p-6 glassmorphism hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-modern-blue-500" />
                  How accurate is the ATS score?
                </h3>
                <p className="text-gray-600">
                  Our ATS scanner uses advanced algorithms to simulate how actual ATS systems process resumes, 
                  providing a highly accurate assessment of how well your resume will perform.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      
      {showLiveChat && <LiveChat onClose={() => setShowLiveChat(false)} />}
    </MainLayout>
  );
};

export default Contact;
