
import z from "zod";
import { fromZodError } from "zod-validation-error";


const bookSchema = z.object({
    id: z.string(),
    volumeInfo: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        authors: z.array(z.string()).optional(),
        publisher: z.string().optional(),
        publishedDate: z.string().optional(),
        description: z.string().optional(),
        pageCount: z.number().optional(),
        averageRating: z.number().optional(),
        imageLinks: z.object({
            smallThumbnail: z.string().optional(),
            thumbnail: z.string().optional(),
        }).optional(),
        language: z.string().optional(),
        previewLink: z.string().optional(),
        infoLink: z.string().optional(),
        canonicalVolumeLink: z.string().optional(),
    }),
})

type Book = z.infer<typeof bookSchema>

const booksSchema = z.array(bookSchema)

type Books = z.infer<typeof booksSchema>

const defineFetchResponse = <T>(resultSchema: z.ZodSchema<T>) =>
    z.object({
        totalItems: z.number(),
        items: z.array(resultSchema).optional(),
    })

type FetchResponse<T> = z.infer<ReturnType<typeof defineFetchResponse<T>>>

const validateResponse = <T>(responseSchema: z.ZodSchema<FetchResponse<T>>, data: unknown): FetchResponse<T> => {
    const validation = responseSchema.safeParse(data);
    // console.log('Validation: ', validation);
    if (!validation.success) {
        console.log(fromZodError(validation.error));
        throw new Error(`Invalid data strcucture received from the API: ${fromZodError(validation.error)}`);
    }
    return validation.data
}

const bookDetailSchema = z.object({
    id: z.string(),
    selfLink: z.string(),
    volumeInfo: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        authors: z.array(z.string()).optional(),
        publisher: z.string().optional(),
        publishedDate: z.string().optional(),
        description: z.string().optional(),
        averageRating: z.number().optional(),
        pageCount: z.number().optional(),
        printType: z.string().optional(),
        mainCategory: z.string().optional(),
        categories: z.array(z.string()).optional(),
        imageLinks: z.object({
            smallThumbnail: z.string().optional(),
            thumbnail: z.string().optional(),
        }).optional(),
        language: z.string().optional(),
        previewLink: z.string().optional(),
        infoLink: z.string().optional(),
        canonicalVolumeLink: z.string().optional(),
    }),
    accessInfo: z.object({
        country: z.string().optional(),
        epub: z.object({
            isAvailable: z.boolean().optional(),
            acsTokenLink: z.string().optional(),
        }),
        pdf: z.object({
            isAvailable: z.boolean().optional(),
        }).optional(),
    }).optional(),
})

type BookDetail = z.infer<typeof bookDetailSchema>


export { bookDetailSchema, bookSchema, booksSchema, defineFetchResponse, validateResponse };
export type { Book, BookDetail, Books, FetchResponse };

