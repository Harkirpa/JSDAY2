  // answer9//
  const add = function(x, y) {
    return x + y;
  }
  
  // passing a function as an argument to another function
  function calculate(operation, x, y) {
    return operation(x, y);
  }
  
  const result = calculate(add, 2, 3);
  
  console.log(result);
  // answer4//
  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle);
  // answer6//
function getUserData(userId, callback) {
    const userData = { name: "abc", age: 20, email: "xyz@example.com" };
    callback(userData);
  }
  
  // Define a callback function to process the user data
  function processUserData(userData) {
    console.log("Name:", userData.name);
    console.log("Age:", userData.age);
    console.log("Email:", userData.email);
  }
  
  getUserData(123, processUserData);
  //5
  let timeout;

  function myFunction() {
    timeout = setTimeout(alertFunc, 3000);
    }
            
   function alertFunc() {
      alert("Hello!");
  }