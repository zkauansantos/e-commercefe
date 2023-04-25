/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { FacebookLogo, GoogleLogo } from 'phosphor-react';

import { SubmitHandler } from 'react-hook-form';
import { RegisterFormData } from '../../types/Form/registerFormData';
import { SignInFormData } from '../../types/Form/signInFormData';
import useValidateForm from '../../hooks/useValidateForm';

import {
  Container, ContainerForm, Field, Wrapper,
} from './styles';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    errors,
    isLoginPath,
  } = useValidateForm();

  const handleSignIn: SubmitHandler<SignInFormData | RegisterFormData> = async (
    formData,
    event,
  ) => {
    event?.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <ContainerForm onSubmit={handleSubmit(handleSignIn)}>
          <h1>Entrar</h1>

          {!isLoginPath && (
            <Field error={!!errors.name}>
              <input type="text" placeholder="Nome" {...register('name')} />
              {!!errors.email && <span>{errors.name?.message}</span>}
            </Field>
          )}

          <Field error={!!errors.email}>
            <input type="email" placeholder="E-mail" {...register('email')} />
            {!!errors.email && <span>{errors.email.message}</span>}
          </Field>

          <Field error={!!errors.password}>
            <input type="password" placeholder="Senha" {...register('password')} />
            {!!errors.password && <span>{errors.password.message}</span>}
          </Field>

          {!isLoginPath && (
            <Field error={!!errors.passwordConfirmation}>
              <input type="password" placeholder="Confirme sua senha" {...register('passwordConfirmation')} />
              {!!errors.password && <span>{errors.passwordConfirmation?.message}</span>}
            </Field>
          )}

          <div>
            <button disabled={!errors} type="submit">Login</button>
            <button type="button">
              <GoogleLogo size={22} />
              Entrar com Google
            </button>

            <button type="button">
              <FacebookLogo size={22} />
              Entrar com Facebook
            </button>
          </div>

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

        </ContainerForm>
      </Wrapper>
    </Container>
  );
}
