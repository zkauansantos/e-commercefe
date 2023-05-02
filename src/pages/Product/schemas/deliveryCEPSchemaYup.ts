import * as yup from 'yup';

export const deliveryCEPSchemaYup = yup.object().shape({
  cep: yup.string().required('CEP obrigatório').max(9),
});
