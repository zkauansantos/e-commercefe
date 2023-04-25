import { UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { singInFormSchema } from '../pages/SignIn/schemas/signInSchemaYup';
import { registerUserFormSchema } from '../pages/SignIn/schemas/registerUserSchemaYup';
import { SignInFormData } from '../types/Form/signInFormData';
import { RegisterFormData } from '../types/Form/registerFormData';

export default function useValidateForm() {
  const { pathname } = useLocation();
  const isLoginPath = pathname === '/login';
  const schema = isLoginPath ? singInFormSchema : registerUserFormSchema;

  const {
    register,
    handleSubmit,
    formState,
    clearErrors,
    reset,
  }: UseFormReturn<SignInFormData | RegisterFormData> = useForm({
    resolver: yupResolver(schema),
  });

  const { errors, isSubmitting, isLoading } = formState;

  useEffect(() => {
    clearErrors();
    reset();
  }, [pathname]);

  return {
    register,
    handleSubmit,
    errors,
    isLoginPath,
    formState,
    isSubmitting,
    isLoading,
  };
}
