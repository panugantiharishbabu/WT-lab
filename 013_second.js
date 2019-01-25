/*exported rangebetween*/
/*eslint-env browser*/
/*eslint no-console:0*/
'use strict';

function rangebetween(a, b) {

    var k = new Array();
    var c=a;
    for (var i = 0;i<=(b - a); i++) {
        k[i] = c;
        c++ ;
    }
    return k;
}
