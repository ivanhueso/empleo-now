import React from 'react'
import Layout from '../components/layout-offer'
import SEO from '../components/seo'
import Image from '../components/business-career-confidence'
import '../styles/gracias.css'

export default class Gracias extends React.Component {
  affiliateLink =
    'https://www.mb103.com/lnk.asp?o=7552&c=918277&a=367983&k=3ABFF1DD1DCD3539BFB86918ED21FB83&l=6264&s1=en-thankyou'
  render() {
    return (
      <Layout>
        <SEO title="Gracias" />
        <div className="page-gracias wrapper">
          <div className="main">
            <div className="box">
              <h1>
                ¡Hemos recibido tu información! <br />
                Lo contactaremos a la brevedad
              </h1>

              <Image />
              <a href={this.affiliateLink} className="btn-blue">
                BUSCAR MAS OFERTAS LABORALES
              </a>
              <div className="divider">
                <div className="inner" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
