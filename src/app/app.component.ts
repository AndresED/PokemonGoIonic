import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  picture:string;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private cameraPreview: CameraPreview) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let tapEnabled: any = false;
      let dragEnabled: any = false;
      let toBack: any = true;
      let alpha = 1;
      let rect: any = {
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height()
      };
      const pictureOpts: CameraPreviewPictureOptions = {
        width: 1280,
        height: 1280,
        quality: 85
      }
      this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
        this.picture = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err);
        this.picture = 'assets/img/test.jpg';
      });

      /*cameraPreview.startCamera(
        rect,
        'rear',
        tapEnabled,
        dragEnabled,
        toBack,
        alpha
      );*/
    });
  }
}

