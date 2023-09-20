const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    const passwordRegex = /.*\d+.*/;
    return passwordRegex.test(password) && password.length >= 6 && password.length <= 10;
  };
  
  const validation = (userData) => {
    const errors = {};
  
    if (!userData.email) {
      errors.email = 'Por favor, ingresa tu correo electrónico.';
    } else if (!validateEmail(userData.email)) {
      errors.email = 'Por favor, ingresa un correo electrónico válido.';
    } else if (userData.email.length > 35) {
      errors.email = 'El correo electrónico no debe tener más de 35 caracteres.';
    }
  
    if (!userData.password) {
      errors.password = 'Por favor, ingresa tu contraseña.';
    } else if (!validatePassword(userData.password)) {
      errors.password = 'La contraseña debe tener al menos 6 a 10 caracteres con al menos un número.';
    }
  
    return errors;
  };
  
  export default validation;
  
    

