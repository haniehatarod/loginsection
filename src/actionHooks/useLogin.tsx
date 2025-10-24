import { useMutation } from "@tanstack/react-query";
import { LoginFn } from "../actions/AuthActions";

export default function useLogin() {
  const { mutate, isPending, error } = useMutation({
    mutationFn:LoginFn
  });
  return { mutate, isLoading: isPending, error };
}
