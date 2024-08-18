
let username = prompt("Pls Enter Your Username")
let age = Number(prompt("How Old Are You?"))
let country = prompt("Pls Enter Your Country").toLowerCase().trim()

if((age >= 18) && (country === "nigeria")){
   alert(username + ", YOU ARE ELIGIBLE TO VOTE!")
   alert("PLS VOTE WISELY")
}

else{
   if(age < 18 && country !== "nigeria"){
       alert(username + ", You Are Not Eligible To Vote Because You Are Underage, And You Are Not A citizen Of Nigeria. Keep Praying For The Country")
   }
   else if(country !== "nigeria"){
       alert(username + ", You Are Not Eligible To Vote Because You Are Not A Citizen Of Nigeria. Pls Stop Meddling In Our Situation")
   }
   else{
       alert(username + ", You Are Not Eligible To Vote Because You Are Underage, Keep Praying For The Country")
   }
}