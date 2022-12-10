
// //   1- MASALA 

function Total(numbers) {   
   let  result = [] ;
    let negatives = [];
    let plus = []
    var sum = 0;
    let min = 0 ;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            min += numbers[i]
            negatives.push(min);
        } else {
            sum += numbers[i];
            plus.push(sum)
        }
    }
    let minn = negatives.pop();
    console.log(`Arraydagi manfiy sonlar yig'indisi ${minn} ga teng`);
     let plusN = plus.length;
     console.log(`Arrayda ${plusN} ta musbat son bor`);
      result.push(plusN , minn);
      console.log(result);
}
  Total([15,-10, 21, 45,-54,-12]);

 


// 2-masala POLINDROM SON

function polinumber(number) {
   // number = 121
    console.log(number);
 arr = [];
   let son = number.toString() ;
    let natija = son.split("") ;
        console.log(natija);
    
    let  result = natija.reverse()
    let res = result.join("");
    let last = Number(res)
 
    if (last === number) {
        console.log("ishladi");
         return true
    }else{
        console.log("ishlamadi");
  
    }

}
polinumber(124);




// //3 - MASALA KABISA YILI MASALASI
 
function kabisa (year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(" Bu yil kabisa yili");
       return ` ${year} kabisa yili `  
    } else   {
        console.log(" Bu yil kabisa yili emas");
           return ` ${year} kabisa yili emas`
    }
}
kabisa (4) ; 

//  //4 - MASALA

 function NegativeNumbers(numbers) {   
    let negatives = [];

    let min = 0 ;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            min = numbers[i]
            negatives.push(min);
        }  
    }
    console.log(negatives);
   
}
  NegativeNumbers([15,-10, 21, 5, 45,-54,-12]);







 