let data= function(){fetch("weather.json")
.then(Response => Response.json())
.then(DataTransfer => {})
.catch(Error => console.log('error'))
}
// let days= data[days][0];
// console.log(days);
// console.log(DataTransfer)