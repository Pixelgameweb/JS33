// 1 задание
// let city_li = document.querySelectorAll('li');
// let city_es = []; 
// city_li.forEach(city_li => {city_es.push(city_li.textContent)});
// let json = JSON.stringify({ city_es });
// console.log(json);

// 2 задание
let json1 = '["user1","user2","user3","user4","user5"]'; 
let Javajson = JSON.parse(json1);
Javajson.push("user6");
console.log(Javajson)

//3 задание
// let json3 = `[     
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
//     {
// 		"name": "user4",
// 		"age": 28,
// 		"salary": 4000
// 	}
// ]`;

// 4 задание

// let json4 = '["user1","user2","user3","user4","user5"]'; 
// let user = JSON.parse(json4);
// document.write('<ul>');
// user.forEach(user => {document.write(`<li>${user}</li>`)});
