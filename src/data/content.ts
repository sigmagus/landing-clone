export interface NavLink {
    label: string;
    href: string;
  }
  
  export interface HeroContent {
    title: string;
    subtitle: string;
    image: string;
  }
  
  export interface ServiceItem {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface ProjectItem {
    name: string;
    description: string;
    link: string;
    thumbnail: string;
  }
  
  export interface ContactInfo {
    email: string;
    phone: string;
    address?: string;
  }
  
  export const content = {
    navLinks: [
      { label: 'Inicio', href: '#home' },
      { label: 'Servicios', href: '#services' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ] as NavLink[],
  
    hero: {
      title: 'Tu título principal aquí',
      subtitle: 'Una descripción breve que enganche al visitante',
      image: '/assets/placeholder-600x400.png',
    } as HeroContent,
  
    services: [
      {
        title: 'Servicio A',
        description: 'Descripción breve del servicio A.',
        icon: '/assets/placeholder-64.png',
      },
      {
        title: 'Servicio B',
        description: 'Descripción breve del servicio B.',
        icon: '/assets/placeholder-64.png',
      },
      // Agrega más servicios según necesites
    ] as ServiceItem[],
  
    projects: [
      {
        name: 'Proyecto 1',
        description: 'Breve descripción del proyecto 1.',
        link: 'https://tu-proyecto-1.com',
        thumbnail: '/assets/placeholder-600x400.png',
      },
      {
        name: 'Proyecto 2',
        description: 'Breve descripción del proyecto 2.',
        link: 'https://tu-proyecto-2.com',
        thumbnail: '/assets/placeholder-600x400.png',
      },
      // Agrega más proyectos según necesites
    ] as ProjectItem[],
  
    contact: {
      email: 'tucorreo@ejemplo.com',
      phone: '+1 555 123 4567',
      address: 'Tu Ciudad, Tu País',
    } as ContactInfo,
  };
  