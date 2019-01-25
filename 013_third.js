/* exported frequent */
/*eslint-env browser*/
/*eslint no-console:0*/
/*jshint unused:false*/

function frequent() {
    var a = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8];
    var maxe = 0;
    var maxf=0;
    var c = 0;
    for (var i = 0; i < a.length; i++) {
      for(var j=0;j<a.length;j++){
          if(a[i]==a[j]){
              c++;
              
          }
      }
        if(c>maxf){
            maxf=c;
            maxe=a[i];
        }
        c=0;
    }
    document.writeln(maxe +"has repeated for" + maxf +"times");
}

