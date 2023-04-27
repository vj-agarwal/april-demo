import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  result:string="";
  flag:boolean=false;
  constructor(public loginSer:LoginService) { }
  ngOnInit(): void {}

  checkUser() {
    let login = this.loginRef.value;
      this.loginSer.checkUser().subscribe(result=> {arguments   
        let leng = result.length;
        let flag = 0;
        for(let i=0;i<leng;i++){
              if(result[i].email==login.email && result[i].password==login.password){
                    flag++;
                    break;
              }
        }
        if(flag>0){
            console.log("Successfully Login ");
            this.flag=true;
          this.result="Login Successful"
        }else {
            console.log("Failure try once again");
            this.flag=true;
            this.result="Login Failure"
        }
      })
    }
}
