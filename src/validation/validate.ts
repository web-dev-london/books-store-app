import z from "zod";
import { fromZodError } from "zod-validation-error";


const bookSchema = z.object({
    id: z.string(),
    etag: z.string(),
    selfLink: z.string(),
    volumeInfo: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        authors: z.array(z.string()).optional(),
        publisher: z.string().optional(),
        publishedDate: z.string().optional(),
        averageRating: z.number().optional(),
        language: z.string(),
        imageLinks: z.object({
            smallThumbnail: z.string(),
            thumbnail: z.string(),
        }).optional().nullable(),
    })
})

type Book = z.infer<typeof bookSchema>

const booksSchema = z.array(bookSchema)

type Books = z.infer<typeof booksSchema>

const defineFetchResponse = <T>(resultSchema: z.ZodSchema<T>) =>
    z.object({
        totalItems: z.number(),
        items: z.array(resultSchema)
    })

type FetchResponse<T> = z.infer<ReturnType<typeof defineFetchResponse<T>>>

const validateResponse = <T>(responseSchema: z.ZodSchema<FetchResponse<T>>, data: unknown): FetchResponse<T> => {
    const validation = responseSchema.safeParse(data);
    if (!validation.success) {
        console.log(fromZodError(validation.error));
        throw new Error(`Invalid data strcucture received from the API: ${fromZodError(validation.error)}`);
    }
    return validation.data
}


export { bookSchema, booksSchema, defineFetchResponse, validateResponse };
export type { Book, Books, FetchResponse };

