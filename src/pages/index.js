import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Link } from 'gatsby'

const Index = () => (
  <Layout>
    <SEO
      title="Oferta Laboral"
      keywords={[`trabajo en miami`, `empleo espanol`, `ofertas laborales`]}
    />
    <div className="wrapper">
      <div className="main" style={{ width: '250px', margin: '0 auto 20px' }}>
        <Image />
      </div>
      <Link to="/oferta-laboral" title="Inscribirse para Trabajar Hoy">
        <Banner />
      </Link>
    </div>
  </Layout>
)

export default Index
