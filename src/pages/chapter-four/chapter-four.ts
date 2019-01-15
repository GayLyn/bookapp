import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { ChapterFivePage } from '../chapter-five/chapter-five'; */

@IonicPage()
@Component({
  selector: 'page-chapter-four',
  templateUrl: 'chapter-four.html',
})
export class ChapterFourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* goChapterFive() {
    this.navCtrl.push(ChapterFivePage);
    } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterFourPage');
  }

}
