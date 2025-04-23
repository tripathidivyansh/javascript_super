// for
for(let index = 0; index < 10; index++){
    const element = index;
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);    
}

for(let i = 0; i<=10; i++){
    // console.log(`outer loop value: ${i}`);
    for(let j = 0; j<=10; j++){
        // console.log(`Inner loop value ${j} and inner loop`);
        // console.log(i + '*' + j + ' = ' +  i*j);
        
    }
}

let myarr = ["flash", "batman", "superman"];
for(let i = 0; i<myarr.length; i++){
    const element = myarr[i];
    // console.log(element);
}

// break and continue

for(let i = 1; i<=20; i++){
    if(i == 7){
        console.log(`Detected 7`);
        break;
    }
    console.log(`value of i ${i}`);
    
}
for(let i = 1; i<=20; i++){
    if(i == 7){
        console.log(`Detected 7`);
        continue;
    }
    console.log(`value of i ${i}`);
    
}