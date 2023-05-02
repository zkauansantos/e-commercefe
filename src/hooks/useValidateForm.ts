import { UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FieldValues } from 'react-hook-form/dist/types';

export default function useValidateForm<T extends FieldValues>(schema: any) {
  const { pathname } = useLocation();

  const {
    register,
    handleSubmit,
    formState,
    clearErrors,
    reset,
    setValue,
  }: UseFormReturn<T> = useForm({
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
    formState,
    isSubmitting,
    isLoading,
    setValue,
  };
}
