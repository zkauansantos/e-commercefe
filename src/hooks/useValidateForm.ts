import { UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FieldValues } from 'react-hook-form/dist/types';
import { useRouter } from 'next/router';

export default function useValidateForm<T extends FieldValues>(schema: any) {
  const { query } = useRouter();
  const { path } = query;

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
  }, [path, clearErrors, reset]);

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
