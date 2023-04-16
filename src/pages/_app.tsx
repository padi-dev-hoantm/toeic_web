import "@/styles/globals.css";
import { handleResultApi } from "@/untils/handleResultApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          onError: (result: any) => {
            handleResultApi(result.response?.data);
          },
        },
        mutations: {
          onSuccess: (result) => {
            handleResultApi(result);
          },
          onError: (result: any) => {
            handleResultApi(result.response?.data);
          },
        },
      },
    }),
  );
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>

  );
}
