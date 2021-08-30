import { useState } from 'react';

const useForm = (initialFormState = {}, resetState = {}) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData(resetState);
  };

  return { formData, handleInputChange, resetForm };
};

export default useForm;