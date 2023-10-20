import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  recover() {
    // Simulate password recovery by logging the email and new password
    console.log('Email:', this.email);
    console.log('New Password:', this.password);

    // Display an alert indicating success (replace with actual reset email logic)
    this.presentAlert(
      'Password Recovery',
      'Password recovery successful. Check your email for instructions.'
    );

    // Reset the form
    this.email = '';
    this.password = '';
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  login() {
    this.router.navigate(['login']);
  }

  ngOnInit() {}
}
