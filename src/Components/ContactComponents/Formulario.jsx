import React, { useState } from 'react';
import { Input, Button, Textarea, Text } from '@nextui-org/react';

const GlassForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  let tempErrors = {};

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validate = () => {
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    console.log('No valida')
    setErrors(tempErrors.name);
    return Object.keys(tempErrors).length == 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí puedes manejar el envío del formulario
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg w-11/12 mx-auto">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-100">Send us an <span className='text-orange-400'>Email</span></h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          isInvalid={tempErrors.name === 'Name is required'}
          clearable
          underlined
          labelPlaceholder="Name"
          placeholder="Example"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          status={errors.name ? 'error' : 'default'}
          helperText={errors.name}
          fullWidth
        />
        <Input
          clearable
          underlined
          labelPlaceholder="Email"
          placeholder="myemail@example.com"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          status={errors.email ? 'error' : 'default'}
          helperText={errors.email}
          fullWidth
        />
        <Input
          clearable
          underlined
          labelPlaceholder="Subject"
          placeholder="Some topic related to your message"
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          status={errors.subject ? 'error' : 'default'}
          helperText={errors.subject}
          fullWidth
        />
        <Textarea
          underlined
          labelPlaceholder="Message"
          placeholder="Your Message"
          name="message"
          label="Message"
          className="text-start"
          value={formData.message}
          onChange={handleChange}
          status={errors.message ? 'error' : 'default'}
          helperText={errors.message}
          fullWidth
        />
        <Button type="submit" shadow color="warning" auto>
          Send
        </Button>
      </form>
    </div>
  );
};

export default GlassForm;
