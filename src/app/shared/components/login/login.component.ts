import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  constructor(private auth: AngularFireAuth) {

  }

  ngOnInit(): void {
  }
  async signIn() {
    try {
      let userCred = await this.auth.createUserWithEmailAndPassword(
        this.email as string, this.password as string
      )
      console.log(userCred);
      localStorage.setItem('userdeatails', JSON.stringify(userCred))

    } catch (e) {
      alert(e);
      return
    }
  }
}
