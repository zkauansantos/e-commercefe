/* eslint-disable react/jsx-props-no-spreading */
import * as Tabs from '@radix-ui/react-tabs';
import { SubmitHandler } from 'react-hook-form';

import { QuestionTextarea } from '@/types/Forms/QuestionTextarea';
import { questionSchemaYup } from '@/schemas/pages/Product';
import useValidateForm from '@/hooks/useValidateForm';
import { InputErrorSpan } from '../InputErrorSpan';

import { Container } from './styles';

export default function DescriptionProduct() {
  const {
    errors,
    handleSubmit,
    isLoading,
    isSubmitting,
    register,
  } = useValidateForm<QuestionTextarea>(questionSchemaYup);

  const handleSubmitQuestion: SubmitHandler<QuestionTextarea> = async (question, event) => {
    event?.preventDefault();

    return question;
  };

  return (
    <Container error={!!errors.question}>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">

        <Tabs.List className="TabsList">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Descrição
          </Tabs.Trigger>

          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Avaliações
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="tab1">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere, eveniet necessitatibus odit, sapiente maiores,
            voluptatem deleniti asperiores nesciunt mollitia blanditiis
            modi aspernatur adipisci cum illum corporis earum. Neque, voluptas expedita.
          </p>
        </Tabs.Content>

        <Tabs.Content className="TabsContent" value="tab2">
          <div>
            <strong>Opniões dos consumidores</strong>
            <p>Tem esse produto? Seja o primeiro a avaliá-lo</p>
            <span> * * * * * ( Avalie )</span>
          </div>

          <div>
            <strong>Duvida dos consumidores</strong>
            <p>
              Tem alguma duvida sobre esse produto? Pergunte ao lojista e a outros compradores!
            </p>

            <form onSubmit={handleSubmit(handleSubmitQuestion)}>
              <textarea cols={30} rows={10} {...register('question')} />
              {!!errors.question && <InputErrorSpan>{errors.question.message}</InputErrorSpan>}

              <button
                disabled={isLoading || isSubmitting}
                type="submit"
              >
                Enviar pergunta
              </button>
            </form>
          </div>

          <div className="separator" />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
}
