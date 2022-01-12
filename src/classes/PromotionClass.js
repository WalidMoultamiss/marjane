import { get, put, post, UserObj, patch } from "../helpers";

export class PromotionClass {
  promotions = [];
  products = []
  promotion;



  getPromotions = async () => {
    const result = await get("/api/promotions/");
    this.promotions = result;
    console.log('promotions', this.promotions);
    return result;
  };


  getProducts = async () => {
    const result = await get("/api/promotions/products/");
    this.products = result;
    return result;
  };
}

export default PromotionClass;
