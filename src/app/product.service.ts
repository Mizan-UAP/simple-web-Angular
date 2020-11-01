import { Injectable } from '@angular/core';

export class ProductDetails {
  id: number;
  name: string;
  brand: string;
  price: number;
  color: string;
  details: any;
}

let products: ProductDetails[] = [{
  'id': 1,
  'name': 'MELLO Silicone Cushion for Apple Magic Mouse 1 & 2 (Glacier Blue)',
  'brand': 'MELLO',
  'price': 14.95,
  'color': 'Glacier Blue',
  'details': ['Premium Silicone Creates Comfortable Fit for Apple Magic Mouse Gen 1 & 2',
    ' Allows for Use of All Multi- Touch Gestures & Functions',
    'Adjustable Position for Maximum Comfort for Any User',
    'Choose from Custom Colors to Fit Your Style', ' *** Mouse Not Included']
},
{
  'id': 2,
  'name': 'Apple Magic Mouse 2 (Wireless, Rechargable) - Silver',
  'brand': 'Visit the Apple Store',
  'price': 74.00,
  'color': 'Silver',
  'details': 'Magic Mouse 2 is completely rechargeable, so you’ll eliminate the use of traditional batteries.  It’s lighter, has fewer moving parts thanks to its built-in battery and continuous bottom shell, and has an optimized foot design — all helping Magic Mouse 2 track easier and move with less resistance across your desk.  And the Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents.  Multi-Touch  Bluetooth  Lightning port  Wireless'
}]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return products;
  }

}
