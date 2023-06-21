/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SubmitHandler } from 'react-hook-form';
import {
  Eye, EyeSlash, FacebookLogo, GoogleLogo,
} from 'phosphor-react';

import { InputErrorSpan } from '@/components/InputErrorSpan';

import useValidateForm from '@/hooks/useValidateForm';

import { registerUserFormSchema, singInFormSchema } from '@/schemas/pages/SignIn';
import { RegisterFormData } from '@/types/Forms/registerFormData';
import { SignInFormData } from '@/types/Forms/signInFormData';

import {
  Container,
  ContainerForm,
  Field,
  Wrapper,
} from '@/styles/pages/SignIn';
import { useState } from 'react';

export default function SignIn() {
  const { query } = useRouter();
  const { path } = query;
  const isLoginPath = path === 'login';
  const schema = isLoginPath ? singInFormSchema : registerUserFormSchema;
  const [showPassword, setShowPassword] = useState(false);

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
    <>
      <Head>
        {isLoginPath && <title> E-commerce | Login</title>}
        {!isLoginPath && <title> E-commerce | Cadastro</title>}
      </Head>
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
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                {...register('password')}
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {!showPassword ? <Eye size={26} /> : <EyeSlash size={26} />}
              </button>

              {!!errors.password && <InputErrorSpan>{errors.password.message}</InputErrorSpan>}
            </Field>

            {!isLoginPath && (
            <Field error={!!errors.passwordConfirmation}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirme sua senha"
                {...register('passwordConfirmation')}
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {!showPassword ? <Eye size={26} /> : <EyeSlash size={26} />}
              </button>

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
                <Link href="/singin/register">
                  Cadastre-se
                </Link>
              </p>
              )}

              {!isLoginPath && (
              <p>
                Já possui conta?
                <Link href="/singin/login">
                  Entrar
                </Link>
              </p>
              )}
            </>
            )}

          </ContainerForm>
        </Wrapper>
      </Container>
    </>
  );
}
