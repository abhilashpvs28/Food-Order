import { Injectable } from '@angular/core';
// import { allowedNodeEnvironmentFlags } from 'process';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag == 'All'?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count: 8},
      { name: 'Fastfood', count: 8},
      { name: 'Starter', count: 2},
      { name: 'Panner', count: 3},
      { name: 'Chicken', count: 4},
      { name: 'Snack', count: 2},
      { name: 'Coconut', count: 1},
      { name: 'Breakfast', count: 1},
      { name: 'Roast', count: 1},
      { name: 'Breakfast', count: 1},
    ];
  }
  getAll():Foods[]{
    return [
      {
        id :1,
        name :"Panner-Grilled",
        cookTime!:'10-15',
        price : 12,
        favorite: false,
        origins:['Goa'],
        star: 7.5,
        imageUrl!:'/assets/food 1.jpg',
        tags: ['Fastfood','Panner','Starter'],
        
    },
      {
        id :2,
        name :"Chickenleg-Grilled",
        cookTime!:'30-35',
        price : 20,
        favorite: false,
        origins:['Hyderabad'],
        star: 9,
        imageUrl!:'/assets/food 2.jpg',
        tags: ['Fastfood','Chicken','Snack'],
       
    },
      {
        id :3,
        name :"Chicken-crunch",
        cookTime!:'20-25',
        price : 14,
        favorite: false,
        origins:['Kerla'],
        star: 8,
        imageUrl!:'/assets/food 3.jpg',
        tags: ['Fastfood','Chicken','Snack'],
        
    },
      {
        id :4,
        name :"Coconut-amila",
        cookTime!:'15-18',
        price : 7,
        favorite: false,
        origins:['Odissa'],
        star: 3.8,
        imageUrl!:'/assets/food 4.jpg',
        tags: ['Fastfood','Coconut','Breakfast'],
       
    },
      {
        id :5,
        name :"Chicken-Wings",
        cookTime!:'23-28',
        price : 17,
        favorite: false,
        origins:['Goa'],
        star: 4.2,
        imageUrl!:'/assets/food 5.jpg',
        tags: ['Fastfood','Chicken','Roast'],
        
    },
      {
        id :6,
        name :"Panner-caramell",
        cookTime!:'25-29',
        price : 10,
        favorite: false,
        origins:['Raipur'],
        star: 5,
        imageUrl!:'/assets/food 6.jpg',
        tags: ['Fastfood','Panner','Starter'],
        
    },
      {
        id :7,
        name :"Panner-Mushroom",
        cookTime!:'45-50',
        price : 12,
        favorite: false,
        origins:['Ranchi'],
        star: 3.9,
        imageUrl!:'/assets/food 7.jpg',
        tags: ['Fastfood','Panner-mushroom','Curry'],
        
    },
      {
        id :8,
        name :"Chicken-Breast",
        cookTime!:'25-35',
        price : 21,
        favorite: false,
        origins:['Harayana'],
        star: 4.5,
        imageUrl!:'/assets/food 8.jpg',
        tags: ['Fastfood','Chicken','Curry'],
        
    }

    ]
  }
}
