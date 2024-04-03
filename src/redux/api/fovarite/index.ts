import {api as index} from '../index'

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProductFavorite: build.query<
    Products.GetFavoriteResponse,
    Products.GetFavoriteRequest
    >({
      query: ()=> ({
        url: '/favotites-products',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenBasket')}`
        }
      }),
      providesTags: ['products']
    }),

    postProducFavorite: build.mutation<
    Products.PostFavoriteResponse,
    Products.PostFavoriteRequest
    >({
      query: (_id) => ({
        url:  `/favorites-products/${_id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenBasket')}`
        }
      }),
      invalidatesTags: ['products']
    })

  })
})
export const  { useGetProductFavoriteQuery, usePostProducFavoriteMutation} = api