export interface Business {
  id: 'hashim' | 'hybrid';
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  founded: string;
  contactPerson: string;
  phone: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  services: {
    title: string;
    description: string;
    items: string[];
  };
}

export const businesses: Record<string, Business> = {
  hashim: {
    id: 'hashim',
    name: 'Hashim Traders',
    fullName: 'Hashim Traders',
    tagline: 'Your Trusted Power Backup Solutions Provider',
    description: 'Established in 2009, Hashim Traders is a trusted name in power backup solutions based in Gujranwala. We specialize in providing high-quality UPS systems, solar inverters, and batteries for residential and commercial use.',
    founded: '2009',
    contactPerson: 'Haider Ijaz',
    phone: '0300-6441817',
    socialMedia: {
      facebook: 'https://www.facebook.com/share/16YNLJmpxm/?mibextid=wwXIfr'
    },
    services: {
      title: 'Our Services',
      description: 'We offer a wide range of power backup solutions and services',
      items: [
        'UPS Sales & Service',
        'Battery Replacement',
        'Solar Inverter Installation',
        'Power Backup Consultation', 
        'Solar Panels',
        'Solar Panels Installation'
      ]
    }
  },
  hybrid: {
    id: 'hybrid',
    name: 'Hybrid Care',
    fullName: 'Hybrid Care',
    tagline: 'Dependable Hybrid Battery Solutions',
    description: 'At Hybrid Care, we offer dependable and long-lasting hybrid battery solutions right here in Gujranwala. With over 8 years of hands-on experience, we specialize in brand-new hybrid battery packs and advanced lithium battery upgrades, backed by expert installation and trusted after-sales support.',
    founded: '2015',
    contactPerson: 'Haider Ijaz',
    phone: '0310-6441817',
    socialMedia: {
      facebook: 'https://www.facebook.com/share/18KADHWzAv/?mibextid=wwXIfr'
    },
    services: {
      title: 'Our Services',
      description: 'We specialize in hybrid battery solutions with expert installation',
      items: [
        'Complete Hybrid Battery Replacement',
        'Lithium Battery Pack Installation',
        'Hybrid System Diagnostics & Repair',
        'Home Installation & Pick-Up Services (Nearby Areas)'
      ]
    }
  }
}; 