function getGrade(marks){
 if (marks >= 80){
      console.log("A");
 }else if (70 <= marks && marks <= 79){
     console.log("B");
 }else if (60 <= marks && marks <= 69){
    console.log("C");
}else if (50 <= marks && marks <= 59){
   console.log("D");
}else if (40 <= marks && marks <= 49){
    console.log("E");
 }else {
     console.log("F");
 }
    }
    getGrade(84);
