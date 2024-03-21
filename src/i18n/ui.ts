export const languages: Record<
string,
{ code: string; name: string; }
> = {
    es: {
      code: 'es',
      name: 'Español',
    },
    en: {
      code: 'en',
      name: 'English'},
  };

export const languages2 = {
  es: "Español",
  en: "Ingles"
}
  
export const defaultLang = 'es';
export const showDefaultLang = true;

export const ui = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.nosotros': 'Nosotros',
    'nav.servicios': 'Servicios',
    'nav.blog': 'Notas',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.nosotros': 'About',
    'nav.servicios': 'Services',
    'nav.blog': 'Blog',
  },
} as const;

export const routes = {
  es: {
    inicio: 'inicio',
    nosotros: 'nosotros',
    servicios: 'servicios',
    blog: 'blog',
  },
  en: {
    inicio: 'home',
    nosotros: 'about',
    servicios: 'services',
    blog: 'blog',
  },
};