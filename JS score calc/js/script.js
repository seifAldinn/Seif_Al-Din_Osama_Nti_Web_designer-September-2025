
var score = prompt("inter your score")
if(score === "" || score === null || score.trim() === ""){
    console.log("invalid: empty entry")
}
else if( score > 100 ){
    console.log("invalid score")
}
else if( score >= 90 ){
    console.log("A")
}
else if( score >= 80 ){
    console.log("B")
}
else if( score >= 70 ){
    console.log("C")
}
else if( score >= 60 ){
    console.log("D")
}
else if( score >= 50 ){
    console.log("E")
}
else if ( score < 50 ){
    console.log("F")
}
else{
    console.log("invalid")
}















