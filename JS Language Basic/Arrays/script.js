
                      //Arrays

                      var names = ['Ram' , 'Shyam' , 'Hari' , 'Geeta'] ;
                      var places = new Array('Bharatpur' , 'Kathmandu' , 'Pokhara');

                      console.log(names[0]);
                      console.log(names.length);

                      places[5] = 'Narayangarh';
                      // Slot 3 and slot 4 are empty.

                      places[1] = 'KTM' ; // It will replace Kathmandu as KTM.

                      console.log(places) ;
                      console.log(places.length);

                      //Different data types

                      var info = ['Suman' , 'Pokhara' , 19] ;
                      console.log(info);

                      //Pushing element to the array.
                      //It will push to end of the array.

                      info.push('Software Engineer');
                      console.log(info);

                      //unshift will push to the front of array.
                      info.unshift('Mr.');
                      console.log(info);

                      //pop will remove the last element of the array.
                      info.pop();
                      console.log(info);

                      //indexOf returns the position of the element on the array.
                      console.log(info.indexOf('Pokhara'));

                      //It will return -1 value of the element is not in the array.
                      console.log(info.indexOf('SB'));



