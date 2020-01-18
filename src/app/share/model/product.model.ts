export interface ProductItem {
  uuid: string,
  name: string,
  img: string,
  price: number
}

export interface CartItem {
  uuid: string,
  name: string,
  price: number
  count: number
}

export interface AddToCartItem {
  uuid: string,
  count: number
}
