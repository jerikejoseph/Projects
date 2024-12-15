


document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log("hii");
    const name=document.getElementById("name").value
    const age=document.getElementById("age").value
    const dob=document.getElementById("dob").value
    const phone=document.getElementById("phone").value
    const place=document.getElementById("place").value
    const Bgroup=document.getElementById("Bgroup").value
    console.log(name,age,dob,phone,place,Bgroup);
    

    await fetch("http://localhost:3000/api/adddonor",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,phone,place,Bgroup}),
    }).then((res)=>{
        console.log(res);
        
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"

        }
        else{
            alert("Failed")
        }
    }).catch((error)=>{
        
        console.log(error);
        
    })
    
    
    

})



// validation

function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{9}/
    console.log(regEx.test(phone));
    
    if ((regEx.test(phone))){
        document.getElementById("phn").textContent=""
    }
    else{
        document.getElementById("phn").textContent="Phone Number Is Invalid"
        document.getElementById("phn").style.color="red"
        document.getElementById("phn").style.fontSize=12+"px"
        document.getElementById("phn").style.fontWeight="bold"




    }
    document.getElementById("phone").addEventListener("keyup", function() {
        if (document.getElementById("phone").value== "") {
            document.getElementById("phn").textContent = "";
        }
    });



}

function validateAge(age){
    let regEx=/^[2-7][0-9]|[1][8-9]/
    if (!(regEx.test(age))){
        document.getElementById("ageV").textContent="Not Eligible"
        document.getElementById("ageV").style.color="red"
        document.getElementById("ageV").style.fontSize=12+"px"
        document.getElementById("ageV").style.fontWeight="bold"


    }
    else{
        document.getElementById("ageV").textContent=""

    }

    document.getElementById("age").addEventListener("keyup", function() {
        if (document.getElementById("age").value== "") {
            document.getElementById("ageV").textContent = "";
        }
    });

}



function validateName(name){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(name))){
        document.getElementById("nameV").textContent="Invalid"
        document.getElementById("nameV").style.color="red"
        document.getElementById("nameV").style.fontSize=13+"px"
        document.getElementById("nameV").style.fontWeight="bold"
        document.getElementById("nameV").style.display="block"
    }
    else{
        document.getElementById("nameV").textContent=""
        document.getElementById("nameV").style.display="none"



    }
    document.getElementById("name").addEventListener("keyup", function() {
        if (document.getElementById("name").value== "") {
            document.getElementById("nameV").textContent = "";
        }
    });


}
function validatePlace(place){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(place))){
        document.getElementById("placeV").textContent="Invalid"
        document.getElementById("placeV").style.color="red"
        document.getElementById("placeV").style.fontSize=13+"px"
        document.getElementById("placeV").style.fontWeight="bold"


    }
    else{
       document.getElementById("placeV").textContent=""

    }

    document.getElementById("place").addEventListener("keyup", function() {
        if (document.getElementById("place").value== "") {
            document.getElementById("placeV").textContent = "";
        }
    });
    
}
function validateDOB(dob){
    // console.log(dob);
    let regEx=/^([1][9]\d{2}|[2][0][0][0-6])-([0][1-9]|[1][0-2])-([0][1-9]|[1-2]\d|[3][1-2])$/
    if (!(regEx.test(dob))){           
        document.getElementById("dobV").textContent="Not Eligible"
        document.getElementById("dobV").style.color="red"
        document.getElementById("dobV").style.fontSize=13+"px"
        document.getElementById("dobV").style.fontWeight="bold"


    }
    else{
        document.getElementById("dobV").textContent=""
      

    }
    document.getElementById("dob").addEventListener("onchange", function() {
        if (document.getElementById("dob").value== "") {
            document.getElementById("dobV").textContent = "";
        }
    });
}












