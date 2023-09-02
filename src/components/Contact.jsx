import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({
    email: '',
    empresa: '',
    nombre: '',
    apellido: '',
    pais: '',
    sector: '',
    reto: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSending(true);

    try {
      const response = await axios.post('https://api-rysolf.vercel.app/contact', formData);
      console.log(response.data);

      setIsSubmitted(true);
      setIsSending(false);

    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    return (
      formData.email &&
      formData.empresa &&
      formData.nombre &&
      formData.apellido &&
      formData.pais &&
      formData.sector &&
      formData.reto
    );
  };
  
  return (
    
    <><div>
      <Link to="/Home">
        <Header />
      </Link>
    </div>

    <div className='main'>
        <div className="overlay"></div>
        <video src="https://firebasestorage.googleapis.com/v0/b/uber-515a8.appspot.com/o/VideoBg.mp4?alt=media&token=c712f78d-1ae1-49c3-a622-41c568087c2c" autoPlay loop muted />
        <div className="text-overlay">
          <h1>Tell us how we <br />can help you</h1>
        </div>

        <div style={{ position: 'absolute', top:0, left: 15, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '0px', color: '#9B9B9B', fontSize: '14px' }}>
    {/* Contenido del formulario aquí */}
      
        <Card style={{ width: '100%', maxWidth: '32rem', padding: '1rem' }}>
            <Card.Body>
            <Form onSubmit={handleSubmit}>
            
                
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{ color: '#000000' }}>Email</Form.Label>
                    <Form.Control name="email"  value={formData.email} onChange={handleInputChange} type="email" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label style={{ color: '#000000' }}>Empresa</Form.Label>
                    <Form.Control name='empresa' value={formData.empresa} onChange={handleInputChange} type="text" placeholder="" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{ color: '#000000' }}>Nombre</Form.Label>
                    <Form.Control name="nombre"  value={formData.nombre} onChange={handleInputChange} type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label style={{ color: '#000000' }}>Apellido</Form.Label>
                    <Form.Control type="text" name='apellido'  value={formData.apellido} onChange={handleInputChange} placeholder="" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label style={{ color: '#000000' }}>Pais</Form.Label>
                  <Form.Control type="text" name="pais"  value={formData.pais} onChange={handleInputChange} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label style={{ color: '#000000' }}>Sector al que pertenece</Form.Label>
                  <Form.Control name="sector"  value={formData.sector} onChange={handleInputChange} placeholder="" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={{ color: '#000000' }}>Tu reto/objetivo</Form.Label>
                  <Form.Control name="reto"  value={formData.reto} onChange={handleInputChange} as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" style={{ color: '#000000' }} label="Me gustaría registrarme con mi dirección de correo electrónico para recibir el boletín de Rysolf con actualizaciones, recursos valiosos y consejos útiles." />
                </Form.Group>

                            {isSubmitted && (
                    <p style={{ color: 'green', textAlign: 'center' }}>
                      ¡El formulario se ha enviado exitosamente!
                    </p>
                  )}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!validateForm() || isSending}
                  style={{
                    backgroundColor: '#007bff',
                    borderColor: '#000000',
                    // Otros estilos personalizados aquí si es necesario
                  }}
                >
                  {isSending ? 'Enviando...' : 'Enviar'}
                </Button>
              </div>
              </Form>
            
            </Card.Body>
          </Card>
        
        </div>




        <Footer />
      </div></>
 
  );
};

export default Contact;
