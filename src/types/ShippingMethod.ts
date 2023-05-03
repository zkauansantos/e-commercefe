export type ShippingMethod = {
  id: number;
  name: string;
  price: string;
  company: {
    picture: string;
  }
  custom_delivery_time: string;
  currency: string;
};
