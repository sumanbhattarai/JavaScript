
              /*
              John and his family went to a holiday and
              went to 3 diff hotels. The bills are 
              $124 ,$48 and $268.

              To tip the waiter a fair amount, John created 
              a simple tip calculator (as a function). He likes
              to tip 20% of the bill when the bill is less than $50,
              15% when the bill is between $50 and $200 and 10% if the
              bill is more than $200 .

              In the end , John would like to have 2 arrays:
              1) Containing all three tips (one for each bill).
              2) Containing all three final paid amounts (bill + tips).
              
              */

              function tips(amount)
              {
                  if(amount<50)
                  {
                      return amount*0.2 ;
                  }
                  else if(amount>50 && amount<200)
                  {
                      return amount*0.15 ;
                  }
                  else
                  {
                      return amount*0.1 ;
                  }
              }

              console.log('In first hotel he pays ' + tips(124) + ' as a tip.');
              console.log('In second hotel he pays ' + tips(48) + ' as a tip.');
              console.log('In third hotel he pays ' + tips(268) + ' as a tip.');


              var tipsArray = new Array(tips(124) , tips(48) , tips(268));
              var finalPaid = new Array(tips(124)+124 , tips(48)+48 , tips(268)+268);
              console.log(tipsArray);
              console.log(finalPaid);


