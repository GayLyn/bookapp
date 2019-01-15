import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { ChapterFourPage } from '../chapter-four/chapter-four'; */


@IonicPage()
@Component({
  selector: 'page-chapter-three',
  templateUrl: 'chapter-three.html',
})
export class ChapterThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* goChapterFour() {
    this.navCtrl.push(ChapterFourPage);
    } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterThreePage');
  }

}
