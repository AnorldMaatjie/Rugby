import { Component } from '@angular/core';
import { NavController ,AlertController   } from 'ionic-angular';
import {Details} from '../../app/class';
import arryName from '../../app/arryName';
import { ScorePage } from '../score/score';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  signIn(Home,Away){


    
  

      const confirm = this.alertCtrl.create({
        title: 'CONFIRM NAMES',
        message: 'Do you ADD the name?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              let object=new Details(Home,Away);
              if(object!=null){
                arryName.push(object);
                console.log(arryName);
                this.navCtrl.push(ScorePage);
              }
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();

    
  }




  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  
  }
}
