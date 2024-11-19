import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/routes.tsx'
import customTheme from './theme.ts'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
    },
    mutations: {
      networkMode: "offlineFirst",
    },
  }
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
