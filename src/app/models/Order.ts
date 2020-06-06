import { ShoppingCart } from './ShoppingCart';
export class Order{
  key: string;
    datePlaced:number
    netPrice: number;
  user: {
    userId: string
  };
    items: any[] = [];
    constructor(public userId, public shipping:any, shoppingCart:ShoppingCart, public totalCost: number){
        this.datePlaced= new Date().getTime()
       this.items= shoppingCart.items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            };
          })
          this.user = {
            userId: userId,
          };
          this.netPrice = shoppingCart.totalPrice;
    }

}