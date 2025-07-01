import { Feature, Step, Testimonial, FAQ, Screenshot } from '../types';

export const features: Feature[] = [
  {
    id: 'expert-professionals',
    title: 'Expert Professionals',
    description: 'Certified plumbers, electricians, AC technicians and handymen available 24/7 for all your home needs.',
    icon: 'Users'
  },
  {
    id: 'trusted-service',
    title: 'Trusted Service',
    description: 'All our service providers are verified, background-checked, and highly rated by customers.',
    icon: 'Shield'
  },
  {
    id: 'support',
    title: '24x7 Support',
    description: 'Round-the-clock customer support to help you with any home service emergencies.',
    icon: 'Headphones'
  },
  {
    id: 'doorstep-service',
    title: 'Doorstep Service',
    description: 'Convenient at-home services - no need to search for local service providers.',
    icon: 'Home'
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'Upfront pricing with no hidden costs. Know exactly what you pay before booking.',
    icon: 'DollarSign'
  },
  {
    id: 'quality-guarantee',
    title: 'Quality Guarantee',
    description: 'All services come with warranty and satisfaction guarantee for peace of mind.',
    icon: 'Star'
  }
];

export const steps: Step[] = [
  {
    id: 'choose-service',
    title: 'Choose Service',
    description: 'Select from plumbing, electrical, AC repair, handpump services and more from our comprehensive catalog.',
    icon: 'List'
  },
  {
    id: 'book-professional',
    title: 'Book a Professional',
    description: 'Choose your preferred time slot and confirm booking with our verified service providers.',
    icon: 'Calendar'
  },
  {
    id: 'get-help',
    title: 'Get Expert Help',
    description: 'Our skilled professional arrives at your doorstep and completes the job efficiently.',
    icon: 'CheckCircle'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    role: 'Homeowner',
    content: 'Amazing plumbing service! Fixed my kitchen sink leak within an hour. Professional and affordable.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 'testimonial-2',
    name: 'Rahul Kumar',
    role: 'Business Owner',
    content: 'Best AC repair service in the city. Quick response and great customer support for our office.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 'testimonial-3',
    name: 'Sneha Patel',
    role: 'Working Professional',
    content: 'Electrical work done perfectly! The electrician was skilled and completed the job safely.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 'testimonial-4',
    name: 'Amit Singh',
    role: 'Homeowner',
    content: 'Handpump repair service was excellent. Quick diagnosis and professional repair work.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What home services do you provide?',
    answer: 'We provide comprehensive home services including plumbing, electrical work, AC repair & maintenance, handpump repair, appliance repair, carpentry, painting, and general home maintenance services.'
  },
  {
    id: 'faq-2',
    question: 'How quickly can you send a professional?',
    answer: 'Most services can be scheduled within 2-4 hours. For emergency services like plumbing leaks or electrical issues, we provide same-day service.'
  },
  {
    id: 'faq-3',
    question: 'Do you provide warranty on services?',
    answer: 'Yes, all our services come with a 30-90 day warranty depending on the type of work. We also offer a satisfaction guarantee.'
  },
  {
    id: 'faq-4',
    question: 'How do I track my service request?',
    answer: 'You can track your service request in real-time through our mobile app. You\'ll receive notifications when the professional is on the way and job updates.'
  },
  {
    id: 'faq-5',
    question: 'What are your service charges?',
    answer: 'We offer transparent pricing with no hidden costs. Service charges vary by type of work and location. You can get an instant quote through our app.'
  },
  {
    id: 'faq-6',
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide 24/7 emergency services for urgent issues like water leaks, electrical problems, and AC breakdowns. Additional charges may apply for after-hours service.'
  }
];

export const screenshots: Screenshot[] = [
  {
    id: 'screenshot-1',
    url: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    alt: 'Digital Mistri app home screen showing various home services',
    title: 'Home Screen'
  },
  {
    id: 'screenshot-2',
    url: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    alt: 'Service selection screen with plumber, electrician, AC repair options',
    title: 'Choose Service'
  },
  {
    id: 'screenshot-3',
    url: 'https://images.pexels.com/photos/1319855/pexels-photo-1319855.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    alt: 'Professional booking confirmation screen',
    title: 'Book Professional'
  },
  {
    id: 'screenshot-4',
    url: 'https://images.pexels.com/photos/1319856/pexels-photo-1319856.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    alt: 'Tracking service progress and professional location',
    title: 'Track Progress'
  }
];

export const services = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: 'Droplets',
    description: 'Pipe repair, leak fixing, tap installation, bathroom fitting'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: 'Zap',
    description: 'Wiring, switch repair, fan installation, electrical troubleshooting'
  },
  {
    id: 'ac-repair',
    name: 'AC Repair',
    icon: 'Wind',
    description: 'AC servicing, repair, installation, gas refilling'
  },
  {
    id: 'handpump',
    name: 'Handpump Repair',
    icon: 'Settings',
    description: 'Handpump installation, repair, maintenance, motor fixing'
  },
  {
    id: 'appliance',
    name: 'Appliance Repair',
    icon: 'Tv',
    description: 'Washing machine, refrigerator, microwave repair'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    icon: 'Hammer',
    description: 'Furniture repair, door fixing, cabinet installation'
  }
];