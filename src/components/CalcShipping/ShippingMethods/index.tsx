import { ShippingMethod } from '../../../types/ShippingMethod';
import Spinner from '../../Spinner';
import { Container } from './styles';

interface ShippingMethodsProps {
  shippingMethods: ShippingMethod[];
  isLoading: boolean;
}

export default function ShippingMethods({ shippingMethods, isLoading }: ShippingMethodsProps) {
  const valuesShippingPACandSEDEX = shippingMethods.filter(({ name }) => (
    name === 'PAC' || name === 'SEDEX'
  ));

  return (
    <Container>
      {isLoading && <Spinner size="32px" />}

      {valuesShippingPACandSEDEX.map((service) => (
        !isLoading && (
        <div key={service.id}>
          <img src={service.company.picture} alt="correios" />
          <div>
            <strong>{service.name}</strong>
            <span> até {service.custom_delivery_time} dias úteis</span>
            <strong>{service.currency}{service.price}</strong>
          </div>
        </div>
        )
      ))}
    </Container>
  );
}
