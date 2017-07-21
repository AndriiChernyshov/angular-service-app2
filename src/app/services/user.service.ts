import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: any;

  constructor() { }

  public setUser(newUser){
    this.user = newUser;
  }

  public getUser():any{
    return this.user;
  }
}
