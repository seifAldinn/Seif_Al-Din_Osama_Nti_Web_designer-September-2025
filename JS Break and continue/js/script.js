





function myf(sNum, eNum, con, bnum ) {
    for (var r = sNum; r <= eNum; r++) {

       
        if (r === con) {
            continue;
        }

        if (r === bnum) {
            break;
        }

        console.log(r); 
    }
}
myf(0, 20, 9, 17);










