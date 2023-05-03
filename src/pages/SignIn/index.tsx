/* eslint-disable react/jsx-props-no-spreading */
import { Link, useLocation } from 'react-router-dom';
import { FacebookLogo, GoogleLogo } from 'phosphor-react';

import { SubmitHandler } from 'react-hook-form';
import { RegisterFormData } from '../../types/Forms/registerFormData';
import { SignInFormData } from '../../types/Forms/signInFormData';
import useValidateForm from '../../hooks/useValidateForm';

import {
  Container, ContainerForm, Field, Wrapper,
} from './styles';
import { singInFormSchema } from './schemas/signInSchemaYup';
import { registerUserFormSchema } from './schemas/registerUserSchemaYup';
import { InputErrorSpan } from '../../components/InputErrorSpan';

export default function SignIn() {
  const { pathname } = useLocation();
  const isLoginPath = pathname === '/login';
  const schema = isLoginPath ? singInFormSchema : registerUserFormSchema;

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isLoading,
  } = useValidateForm<SignInFormData | RegisterFormData>(schema);

  const handleSignIn: SubmitHandler<SignInFormData | RegisterFormData> = async (
    formData,
    event,
  ) => {
    event?.preventDefault();
    return true;
  };

  return (
    <Container>
      <Wrapper>
        <ContainerForm onSubmit={handleSubmit(handleSignIn)}>
          <h1>{isLoginPath ? 'Entrar' : 'Cadastro'}</h1>

          {!isLoginPath && (
            <Field error={!!errors.name}>
              <input type="text" placeholder="Nome" {...register('name')} />
              {!!errors.name && <InputErrorSpan>{errors.name.message}</InputErrorSpan>}
            </Field>
          )}

          <Field error={!!errors.email}>
            <input type="email" placeholder="E-mail" {...register('email')} />
            {!!errors.email && <InputErrorSpan>{errors.email.message}</InputErrorSpan>}
          </Field>

          <Field error={!!errors.password}>
            <input type="password" placeholder="Senha" {...register('password')} />
            {!!errors.password && <InputErrorSpan>{errors.password.message}</InputErrorSpan>}
          </Field>

          {!isLoginPath && (
            <Field error={!!errors.passwordConfirmation}>
              <input type="password" placeholder="Confirme sua senha" {...register('passwordConfirmation')} />
              {!!errors.passwordConfirmation && (
                <InputErrorSpan>{errors.passwordConfirmation.message}</InputErrorSpan>
              )}
            </Field>
          )}

          <div>
            <button type="submit" disabled={isLoading || isSubmitting}>
              {isLoginPath ? 'Login' : 'Cadastrar'}
            </button>

            <button type="button" disabled={isLoading || isSubmitting}>
              <GoogleLogo size={22} />
              Entrar com Google
            </button>

            <button type="button" disabled={isLoading || isSubmitting}>
              <FacebookLogo size={22} />
              Entrar com Facebook
            </button>
          </div>

          {!(isSubmitting || isLoading) && (
            <>
              {isLoginPath && (
              <p>
                Não tem login?
                <Link to="/register">
                  Cadastre-se
                </Link>
              </p>
              )}

              {!isLoginPath && (
              <p>
                Já possui conta?
                <Link to="/login">
                  Entrar
                </Link>
              </p>
              )}
            </>
          )}

        </ContainerForm>
      </Wrapper>
    </Container>
  );
}
