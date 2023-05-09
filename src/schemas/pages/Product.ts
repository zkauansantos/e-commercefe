import * as yup from 'yup';

export const CEPSchemaYup = yup.object().shape({
  cep: yup.string().required('CEP obrigatório').max(9),
});

export const questionSchemaYup = yup.object().shape({
  question: yup.string().required('Campo obrigatório'),
});
