import { useMutation } from 'react-query';
import { api } from '../api';

async function getPricesDelivery(cep: string): Promise<any> {
  const fromPostalCode = '71880-518';

  const response = await api.post(
    '/calculate',
    {
      from: {
        postal_code: fromPostalCode,
      },
      to: {
        postal_code: cep,
      },
      package: {
        height: 4,
        width: 12,
        length: 17,
        weight: 0.3,
      },
      options: {
        insurance_value: 1180.87,
        receipt: false,
        own_hand: false,
      },
      services: '1,2,3,4,7,11',
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  return response.data;
}

export default function useValueDelivery() {
  return useMutation({
    mutationFn: getPricesDelivery,
  });
}
