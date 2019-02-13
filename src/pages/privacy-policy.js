import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <div style={{ width: '250px', margin: '0 auto 60px' }}>
      <Link to="/">
        <Image />
      </Link>
    </div>
    <h2> Política de privacidad </h2>
    <p>
      Su privacidad es importante para nosotros. Es política de Get Best Offers
      respetar. su privacidad con respecto a cualquier información que podamos
      recopilar de usted en nuestro sitio web,{' '}
      <Link to="/"> https://www.empleonow.com </Link>, y otros Sitios que
      poseemos y operamos.
    </p>
    <p>
      Solo solicitamos información personal cuando realmente la necesitamos para
      proporcionar un servicio a usted. Lo recolectamos por medios justos y
      legales, con su Conocimiento y consentimiento. También le informamos por
      qué lo estamos recolectando y cómo se utilizará.
    </p>
    <p>
      Solo conservamos la información recopilada durante el tiempo que sea
      necesario para proporcionar Usted con el servicio solicitado. Qué datos
      almacenamos, protegeremos dentro medios comercialmente aceptables para
      prevenir pérdidas y robos, así como Acceso no autorizado, divulgación,
      copia, uso o modificación.
    </p>
    <p>
      No compartimos ninguna información de identificación personal pública o
      con Terceros, excepto cuando sea requerido por la ley.
    </p>
    <p>
      Nuestro sitio web puede enlazar a sitios externos que no son operados por
      nosotros. Por favor Tenga en cuenta que no tenemos control sobre el
      contenido y las prácticas de estos sitios, y no puede aceptar
      responsabilidad u obligación por sus respectivos políticas de privacidad.
    </p>
    <p>
      Usted es libre de rechazar nuestra solicitud de su información personal,
      con la entendiendo que es posible que no podamos proporcionarle algunos de
      sus servicios deseados.
    </p>
    <p>
      Su uso continuado de nuestro sitio web se considerará como aceptación de
      nuestra Prácticas de privacidad e información personal. Si tienes algún
      preguntas acerca de cómo manejamos los datos del usuario y la información
      personal, sentir libre de contactarnos.
    </p>
    <p> Esta política es efectiva a partir del 1 de febrero de 2019. </p>
  </Layout>
)

export default PrivacyPolicy
