import React, {useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <div className={`contact ${theme}`}>
      <h2>¿Quieres saber más?</h2>
      <p>Envía tu información y nosotros te contáctaremos</p>
      <Form/>
    </div>
  )
}

export default Contact