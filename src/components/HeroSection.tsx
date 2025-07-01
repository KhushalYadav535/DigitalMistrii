import React from 'react';
import { Download, Play, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const qrCodeUrl = "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop";

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">Digital Mistri</span>
              <br />
              Home Services at Your Doorstep
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional home services including plumbing, electrical work, AC repair, 
              handpump services and more. Expert professionals with warranty and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Download on Play Store
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download APK
              </motion.button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code to download app" 
                  className="w-16 h-16"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Scan to download</p>
                <p className="text-lg font-semibold text-gray-900">Get instant home services</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Professional home service technician working"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold text-teal-600">2-4hrs</div>
              <div className="text-sm text-gray-600">Response</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;