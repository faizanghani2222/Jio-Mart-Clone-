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

                alert("user registered succesfully")
                document.querySelector("#signup-div").style.display="none";
                document.querySelector("#login-div").style.display="block";
                userdata.push(this)
                localStorage.setItem("user",JSON.stringify(userdata))
                // window.location.href="login.html"
                // console.log(userdata)
               
            }
            else{
                alert("Email already registered go to login page")
                document.querySelector("#signup-div").style.display="none";
                document.querySelector("#login-div").style.display="block";
            }

        }
        validateemail(email){
            
           let ans = userdata.filter((el)=>{
                 return el.email===email
           })
           if(ans.length>0){
            return false
           }
           else{
            return true
           }
        }
        validatepassword(password){
            if(password.length>5){
                return true
            }
            else{
                return false
            }
           
        }


        
    }

    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault()
        let name = document.querySelector("#name").value
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        let s1=new user ()
         s1.signup(email,password,name)
        
        
    })

    // let userlogindata= JSON.parse(localStorage.getItem("user"))||[]

    // console.log(userlogindata)

    class userlogin{
        constructor(){

        }

        login(email1,password){
            console.log(email1,"l")
           let ans= userdata.filter((el)=>{
               return el.email==email1
            })
            console.log(ans)
            if(ans.length>0){
            alert("Login succesfull")
            // window.location.href=""
            }
            else{
                alert("This email does not registered go to sign-up page")
                document.querySelector("#login-div").style.display="none";
                document.querySelector("#signup-div").style.display="block";

            }
        }
    }

    document.querySelector("#login-form").addEventListener("submit",(e)=>{
        e.preventDefault()
       
        let email1 = document.querySelector("#login-email").value
        console.log(email1,"login")
        let password = document.querySelector("#login-password").value
        let s2=new userlogin ()
         s2.login(email1,password)
        
        
    })