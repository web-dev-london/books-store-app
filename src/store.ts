import { create } from 'zustand';
// import { produce } from 'immer';
// import { BookQueryStore } from './validation/validate';

interface BookQueryStore {
    bookQuery: {
        search: string
        filter: string
        orderBy: string
        page: number
        limit: number
    }
    setPage: (page: number) => void
    setLimit: (limit: number) => void
    setSearchText: (searchText: string) => void
    setFilter: (filter: string) => void
    setOrderBy: (orderBy: string) => void
}


const useBookQueryStore = create<BookQueryStore>((set) => ({
    bookQuery: {
        page: 1,
        limit: 8,
        search: 'atomic habits',
        filter: 'full',
        orderBy: 'relevance',
    },
    setPage: (page: number) => set({ bookQuery: { ...useBookQueryStore.getState().bookQuery, page } }),
    setLimit: (limit: number) => set({ bookQuery: { ...useBookQueryStore.getState().bookQuery, limit } }),
    setSearchText: (search: string) => set({ bookQuery: { ...useBookQueryStore.getState().bookQuery, search } }),
    setFilter: (filter: string) => set({ bookQuery: { ...useBookQueryStore.getState().bookQuery, filter } }),
    setOrderBy: (orderBy: string) => set({ bookQuery: { ...useBookQueryStore.getState().bookQuery, orderBy } }),
}));

export default useBookQueryStore

/* 
    import { produce } from 'immer';

// ...

setPage: (page: number) => set(produce(useBookQueryStore.getState(), draft => { draft.bookQuery.page = page })),
setLimit: (limit: number) => set(produce(useBookQueryStore.getState(), draft => { draft.bookQuery.limit = limit })),
setSearchText: (searchText: string) => set(produce(useBookQueryStore.getState(), draft => { draft.bookQuery.searchText = searchText })),
 */