import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterOnePage } from '../chapter-one/chapter-one';
import { ChapterTwoPage } from '../chapter-two/chapter-two';
import { ChapterThreePage } from '../chapter-three/chapter-three';
import { ChapterFourPage } from '../chapter-four/chapter-four';
import { ChapterFivePage } from '../chapter-five/chapter-five';


@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   launchToc() {
    this.navCtrl.push(TocPage);
  };

  launchChapterOne() {
    this.navCtrl.push(ChapterOnePage);
  };

  launchChapterTwo() {
    this.navCtrl.push(ChapterTwoPage);
  };

  launchChapterThree() {
    this.navCtrl.push(ChapterThreePage);
  };

  launchChapterFour() {
    this.navCtrl.push(ChapterFourPage);
  };

  launchChapterFive() {
    this.navCtrl.push(ChapterFivePage);
  }; 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }

}
