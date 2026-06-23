import {
  BadgeCheck,
  Boxes,
  CalendarDays,
  Cpu,
  Factory,
  Headphones,
  Lightbulb,
  MonitorSpeaker,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  WandSparkles,
  Zap,
} from 'lucide-react';

export const company = {
  name: 'BOX PRODUCTIONS',
  positioning: 'Your trusted rental partner for agencies.',
  headline: 'Powering Exceptional Events. Every Time.',
  intro:
    'We provide premium rental equipment and technical solutions to agencies, ensuring flawless execution and unforgettable experiences - every single time.',
  phone: '+91 78990 74474',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Clientele', href: '/clientele' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Equipment Items', icon: Boxes },
  { value: 200, suffix: '+', label: 'Partner Agencies', icon: Star },
  { value: 10, suffix: '+', label: 'Years of Experience', icon: CalendarDays },
  { value: 24, suffix: '/7', label: 'Technical Support', icon: Headphones },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: ShieldCheck },
];

export const services = [
  {
    title: 'Event Production',
    description:
      'End-to-end event production support for agencies, including planning, execution, stage setup, equipment, and on-ground coordination.',
    icon: Sparkles,
    keywords: 'event production company, stage setup',
  },
  {
    title: 'Custom Fabrication',
    description:
      'Custom fabrication for event environments, branded builds, structures, production elements, and agency-led creative requirements.',
    icon: Factory,
    keywords: 'custom fabrication',
  },
  {
    title: 'Creative Solutions',
    description:
      'Creative event solutions that help agencies transform ideas into immersive, premium, and execution-ready event experiences.',
    icon: Lightbulb,
    keywords: 'creative event solutions',
  },
  {
    title: 'Technical Solutions',
    description:
      'Technical event support with lighting and sound solutions, LED wall rental, power, rigging, and experienced technical teams.',
    icon: Cpu,
    keywords: 'technical event support, LED wall rental, lighting and sound solutions',
  },
];

export const equipmentServices = [
  'Audio Visual Equipment',
  'Lighting Solutions',
  'Stage & Truss Systems',
  'Sound Systems',
  'Power & Rigging Solutions',
];

export const work = [
  'Event production support',
  'Stage setup',
  'LED wall rental',
  'Lighting and sound solutions',
  'Custom fabrication',
  'Technical event support',
];

export const clientele = ['Acme', 'DNA Networks', 'Craftsman\'s Crew', 'Neo Entertainment', 'Oscotel', 'SKIL', 'Pixeltone', 'Tradition and Trendz', 'VPN Agencies'];

export const whyChoose = [
  {
    title: 'Trusted by Top Agencies',
    description: 'A rental partner for agencies with reliable equipment, execution support, and premium production standards.',
    icon: BadgeCheck,
  },
  {
    title: '24/7 Support Always Available',
    description: 'Responsive technical event support for agency timelines, live-event demands, and production contingencies.',
    icon: Headphones,
  },
  {
    title: 'Premium Quality Reliable Gear',
    description: 'Well maintained equipment, checked before every event, with clean presentation and dependable performance.',
    icon: ShieldCheck,
  },
  {
    title: 'Pan India Delivery',
    description: 'Delivery and execution support for agencies working across cities and event formats.',
    icon: Truck,
  },
];

export const seo = {
  '/': {
    title: 'BOX PRODUCTIONS | Premium Event Production Company & Rental Partner for Agencies',
    description:
      'BOX PRODUCTIONS is a premium rental partner for agencies offering event production, event equipment rental, custom fabrication, creative event solutions and technical event support.',
  },
  '/services': {
    title: 'Services | Event Production, Custom Fabrication & Technical Event Support',
    description:
      'Explore BOX PRODUCTIONS services including event production, custom fabrication, creative event solutions, LED wall rental, stage setup, lighting and sound solutions.',
  },
  '/our-work': {
    title: 'Our Work | Stage Setup, LED Wall Rental & Event Execution',
    description:
      'See the production capabilities of BOX PRODUCTIONS across stage setup, event equipment rental, LED wall rental, lighting and sound solutions and agency execution support.',
  },
  '/clientele': {
    title: 'Clientele | Trusted Event Production Rental Partner for Agencies',
    description:
      'BOX PRODUCTIONS supports leading agencies and brands as a premium event production company and rental partner for agencies.',
  },
  '/about-us': {
    title: 'About Us | BOX PRODUCTIONS',
    description:
      'Learn about BOX PRODUCTIONS, a premium rental and event production support company for agencies.',
  },
  '/contact': {
    title: 'Contact | BOX PRODUCTIONS',
    description:
      'Contact BOX PRODUCTIONS for event production, event equipment rental, technical event support, custom fabrication and agency production requirements.',
  },
};

export const iconMap = {
  monitor: MonitorSpeaker,
  wand: WandSparkles,
  zap: Zap,
  users: Users,
};
