import { useState} from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    if (formData.name.length < 5) {
      setError('El nombre debe tener al menos 5 caracteres.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor, ingrese un email válido.');
      return false;
    }
    setError('');
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(`Gracias ${formData.name}, te contáctaremos cuando antes vía e-mail.`);
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Nombre Completo:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit">Enviar</button>
      {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Form;
