

 const sumValue = [1,2, "3"].reduce((a,c) => {
    console.log("c is", c, "Acc",a);
    return a + Number(c);
 }, 0);

 console.log(sumValue);