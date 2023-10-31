// json
const myObj ={
    name: 'barsen',
    hobbies : ['eat','sleep'],
    hello : function(){
        console.log("hello");
    }
};
console.log(myObj);
myObj.hello();
console.log(typeof myObj);
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON =JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof sendJSON);