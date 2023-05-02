/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import {
  ArrowRight,
  CoatHanger,
  Ruler,
  ShoppingBagOpen,
  Truck,
} from 'phosphor-react';

import Benefits from '../../components/Benefits';

import formatCEP from '../../utils/formatCEP';

import { Container, Content } from './styles';
import useValidateForm from '../../hooks/useValidateForm';
import { deliveryCEPSchemaYup } from './schemas/deliveryCEPSchemaYup';
import useValueDelivery from '../../services/hooks/useValueDelivery';

type CEPInputData = {
  cep: string;
};

export default function Product() {
  const calculate = useValueDelivery();
  const {
    errors,
    handleSubmit,
    register,
    setValue,
  } = useValidateForm<CEPInputData>(deliveryCEPSchemaYup);
  const [valueDeliveryServices, setValueDeliveryServices] = useState<any>([]);
  const valueDeliveryPACandSEDEX = valueDeliveryServices.filter((service) => (
    service.name === 'PAC' || service.name === 'SEDEX'
  ));

  const handleCalcDelivery: SubmitHandler<CEPInputData> = async (inputValue, event) => {
    event?.preventDefault();
    const { cep } = inputValue;

    if (!cep) {
      return 'O cep é obrigatório';
    }

    const responseValuesDelivery = await calculate.mutateAsync(cep);

    setValueDeliveryServices([...responseValuesDelivery]);
  };

  return (
    <Container as="main">
      <Content>
        <Benefits />

        <div className="container">
          <div className="container-image">
            <div className="img" />
          </div>

          <div className="details">
            <div className="product-information">
              <strong>PUMA</strong>
              <span>TÊNIS PUMA MB.02 IRIDESCENT MASCULINO</span>

              <div className="avaliation">
                * * * * * (Avalie agora!)
              </div>
            </div>

            <div className="price">
              <span>R$ 1.099,99</span>

              <div>
                <span>EM ATÉ</span>
                <strong>10X <span>DE</span> R$ 109,99</strong>
              </div>
            </div>

            <div className="colors-product">
              <span>ESCOLHA A <strong>COR DESEJADA</strong></span>

              <div className="p-view" />
            </div>

            <div className="sizes">
              <span>ESCOLHA O <strong>TAMANHO</strong></span>

              <div className="wrapper">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={Math.random()} className="size">
                    <span>{34 + i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="find-you-size">
              <div><CoatHanger size={24} /><span>Descubra seu tamanho</span></div>
              <div><Ruler size={24} /><span>Tabela de medidas</span></div>
            </div>

            <button type="button">
              <span>Comprar</span> <ShoppingBagOpen size={28} />
            </button>

            <div className="benefits">
              <div><Truck size={28} /><strong>FRETE GRATÍS</strong></div>
              <div><ShoppingBagOpen size={28} />
                <span>COMPRA <strong>100% SEGURA</strong></span>
              </div>
            </div>

            <div className="delivery">
              <div>
                <Truck size={28} /> <strong>Calcular frete</strong>
              </div>

              <form onSubmit={handleSubmit(handleCalcDelivery)}>
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
              </form>
            </div>

            <div>{valueDeliveryPACandSEDEX.map((service) => (
              <div key={Math.random()}>
                <img src={service.company.picture} alt="" />
                <strong>{service?.name}</strong>
                <span> até {service.custom_delivery_time} dias úteis</span>
                <strong>{service.currency}{service.price}</strong>
              </div>
            ))}
            </div>
          </div>

        </div>
      </Content>
    </Container>
  );
}
