module.exports = {
  siteTitle: 'Gapur Kassym | Software Engineer | Writer',
  siteDescription:
    'Gapur Kassym is passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.',
  siteKeywords:
    'Gapur Kassym, Gapur, Kassym, gkassym, software engineer, frontend engineer, web developer, javascript, react',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Gapur Kassym',
  location: 'Karagandy, Kazakhstan',
  email: 'gapur.kassym@gmail.com',
  github: 'https://github.com/Gapur',
  twitterHandle: '@GKassym',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Gapur',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gapur-kassym',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@gapur.kassym',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gkassym',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/GKassym',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
