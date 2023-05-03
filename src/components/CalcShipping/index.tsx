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

import {
  Container, ContainerForm, Form,
} from './styles';
import { InputErrorSpan } from '../InputErrorSpan';
import ShippingMethods from './ShippingMethods';

export default function CalcShipping() {
  const { mutateAsync, isLoading } = useValueShipping();
  const {
    errors,
    handleSubmit,
    register,
    setValue,
  } = useValidateForm<CEPInputData>(CEPSchemaYup);
  const [valuesShippingMethods, setValuesShippingMethods] = useState<ShippingMethod[]>([]);

  const handleCalcShipping: SubmitHandler<CEPInputData> = async ({ cep }, event) => {
    event?.preventDefault();

    if (!cep) {
      return 'O cep é obrigatório';
    }

    const responseValuesShipping = await mutateAsync(cep);

    setValuesShippingMethods([...responseValuesShipping]);
  };

  return (
    <Container>
      <div className="centralizer">
        <ContainerForm>
          <strong><Truck size={28} /> Calcular frete </strong>

          <Form
            isError={!!errors.cep}
            onSubmit={handleSubmit(handleCalcShipping)}
          >
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

            {!!errors.cep && <InputErrorSpan>{errors.cep.message}</InputErrorSpan>}
          </Form>
        </ContainerForm>

        <ShippingMethods isLoading={isLoading} shippingMethods={valuesShippingMethods} />
      </div>
    </Container>
  );
}
