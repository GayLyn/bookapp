import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { HomePage } from '../home/home'; */

@IonicPage()
@Component({
  selector: 'page-chapter-five',
  templateUrl: 'chapter-five.html',
})
export class ChapterFivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* goHome() {
    this.navCtrl.push(HomePage);
    } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterFivePage');
  }

}
