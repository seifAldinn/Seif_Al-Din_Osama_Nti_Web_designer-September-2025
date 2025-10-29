





select= prompt( "enter your course name (html , css ,js , react ,node)" ) 
var courses= ["html" , "css ", "js" , "react" , "node"]

 console.log(courses)

 let position = courses.includes(select ) ;

if(position){
    console.log("your course is available")
 
}else {
    courses.push(select)
    console.log(courses)
}






