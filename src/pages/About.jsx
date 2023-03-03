import { Link } from '../router/Link'

const i18n = {
  es: {
    title: 'Esta es la página sobre mi. Que sepas que soy el mejor programador para tu negocio',
    link: 'Ir a la página de inicio'
  },
  en: {
    title: 'This is our About page, I am the best developer for your bussines',
    link: 'Go to Home page'
  }
}

const useI18n = (lang) => { return i18n[lang] || i18n.es }

const About = ({ routeParams }) => {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <main>
      <h1>{i18n.title}</h1>
      <Link to='/'>{i18n.link}</Link>
    </main>
  )
}

export default About
