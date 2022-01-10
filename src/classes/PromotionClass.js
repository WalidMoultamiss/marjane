import { get, put, post, UserObj, patch } from "../helpers";

export class PromotionClass {
  promotions = [];
  promotion;



  getPromotions = async () => {
    const result = await get("/api/promotions/");
    this.promotions = result;
    console.log('promotions', this.promotions);
    return result;
  };
}

export default PromotionClass;
