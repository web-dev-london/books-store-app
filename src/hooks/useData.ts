// import { useEffect, useState } from "react"
// import { AxiosRequestConfig, CanceledError } from "axios"
// import { defineFetchResponse, FetchResponse, validateResponse } from "../validation/validate"
// import { apiClient } from "../services/api-client"
// import z from "zod"



// const useData = <T>(endpoint: string, schema: z.ZodSchema<T>, config?: AxiosRequestConfig, dep?: unknown[]) => {

//   const [data, setData] = useState<FetchResponse<T> | null>(null)
//   const [error, setError] = useState<string | null>(null)
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     const controller = new AbortController()
//     const { signal } = controller
//     const fetchData = async () => {
//       setIsLoading(true)
//       setError(null)
//       try {
//         const response = await apiClient.get<unknown>(endpoint, { ...config, signal })
//         const fetchResponseSchema = defineFetchResponse(schema)
//         const data = validateResponse(fetchResponseSchema, response.data)
//         if (!data) {
//           throw new Error('No data received from the API')
//         }

//         setData(data)
//         setIsLoading(false)

//       } catch (err) {
//         if (err instanceof CanceledError) return

//         if (err instanceof Error) {
//           setError(err.message)
//           setIsLoading(false)
//         }
//       }
//     }

//     fetchData()

//     return () => controller.abort()
//   }, [endpoint, schema, config, dep])

//   return { data, error, isLoading }
// }


// export default useData;

