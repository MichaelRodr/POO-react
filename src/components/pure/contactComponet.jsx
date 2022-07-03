import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../../models/contact.class.js';
const ContactComponet = ({contact}) => {
  return (
    <div>
     <div className='container'>
      <h3>
       Datos contacto:
      </h3>
      <span>
       { contact.nombre }<span> </span>{ contact.apellido } 
      </span>
      <h3>
       Email:
      </h3>
       { contact.email }
      <h4>
       Contacto: { contact.conectado? 'On line': 'Disconect' }
      </h4>
     </div>

    </div>
  )
}

ContactComponet.propTypes = {
 contact: PropTypes.instanceOf(Contact)
}

export default ContactComponet;