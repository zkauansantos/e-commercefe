/* eslint-disable jsx-a11y/label-has-associated-control */
import * as Tabs from '@radix-ui/react-tabs';

import {
  Container,
  ContainerDescriptionProduct,
  Content,
  ContentDescription,
  ShareContainer,
  Wrapper,
} from '../styles/pages/Product';

import Benefits from '../components/Benefits';
import ProductWidget from '../components/ProductWidget';
import CalcShipping from '../components/CalcShipping';
import Highlights from '../components/Highlights';

export default function Product() {
  return (
    <>
      <Container as="main">
        <Content>
          <Benefits />

          <Wrapper>
            <div className="container-image">
              <div className="img" />
            </div>

            <ProductWidget />
          </Wrapper>

          <CalcShipping />
        </Content>
      </Container>
      <Highlights visibleMostPurchased={false} titleCarousel="Você também vai gostar" />
      <ContainerDescriptionProduct>
        <ContentDescription>
          <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="TabsList" aria-label="Manage your account">
              <Tabs.Trigger className="TabsTrigger" value="tab1">
                Account
              </Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger" value="tab2">
                Password
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="TabsContent" value="tab1" />
            <Tabs.Content className="TabsContent" value="tab2" />
          </Tabs.Root>
        </ContentDescription>
        <ShareContainer />
      </ContainerDescriptionProduct>
    </>
  );
}
