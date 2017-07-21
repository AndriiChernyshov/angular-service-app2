import { Inject, Component, ReflectiveInjector, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-demo-injector',
  templateUrl: './user-demo-injector.component.html',
  styleUrls: ['./user-demo-injector.component.css']
})
export class UserDemoInjectorComponent implements OnInit {
  userName: string;
//  userService: UserService;

  constructor(@Inject('API_URL') apiUrl: string, private userService: UserService) { 
  //  const injector : any = ReflectiveInjector.resolveAndCreate([UserService]);

   // this.userService = injector.get(UserService);
   console.log(apiUrl);
  }

  ngOnInit() {
  }

  public signIn(): void{
    this.userService.setUser({
      name: 'Test User2'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }

}
