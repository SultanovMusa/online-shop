import {api  as index} from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
    PRODUCT.GetProductsResponse, 
    PRODUCT.GetProductsRequest
    >({
      query: ()=> ({
        url: '/products',
        method: 'GET'
      }),
      providesTags: ['products']
    })

  })
})


export const {useGetProductsQuery} = api