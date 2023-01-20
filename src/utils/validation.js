export default function validation(inputs) {
  let errors = {};
  const emailRgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/g;

  if (!emailRgex.test(inputs.username)) errors.username = "Username no valido";
  if (!passwordRegex.test(inputs.password)) {
    errors.password = "contraseña no valida";
  }
  if (inputs.username && inputs.username.length > 35) {
    errors.username = "Debe tener menos de 35 caracteres";
  }
  if (
    inputs.password &&
    inputs.password.length > 10 &&
    inputs.password.length < 8
  ) {
    errors.password = "Debe tener entre 8 y 10 caracteres";
  }

  return errors;
}
