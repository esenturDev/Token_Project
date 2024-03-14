export namespace Products {
	export type GetProductsRequest = void;
	export type GetProductsResponse = {
		_id?: number;
		productName: string;
		quantity: string;
		price: string;
    photoUrl: string;
	}[];

  export type PostProductsRequest = {
    _id?: number;
    productName: string;
		quantity: string;
		price: string;
    photoUrl: string;
  }
  export type PostProductsResponse = {
    _id?: number;
    productName: string;
		quantity: string;
		price: string;
    photoUrl: string;
  }[];
}
