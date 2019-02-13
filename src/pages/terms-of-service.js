import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const TermsOfService = () => (
  <Layout>
    <SEO title="Terms of Service" />
    <div style={{ width: '250px', margin: '0 auto 60px' }}>
      <Link to="/">
        <Image />
      </Link>
    </div>
    <h2> Condiciones del servicio </h2>

    <h3> 1. Términos </h3>

    <p>
       Accediendo al sitio web en {''}
      <Link a="/"> https://www.empleonow.com </Link>, usted acepta estar
       obligado por estos términos de servicio, todas las leyes y regulaciones
      aplicables, y acepta que eres responsable del cumplimiento de cualquier
      normativa local aplicable las leyes Si no está de acuerdo con alguno de
      estos términos, tiene prohibido  utilizando o accediendo a este sitio. Los
      materiales contenidos en este sitio web son: protegido por los derechos de
      autor aplicables y el derecho de marcas.
    </p>

    <h3> 2. Licencia de uso </h3>

    <ol type="a">
      <li>
        Se concede permiso para descargar temporalmente una copia de los
        materiales. (información o software) en el sitio web de Obtener mejores
        ofertas para personal, visualización transitoria no comercial solamente.
        Esta es la concesión de una licencia, no es una transferencia de título,
        y bajo esta licencia usted no puede:
        <ol type="i">
          <li>modificar o copiar los materiales; </li>

          <li>
            utilizar los materiales para cualquier propósito comercial, o para
            cualquier público pantalla (comercial o no comercial);
          </li>

          <li>
            intentar descompilar o aplicar ingeniería inversa a cualquier
            software contenido en Obtener el sitio web de Mejores Ofertas;
          </li>

          <li>
            eliminar cualquier derecho de autor u otras notaciones de propiedad
            de la materiales; o
          </li>

          <li>
            transferir los materiales a otra persona o "reflejar" los
            materiales en cualquier otro servidor.
          </li>
        </ol>
      </li>

      <li>
        Esta licencia terminará automáticamente si viola cualquiera de
        estos restricciones y puede ser terminado por Obtener mejores ofertas en
        cualquier momento. Sobre terminando su visualización de estos materiales
        o al finalizar el Esta licencia, debe destruir cualquier material
        descargado en su Posesión en formato electrónico o impreso.
      </li>
    </ol>

    <h3> 3. Descargo de responsabilidad </h3>

    <ol type="a">
      <li>
        Los materiales en el sitio web de Get Best Offers se proporcionan 'tal
        como están' base. Obtener mejores ofertas no otorga ninguna garantía,
        expresa o implícita, y por la presente renuncia y niega todas las demás
        garantías incluidas, sin Limitación, garantías implícitas o condiciones
        de comerciabilidad, idoneidad. Para un propósito particular, o la no
        infracción de la propiedad intelectual u otra violación de derechos.
      </li>

      <li>
        Además, Get Best Offers no garantiza ni hace ninguna representación. En
        cuanto a la precisión, los resultados probables o la fiabilidad del uso
        de Los materiales en su sitio web o relacionados con dichos materiales
        oen cualquier sitio vinculado a este sitio.
      </li>
    </ol>

    <h3> 4. Limitaciones </h3>

    <p>
       En ningún caso, Get Best Deals o sus proveedores serán responsables de
      cualquier daños (incluidos, entre otros, daños por pérdida de datos
      o beneficio, o debido a la interrupción del negocio) que surja del uso
      o incapacidad para utilizar los materiales en el sitio web de Obtener las
      mejores ofertas, incluso si Get Mejores Ofertas o un representante
      autorizado de Obtener Mejores Ofertas ha sido  notificado verbalmente o
      por escrito de la posibilidad de tal daño. Porque algunas jurisdicciones
      no permiten limitaciones en garantías implícitas, o limitaciones de
      responsabilidad por daños indirectos o incidentales, estos Las
      limitaciones pueden no aplicarse a usted.
    </p>

    <h3> 5. Precisión de los materiales. </h3>

    <p>
       Los materiales que aparecen en el sitio web de Obtener Mejores Ofertas
      podrían incluir Errores técnicos, tipográficos o fotográficos. Obtener
      mejores ofertas no garantiza que cualquiera de los materiales en su sitio
      web son precisos, completos o corriente. Obtener mejores ofertas puede
      realizar cambios en los materiales contenidos en Su sitio web en cualquier
      momento sin previo aviso. Sin embargo, obtener mejores ofertas no Haga
      cualquier compromiso para actualizar los materiales.
    </p>

    <h3> 6. Enlaces </h3>

    <p>
       Obtener mejores ofertas no ha revisado todos los sitios vinculados a su
      sitio web y no es responsable de los contenidos de ningún sitio vinculado.
      los la inclusión de cualquier enlace no implica la aprobación por parte de
      Get Best Deals of the sitio. El uso de cualquier sitio web vinculado es
      por cuenta y riesgo del usuario.
    </p>

    <h3> 7. Modificaciones </h3>

    <p>
       Obtener mejores ofertas puede revisar estos términos de servicio para su
      sitio web en cualquier Tiempo sin previo aviso. Al utilizar este sitio
      web, usted acepta estar obligado por La versión actual de estos términos
      de servicio.
    </p>

    <h3> 8. Ley aplicable </h3>

    <p>
       Estos términos y condiciones se rigen y se interpretan de acuerdo con con
      las leyes de Argentina y se somete irrevocablemente a la
      exclusiva jurisdicción de los tribunales de ese Estado o localidad.
    </p>
  </Layout>
)

export default TermsOfService
