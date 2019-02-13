import React from 'react'
import Layout from '../components/layout-offer'
import SEO from '../components/seo'
import Testimonial from '../components/testimonial-image'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { navigate } from 'gatsby'

export default class OfertaLaboral extends React.Component {
  state = {
    fname: '',
    phone: '',
    email: '',
    errors: {},
    isSubmitted: false,
  }
  changeEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }
  changeName = event => {
    this.setState({
      fname: event.target.value,
    })
  }
  changePhone = event => {
    this.setState({
      phone: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ isSubmitted: true })
    addToMailchimp(this.state.email, this.state).then(data => {
      if (data.result === 'success') {
        this.setState({
          errors: {},
          fname: '',
          phone: '',
          email: '',
        })
        navigate('/gracias')
      } else if (data.msg === '1 - Please enter a value') {
        this.setState({
          errors: {
            fname: 'Ingrese su Nombre y Apellido',
          },
        })
      } else if (data.msg === '4 - Please enter a value') {
        this.setState({
          errors: {
            phone: 'Ingrese su Numero Telefonico',
          },
        })
      } else {
        this.setState({
          errors: {
            email: 'Ingrese un Correo Electronico valido',
          },
        })
      }
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Oportunidad Laboral" />
        <div className="wrapper">
          <div className="main">
            <div className="box">
              <h1>
                Excelente <strong>OPORTUNIDAD</strong> Laboral en la Florida
              </h1>

              <div className="divider">
                <div className="inner" />
              </div>

              <div className="rows">
                <div className="leftcol">
                  <div className="highlight">
                    <p>
                      {' '}
                      Compañía internacional líder en seguros busca
                      profesionales con experiencia en ventas.{' '}
                    </p>

                    <p>
                      {' '}
                      Contratación inmediata, excelente ambiente laboral,
                      entrenamiento, varias posiciones disponibles, salarios,
                      bonos y posibilidad de ascenso
                    </p>
                  </div>

                  <h3>Requerimos:</h3>

                  <ul>
                    <li>Hablar perfectamente Español </li>
                    <li>Disponibilidad de tiempo y ganas de trabajar</li>
                    <li>Interés en crecimiento profesional</li>
                  </ul>
                </div>
                <div className="rightcol testimonial">
                  <div className="image">
                    <Testimonial />
                  </div>

                  <p>
                    <strong>Maria Velazquez </strong>- “En esta compañía estamos
                    en proceso de crecimiento esto implica para mi un ambiente
                    de trabajo estimulante, dinámico, con mucha energía y lleno
                    de oportunidades”
                  </p>
                </div>
              </div>
              <div className="bottomContainer">
                <form onSubmit={this.handleSubmit}>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Nombre y Apellido"
                      value={this.state.fname}
                      onChange={event => this.changeName(event)}
                      className={this.state.errors.fname ? 'invalid' : ''}
                    />
                    <div
                      className={this.state.errors.fname ? 'suggestion' : ''}
                    >
                      {this.state.errors.fname}
                    </div>

                    <input
                      type="text"
                      placeholder="Telefono"
                      value={this.state.phone}
                      onChange={event => this.changePhone(event)}
                      className={this.state.errors.phone ? 'invalid' : ''}
                    />
                    <div
                      className={this.state.errors.phone ? 'suggestion' : ''}
                    >
                      {this.state.errors.phone}
                    </div>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Correo Electronico"
                      value={this.state.email}
                      onChange={event => this.changeEmail(event)}
                      className={this.state.errors.email ? 'invalid' : ''}
                    />

                    <div
                      className={this.state.errors.email ? 'suggestion' : ''}
                    >
                      {this.state.errors.email}
                    </div>

                    <button type="submit" className="btn-blue">
                      INSCRIBIRME
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
