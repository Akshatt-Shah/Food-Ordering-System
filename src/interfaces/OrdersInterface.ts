
export interface OrdersInterface {
    _id?: String;
    products: [
      {
        product_id: String;
        product_name: String;
        product_qty: Number;
        product_price: Number;
      }
    ];
    user_id: String;
    coupon_id: String;
    total: Number;
    status: Boolean;
  }
  