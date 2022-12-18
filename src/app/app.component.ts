import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appSideMenu :any=[];
  constructor( private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
      this.initializeApp();
    }
    initializeApp(){
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  sideMenuFunc(){
    this.appSideMenu=[
      {
        title:"Login",
        url:'login',
        ionicIcon: 'log-in-outline'
      }
    ];
  }
}
