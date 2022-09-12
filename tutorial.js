 const sum = (a,b)=>{
    return (a+b);

}

const po = 3.141592653589793238462643383279502884197169399375857;

class Stream{
    constructor(){
        console.log("Stream constructor"); 
    }
}
module.exports.sum = sum;
module.exports.po = po;
module.exports.Stream = Stream;


