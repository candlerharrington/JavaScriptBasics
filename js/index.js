window.onload = function()
{
    document.getElementById('btnShow').addEventListener('click', showMe, false);
    
    document.getElementById('btnAdd').addEventListener('click', addNumbers, false);
    
    var btn = document.createElement('button');
    var text = document.createTextNode("CLICK ME");
    btn.appendChild(text); 
    document.body.appendChild(btn);
};  
function showMe()
{
    alert("You've been shown!");
}
function testJS()
{
    //alert('Testing JS');
    
    var text = "ABCD";
    var strLength = text.length;
    
    //alert(text.length);
    
    var pos = text.search("B");
    //alert("Position of B: " + pos);

    var values = ["Volvo", "Saab", "Fiat"];
    //alert(values[0]);
    //console.log("Array testing: " + values[0]);
    
    var result = "";
    var foods = ['Apples', 'Bananas', 'Oranges'];
    
    for(var i in foods)
        {
            if(foods[i]=='Apples')
                result += foods[i] + " are good. ";
            else
                result += foods[i] + " are OK. ";
        }
    //alert(result);
    
    var count = 0;
    for(var i=0; i<foods.length; i++)
        {
            if(foods[i] != "Apples")
                count++;
        }
    //console.log("Count of non Apples: " + count);
    /*
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "Blue"
    };
    console.log("Full Name: " + person.firstName + ' ' + person.lastName);
    */
    
    var myFather = new person("James", "Harrington", 55, "Blue");
    var myMother = new person("Clara", "Guy Harrington", 53, "Blue");
    
    //display(myFather);
    //display(myMother);
    
    var result = "";
    for(var field in myMother)
        {
            result += "myMother." + field + ": "+ myMother[field] + "<br> ";
        }
    //console.log(result); 
    
    var text = '{"employees" :[' + 
        '{"firstName":"John", "lastName":"Doe"},' +
        '{"firstName":"Anna", "lastName":"Smith"},' +
        '{"firstName":"Peter", "lastName":"Jones"}]}';
    
    var obj = JSON.parse(text);
    //console.log("Second employee: " + obj.employees[1].firstName + " " + obj.employees[1].lastName);
    //document.getElementById("demo").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;
    
   // for(var i=0; i<obj.employees.length; i++)
   //    {
   //       console.log("Employee " + i + ": " + obj.employees[i].firstName + " " + obj.employees[i].lastName)
   //    }
    
    var myInputs = document.getElementsByTagName("input");
    
    console.log("Number of input elements: " + myInputs.length);
    myInputs[1].style.backgroundCoolor="red";
    
    var demo = document.getElementById('demo');
    demo.innerHTML = "HELLO";
    
    var img = document.getElementById("myImage");
    if(img.src.match('go'))
        img.src = "img/stop.jpeg";
    else
        img.src = "img/go.jpeg";
    
    var myDiv = document.getElementById('content');
    //myDiv.innerHTML = "Georgia College";
    
    var theElements = myDiv.getElementsByClassName('large');
    theElements[0].innerHTML = "Georgia College";
}
function person(first, last, age, eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
function display(obj)
{
    console.log("Full Name: " + obj.firstName + ' ' + obj.lastName);
}
function addNumbers()
{
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');
    
    result.value = parseInt(num1.value) + parseInt(num2.value);
}




