console.log("----------------Calishma 1------------------");

var numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.length);


console.log("----------------Calishma 2------------------");

var numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.length);



console.log("----------------Calishma 3------------------");

var maxim = [2,3,4,55,78,34,12];
var swapped;
var swapped = true;

while (swapped) {
    swapped = false;
for (i =0; i<maxim.length; i++) {
    if (maxim[i] > maxim[i+1]) {
       var a = maxim[i];
        maxim[i] = maxim[i+1];
        maxim[i+1] = a;
        swapped = true;
    }
    
}

}
 
   console.log(Math.max(...maxim))


    console.log("----------------Calishma 4------------------");

var reqems = [2,43,76,897,12,3,45];

console.log(Math.min(...reqems));


console.log("----------------Calishma 5------------------");



  var faktorial = function(eded) {
    var netice = 1;
    var count;
    for (count = eded; count > 1; count--) {
      netice *= count;
    }
    return netice;
  };
  console.log(faktorial(9));



  console.log("----------------Calishma 5------------------");

  var ededs = [7,10,9,11,23,45]
  
  var siralama = true;

  while (siralama) {

    siralama = false;

    for (i = 0; i<ededs.length; i++) {
        if (ededs[i] > ededs[i+1]) {
            var tmp = ededs[i]
            ededs[i] = ededs[i+1]
            ededs[i+1] = tmp;
            i++
            siralama = true;
        }
    }
    console.log(ededs[ededs.length -1] * ededs[ededs.length - 2])
  }


  console.log("----------------Calishma 6------------------");

  var sira = [1,2,3,4,5,6,7,8,9,10]
  var tek;
  var cem;

  for (i = 1; i<=sira.length; i++) {
      if (i%2==0) {
          var cem = i;
          console.log('cem olanlar' + cem)
       
      }
      else {
          var tek = i;
          console.log('tek olanlar' + tek)
        
      }
    
  }
  