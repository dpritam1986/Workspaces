import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


class Animal{
	
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	
	speak(){
		
		console.log('I , am ' , this.name , 'and I am ' , this.age , 'years old');
		
	}
}

const animal1 = new Animal('Tiger' , 3);
animal1.speak();


class Lion extends Animal{
	
	constructor(name, age , furcolor , speed){
		super(name, age);
		this.furcolor = furcolor;
		this.speed = speed;
	}
	
	
	roar(){
		console.log('Rooooar! I have ' , 
		 this.furcolor , 'fur  I can run ' , 
		 this.speed ,
		 'miles an hour !');
	}
}

const lion1 = new Lion('Musafa' , 20 , 'Golden' ,25);
lion1.speak();
lion1.roar();
console.log(lion1);
