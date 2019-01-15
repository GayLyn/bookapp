import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TocPage} from '../pages/toc/toc';
import { ChapterOnePage} from '../pages/chapter-one/chapter-one';
import { ChapterTwoPage} from '../pages/chapter-two/chapter-two';
import { ChapterThreePage} from '../pages/chapter-three/chapter-three';
import { ChapterFourPage} from '../pages/chapter-four/chapter-four';
import { ChapterFivePage} from '../pages/chapter-five/chapter-five';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    HomePage,
    TocPage,
    ChapterOnePage,
    ChapterTwoPage,
    ChapterThreePage,
    ChapterFourPage,
    ChapterFivePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    HomePage,
    TocPage,
    ChapterOnePage,
    ChapterTwoPage,
    ChapterThreePage,
    ChapterFourPage,
    ChapterFivePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
