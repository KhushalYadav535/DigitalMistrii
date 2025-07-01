import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Star, Users } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const qrCodeUrl = "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop";

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Home Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download Digital Mistri today and experience professional home services 
              including plumbing, electrical, AC repair and more at your doorstep.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white">
                <span className="font-bold">4.8</span>
                <span className="text-blue-100 ml-2">• 50K+ reviews</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Play className="h-6 w-6 mr-3 text-green-600" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">GET IT ON</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
              >
                <Download className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">DIRECT</div>
                  <div className="font-bold">Download APK</div>
                </div>
              </motion.button>
            </motion.div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl mb-4">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code to download Digital Mistri app" 
                  className="w-32 h-32"
                />
              </div>
              <p className="text-blue-100 text-center">
                <span className="font-semibold text-white">Scan to Download</span>
                <br />
                Quick access on mobile
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-blue-100">Active Users</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">4.8★</div>
                  <div className="text-blue-100">App Store Rating</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">100K+</div>
                  <div className="text-blue-100">Downloads</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <blockquote className="text-xl text-white italic mb-4">
              "Digital Mistri solved my plumbing emergency in no time! Professional service 
              and affordable pricing. This app is a lifesaver for home services."
            </blockquote>
            <cite className="text-blue-100 font-semibold">
              - Priya S., Homeowner
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;