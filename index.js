function sum(...args) {
    if(args.length === 0) {
        return "sum invoke without arguments"
    }
    else if(args.length === 1){
        return "sum functions need atleast 2 arguments"
    }
    // a = Number(a);
    // b = Number(b);
    // let result = Number((a+b).toFixed(1));

    const sumValue = [...args].reduce((a,c) => a + Number(c), 0)
    return Number(sumValue.toFixed(1));
};


module.exports = sum;