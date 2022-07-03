import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponet from '../pure/contactComponet';

const DirectorioContacto = () => {
 const defaultContact = new Contact('Michael', 'Rodriguez', 'cequea.mr@gmail.com', false)
 
  return (
    <div>
     <h1>
      Directorio de Contactos
     </h1>
     <ContactComponet contact={defaultContact}></ContactComponet>
    </div>
  )
}

export default DirectorioContacto;