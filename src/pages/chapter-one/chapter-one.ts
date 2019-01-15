import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterTwoPage } from '../chapter-two/chapter-two';

@IonicPage()
@Component({
  selector: 'page-chapter-one',
  templateUrl: 'chapter-one.html',
})
export class ChapterOnePage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }
  goChapterTwo() {
      this.navCtrl.push(ChapterTwoPage);
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterOnePage');
  }

}
