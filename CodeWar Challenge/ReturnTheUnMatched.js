



/*


You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


*/


/*

function findOutlier(integers){
    var countEven = 0;
    var countOdd = 0 ;
    var outputEven = 0 ;
    var outputOdd = 0 ;
      if(integers.length < 3){
      return false ;
      }
      else {
      for(let i = 0 ; i < integers.length ; i++){
      if(integers[i]%2 == 0){
      outputEven = integers[i] ;
      countEven = countEven + 1 ;
      }
      else {
      outputOdd = integers[i] ;
      countOdd = countOdd + 1;
      
      }
      
      }
      if(countOdd<countEven)
      {
      return outputOdd ;
      }
      else {
      return outputEven ;
      
      }
      }
    }


    */

  console.log(findOutlier([1,1,8,1,1]));



  // Alternate way to do ths .

  function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }