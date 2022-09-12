# NodeJS Notes


in node , we dont have window or document objects as it is only provided by browsers.

console.log(window) ----> prodiuces an error.


 Node core

 In node we have global instead of window and document objects.


global.a = "hello"; 
console.log(global.message);

The probem with global scope:
    If we declare a global variable or a fucntion , and we create a new file and decfine the same 
       variable or function with different values or data ,then the new one will override the existing one.

Solution :
    modular fucntion (making functions in small modules).
    Every file in a node application is considered as a module.
    If you want to declare a function as public ,  you have to explicitly declare the function as public.
   
    There is one module called main module in every node application.
