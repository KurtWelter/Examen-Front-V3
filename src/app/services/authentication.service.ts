import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface User {
  email: string;
  password: string;
}
@Injectable()
export class AuthenticationService {
  private local!: Storage;
  public autenticado!: boolean;

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;
  }

  async login(email: string, password: string): Promise<boolean> {
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find(
      (us: User) => us.email === email && us.password === password
    );
    if (user) {
      this.autenticado = true;
      return true;
    }
    this.autenticado = false;
    return false;
  }
}
