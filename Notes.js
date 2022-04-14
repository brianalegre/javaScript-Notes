// Types of Variables
// Number
    var number = 1;

// Undefined
    var undefinedd;
    // Variable exist, but has no value assigned
    // Mispelled word on purpose

// String
    var string = "Class Reivew";
    // Each string index value is in a '' or "" or ``

// Boolean
    var boolean = true;
    // Returns a True or False value
    // 1 is Truthy, or any number other than 0
    // 0 is Falsey



// Scope Stuff, lol
    console.log(test);
    var test = "Will this log";
    // Console.log will return undefined
    // test is not defined/activate before it is called


// Reassigning global variables in a function
    var testVar;
    // testVar has no value defined
    function reviewFunction() {
        testVar = true;
    }

    reviewFunction()
    console.log(testVar)
    // testVar logs true, because reviewFunction is called, and changes the global var testVar

// Function Parameters
    function reviewFunction(myParameter) {
        // myParameter can be any name
        console.log(myParameter)
    }

    reviewFunction("My Message passes to myParameter")
    // Console.log will display "My Message passes to myParamenter"


// Using Return in Functions Example 1
    function reviewFunction(myParameter) {
        // myParameter can be any name
        return myParameter
    }
    var myReturn = reviewFunction("myArgument");
    // myReturn is set to to whatever reivewFunction RETURNS
    console.log(myReturn);
    // Console.log retruns "myArgument"


//  Using Return in Functions Example 2
    function doMath (myParamenter, myParamenter2) {
        return myParamenter * myParamenter2;
    }
    console.log(doMath(2, 4))
    // Calling the doMath function
    // 2 is getting passed to myParameter
    // 4 is getting passed to myParameter2
    // console.log displays 8
    

//  Assigning 3 myParameters, but only using 2
    function doMath (myParamenter, myParamenter2, myParamenter3) {
        return myParamenter * myParamenter2;
    }
    console.log(doMath(2, 4))
    // Calling the doMath function
    // 2 is getting passed to myParameter
    // 4 is getting passed to myParameter2
    // console.log displays 8
    // Function still works


// Objects
// Everything in JS is essential an object
    var obj = {
        
    }
    // Objects are created by declaring the variable then using the curly brackets { }


// Object Key Value pairs
    var obj = {
        hairColor: "brown",
        // Need the comma to assign the next Key Value pair
        eyes: "blue",
        // Eyes is the Key
        // Blue is the Value
        // They are a Pair
        food: {
            hamburger: "double",
            pasta: "alfredo"
        }
        // Objects can also be assigned as Key Value pairs
    }

// To access Object KEY Properties
    var obj = {
        hairColor: "brown",
        eyes: "blue",
        "count-dracula": "vampire",
        // Can assign the keyName with "" 
        food: {
            hamburger: "double",
            pasta: "alfredo"
        },
        things: ["ball", "red"]
        
    }
    console.log(obj.eyes)
    // Console.log will display blue
    // Dot notation

    console.log(obj.things[0]);
    // Console.log will display ball
    // This is calling in an array
    // Bracket notation

    console.log(obj.food["pasta"])
    // Console.log will display alfredo


// Accessing KEYS/Properties in an Object
    var foodObj = {
        steak: "foodSteak",
        pizza: "foodPizza",
        taco: "foodTaco",
        burrito: "foodBurrito"
    }

    var keys = Object.keys(foodObj)
    console.log(keys);
    // Returns the keyNames as an ARRAY
    // ['steak', 'pizza', 'taco', 'burrito']

    var values = Object.values(foodObj);
    console.log(values)
    // Returns the valueNames as an Array
    // ['foodSteak', 'foodPizza', 'foodTaco', 'foodBurrito']

    var properties = Object.entries(foodObj);
    console.log(properties)
    // Returns the Key Value Pair in an array
        // 0: (2) ['steak', 'foodSteak']
        // 1: (2) ['pizza', 'foodPizza']
        // 2: (2) ['taco', 'foodTaco']
        // 3: (2) ['burrito', 'foodBurrito']

    for (var i = 0; i < keys.length; i++) {
        foodObj[keys[i]] = "poop"
        console.log(foodObj[keys[i]])
    }



