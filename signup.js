import mynav from "./navbar.js"
document.querySelector("#mynav").innerHTML=mynav()
let userdata= JSON.parse(localStorage.getItem("user")) || []
    class user{
       
        constructor(){
          
        }

        signup(email,password,name){
            //validation of username & password as per rules
            
            let isvalidated=false
            // validating of username & password methods

            isvalidated=this.validateemail(email) && this.validatepassword(password)
             
            if(isvalidated==true){
                this.email=email
                this.password=password
                this.name = name

                alert("User registered succesfully")
                document.querySelector("#signup-div").style.display="none";
                document.querySelector("#login-div").style.display="block";
                userdata=this
                localStorage.setItem("user",JSON.stringify(userdata))
                // window.location.href="login.html"
                // console.log(userdata)
               
            }
            else{
                alert("This email is already registered with us go to login page")
                document.querySelector("#signup-div").style.display="none";
                document.querySelector("#login-div").style.display="block";
            }

        }
        validateemail(email){
            return true
        //    let ans = userdata.filter((el)=>{
        //          return el.email===email
        //    })
        //    if(ans.length>0){
        //     return false
        //    }
        //    else{
        //    
        //    }
        }
        validatepassword(password){
            if(password.length>0){
                return true
            }
            else{
                return false
            }
           
        }


        
    }

    document.querySelector("#signupform").addEventListener("submit",(e)=>{
        e.preventDefault()
        let name = document.querySelector("#sname").value
        let email = document.querySelector("#semail").value
        let password = document.querySelector("#spassword").value
        let s1=new user ()
         s1.signup(email,password,name)
        
        
    })

    // let userlogindata= JSON.parse(localStorage.getItem("user"))||[]

    // console.log(userlogindata)

    class userlogin{
        constructor(){

        }

        login(email1,password){
          
           if(email1==userdata.email && password==userdata.password){
            alert("Login succesfull")
            window.location.href="index.html"
           }else if(email1==userdata.email && password!=userdata.password){
            alert("Enter Correct Password")
           }
            
            // if(ans.length>0){
            // alert("Login succesfull")
            // window.location.href="index.html"
            // }
            else{
                alert("This email is not registered with us kindly go to sign-up page")
                document.querySelector("#login-div").style.display="none";
                document.querySelector("#signup-div").style.display="block";

            }
        }
    }

    document.querySelector("#login-form").addEventListener("submit",(e)=>{
        e.preventDefault()
       
        let email1 = document.querySelector("#login-email").value
       
        let password = document.querySelector("#login-password").value
        let s2=new userlogin ()
         s2.login(email1,password)
        
        
    })

    function signinp(){
        document.querySelector("#signup-div").style.display="none";
        document.querySelector("#login-div").style.display="block";
    }
    document.querySelector("#signin").addEventListener("click",signinp);
