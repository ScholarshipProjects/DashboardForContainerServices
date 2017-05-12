import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  services: string = "ghost";
  cores: string = "core1";
  ram: string = "4096";
  disk: string = "50";
  server: string = "eune";
  constructor(public navCtrl: NavController) {

  }

}
