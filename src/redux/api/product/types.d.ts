/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCT {
	type GetProductsResponse = {
		[x: string]: PostProductsRequest;
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];

	type GetProductsRequest = void;

	type GetProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];

	type GetProductRequest = string;

	type PostProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		_id: string;
		__v: number;
	}[];

	type PostProductsRequest = {
		newData: {
			productName: string;
			quantity: number;
			price: number;
			photoUrl: string;
		};
	};

	type EditProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		_id: string;
		__v: number;
	};

	type EditProductRequest = {
		_id: string;
		updateData: {
			productName: string;
			quantity: number;
			price: number;
			photoUrl: string;
		};
	};

  type DeleteProductPesponse ={
    productName: string
    quantity: number;
    price: number;
    photoUrl : string;
    _id: string;
    __v: number;
  }

  type DeleteProductPequest  = string;

  type PutProductResponse ={
    productName: string;
    quantity: number;
    price: number;
    photoUrl: string;
    _id: string;
    __v: number;
  }[]

  type PutProductRequest ={
    productName: string;
    quantity: number;
    price: number;
    photoUrl : string;
  }
}
