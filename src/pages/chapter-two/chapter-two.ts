import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { ChapterThreePage } from '../chapter-three/chapter-three'; */ 

@IonicPage()
@Component({
  selector: 'page-chapter-two',
  templateUrl: 'chapter-two.html',
})
export class ChapterTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   /* goChapterThree() {
    this.navCtrl.push(ChapterThreePage);
    } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterTwoPage');
  }

}
