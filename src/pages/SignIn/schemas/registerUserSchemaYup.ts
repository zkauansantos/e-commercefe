import * as yup from 'yup';

export const registerUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório').max(15),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
  passwordConfirmation: yup.string().required('Senha obrigatória'),
});
