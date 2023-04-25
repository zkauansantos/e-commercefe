/* eslint-disable react/jsx-props-no-spreading */
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation } from 'react-router-dom';
import { FacebookLogo, GoogleLogo } from 'phosphor-react';
import { useEffect } from 'react';
import {
  Container, ContainerForm, Field, Wrapper,
} from './styles';
import { singInFormSchema } from './schemas/signInSchemaYup';
import { registerUserFormSchema } from './schemas/registerUserSchemaYup';
import { RegisterFormData } from '../../types/Form/registerFormData';
import { SignInFormData } from '../../types/Form/signInFormData';

export default function SignIn() {
  const { pathname } = useLocation();
  const isLoginPath = pathname === '/login';
  const schema = isLoginPath ? singInFormSchema : registerUserFormSchema;

  const {
    register,
    handleSubmit,
    formState,
    clearErrors,
  }: UseFormReturn<SignInFormData | RegisterFormData> = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData | RegisterFormData
  > = async (formData, event) => {
    event?.preventDefault();
  };

  useEffect(() => {
    clearErrors();
  }, [pathname]);

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

          {pathname === '/login' && (
            <p>
              Não tem login?
              <Link to="/register">
                Cadastre-se
              </Link>
            </p>
          )}

          {pathname === '/register' && (
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
