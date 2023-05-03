/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ArrowRight, Truck } from 'phosphor-react';

import useValidateForm from '../../hooks/useValidateForm';
import useValueShipping from '../../services/hooks/useValueDelivery';

import formatCEP from '../../utils/formatCEP';
import { CEPSchemaYup } from '../../pages/Product/schemas/CEPSchemaYup';
import { CEPInputData } from '../../types/Forms/CEPInputData';
import { ShippingMethod } from '../../types/ShippingMethod';

import { Container, ContainerForm, Form } from './styles';

export default function Shipping() {
  const calculate = useValueShipping();
  const {
    errors,
    handleSubmit,
    register,
    setValue,
  } = useValidateForm<CEPInputData>(CEPSchemaYup);
  const [valuesShippingMethods, setValuesShippingMethods] = useState<ShippingMethod[]>([]);
  const valuesShippingPACandSEDEX = valuesShippingMethods.filter(({ name }) => (
    name === 'PAC' || name === 'SEDEX'
  ));

  const handleCalcShipping: SubmitHandler<CEPInputData> = async ({ cep }, event) => {
    event?.preventDefault();

    if (!cep) {
      return 'O cep é obrigatório';
    }

    const responseValuesShipping = await calculate.mutateAsync(cep);

    setValuesShippingMethods([...responseValuesShipping]);
  };

  return (
    <Container>
      <ContainerForm>
        <strong><Truck size={28} /> Calcular frete </strong>

        <Form onSubmit={handleSubmit(handleCalcShipping)}>
          <label htmlFor="cep">
            <input
              id="cep"
              type="text"
              placeholder="Digite seu CEP"
              maxLength={9}
              {...register('cep')}
              onChange={(event) => setValue('cep', formatCEP(event.target.value))}
            />

            <button type="submit">
              <ArrowRight size={28} />
            </button>
          </label>

          {!!errors.cep && <span className="error">{errors.cep.message}</span>}
        </Form>
      </ContainerForm>

      <div>
        {valuesShippingPACandSEDEX.map((service) => (
          <div key={Math.random()}>
            <img src={service.company.picture} alt="" width="30" />
            <strong>{service.name}</strong>
            <span> até {service.custom_delivery_time} dias úteis</span>
            <strong>{service.currency}{service.price}</strong>
          </div>
        ))}
      </div>
    </Container>
  );
}
