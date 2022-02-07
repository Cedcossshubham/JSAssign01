function submitForm(){
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value;
    var age  =document.getElementById("age").value;
    var output ="";
    
    if(isFieldEmpty(name,age,weight))
        output="<p style='color:red;'>Some fields are empty!<p>";
    else{
        output =checkWeight(name,parseInt(age),parseInt(weight));
    }

    displayResult(output);
        

}

//check if the field is empty
function isFieldEmpty(name,age,weight){
    if(name=="" || name==null || weight=="" || weight==null ||  age==""  ||  age==null)
        return true;
    
    return false;
}



//check recommended weight
function checkWeight(name,age,weight){
    
    let result="";

    if(age<5){
        result="<p style='color:red';>Enter age greater than 5!</p>";  
    }

    //for age group 5 - 7
    if(age>=5 && age<=7 )
        if(weight>=15 && weight<=20)
            result =setResult("perfect",name,20,age);
        else if(weight<20) 
            result =setResult("less",name,20,age); 
        else if(weight>20)
            result =setResult("greater",name,20,age);
    

      //for age group 8 -10  
    if(age>=8 && age<=10 ) 
        if(weight>=21 && weight<=25)
            result =setResult("perfect",name,25,age);
        else if(weight<25) 
            result =setResult("less",name,25,age);
        else if(weight>25)
            result =setResult("greater",name,25,age);
 
    //for age group 11 - 15
    if(age>=11 && age<=15 ) 
        if(weight>=26 && weight<=30)
            result =setResult("perfect",name,30,age);
        else if(weight<30) 
            result =setResult("less",name,30,age);
        else if(weight>30)
            result =setResult("greater",name,30,age);

    //for age group 16 - 20
    if(age>=16 && age<=20)
        if(weight>=31 && weight<=40) 
            result =setResult("perfect",name,40,age);
        else if(weight<40) 
            result =setResult("less",name,40,age);
        else if(weight>40)       
            result =setResult("greater",name,40,age);
    return result;
        
} 


//set the output string
function setResult(limit,name,weight,age){
    
    let result ="";

    if(limit=="perfect"){
        result="<p style='color:green';>Hi "+ name + "!!! Your weight is perfect </p>";
    }

    if(limit=="less"){
        result="<p style='color:blue';>Hi "+ name + "!!! Your weight is less than the recommended value of "+weight+" at the age of "+age+"</p>";
    }

    if(limit=="greater"){
        result="<p style='color:red';>Hi "+ name + "!!! Your weight is less than the recommended value of "+weight+" at the age of "+age+"</p>";
    }

    return result;
}



//disply result
function displayResult(output){
    document.getElementById("output").innerHTML = output;
}