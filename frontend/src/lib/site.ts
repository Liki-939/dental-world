export const SITE = {
  name: 'Dental World',
  tagline: 'Expert Dental Care',
  domain: 'https://www.dentalworldhyd.com',
  email: 'info@dentalworldhyd.com',
  /** Primary clinic line (Pragathi Nagar) */
  phone: {
    display: '+91 82474 78663',
    tel: '+918247478663',
  },
  whatsapp: {
    number: '917997994646',
    url: 'https://wa.me/917997994646',
  },
  hours: {
    weekdays: 'Mon – Sat: 9:00 AM – 9:00 PM',
    sunday: 'Sun: 10:00 AM – 2:00 PM',
  },
  social: {
    facebook: 'https://www.facebook.com/dentalworldhyd',
    instagram: 'https://www.instagram.com/dentalworldhyd',
    youtube: 'https://www.youtube.com/@dentalworldhyd',
    linkedin: 'https://www.linkedin.com/company/dentalworldhyd',
  },
} as const;

export const LOCATIONS = [
  {
    slug: 'pragathi-nagar',
    name: 'Pragathi Nagar',
    shortName: 'Pragathi Nagar',
    address: '#7-1-398, Srinivasa Colony, Pragathi Nagar, Hyderabad – 500090',
    phone: { display: '+91 82474 78663', tel: '+918247478663' },
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.305435987179!2d78.39414271487779!3d17.516801987986065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab85800a7%3A0x6fb2478491c34a2e!2sPragathi%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
    mapsUrl: 'https://maps.google.com/?q=Pragathi+Nagar+Hyderabad+Dental+World',
  },
  {
    slug: 'bachupally',
    name: 'Bachupally',
    shortName: 'Bachupally',
    address: 'Plot No. 2, Main Road, Bachupally, Hyderabad – 500090',
    phone: { display: '+91 91000 61610', tel: '+919100061610' },
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.109861611096!2d78.3845013148779!3d17.525549087995872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e137b018ecf%3A0x7d6a524a87e07661!2sBachupally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000001!5m2!1sen!2sin',
    mapsUrl: 'https://maps.google.com/?q=Bachupally+Hyderabad+Dental+World',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home', match: (path: string) => path === '/' },
  { href: '/about', label: 'About', match: (path: string) => path === '/about' },
  { href: '/treatments', label: 'Treatments', match: (path: string) => path.startsWith('/treatments') },
  { href: '/doctors', label: 'Doctors', match: (path: string) => path === '/doctors' },
  { href: '/gallery', label: 'Gallery', match: (path: string) => path === '/gallery' },
  { href: '/testimonials', label: 'Reviews', match: (path: string) => path === '/testimonials' },
  { href: '/blog', label: 'Blog', match: (path: string) => path.startsWith('/blog') },
  { href: '/faq', label: 'FAQ', match: (path: string) => path === '/faq' },
  { href: '/contact', label: 'Contact', match: (path: string) => path === '/contact' },
] as const;

export const TREATMENT_NAV_LINKS = [
  { href: '/treatments/dental-implants', label: 'Dental Implants' },
  { href: '/treatments/root-canal-treatment', label: 'Root Canal' },
  { href: '/treatments/invisalign-treatment', label: 'Invisalign & Braces' },
  { href: '/treatments/smile-designing', label: 'Smile Makeover' },
  { href: '/treatments/teeth-whitening', label: 'Teeth Whitening' },
  { href: '/treatments/pediatric-dentistry', label: 'Kids Dentistry' },
] as const;

export const FOOTER_TREATMENT_LINKS = [
  ...TREATMENT_NAV_LINKS,
  { href: '/treatments/full-mouth-rehabilitation', label: 'Full Mouth Rehabilitation' },
] as const;
