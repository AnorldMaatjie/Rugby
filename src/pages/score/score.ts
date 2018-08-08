import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import arryName from '../../app/arryName';
import {Details} from '../../app/class';
import { HomePage } from '../home/home';


/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  team;
  homescore=0;
  awayscore=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
   
  }

  team1=arryName[0].Home;
  team2=arryName[0].Away;
  test=arryName;
  trackScore=[];
  trackTeam=[];

  box(num){
   this.team=num;

  }
  tryScore (){





     if(this.team==1){
       this.homescore+=5
       this.trackTeam.push[1]
       this.trackScore.push["try"]
     }
     else{
      this.awayscore+=5
      this.trackTeam.push[1]
      this.trackScore.push["tryScore"]
     }
}
conversion (){

  if(this.team==1){
    this.homescore+=2
  }
  else{
   this.awayscore+=2
  }
}
  penalty (){

    if(this.team==1){
      this.homescore+=3
    }
    else{
     this.awayscore+=3
    }
}
drop (){

  if(this.team==1){
    this.homescore+=3
  }
  else{
   this.awayscore+=3
  }
}


// tryScoreUndo(){

//   if(this.team==1){
//     this.homescore-=5

//     if(this.homescore < 0){
//       this.homescore = 0;
//     }
//   }
//   else{
//    this.awayscore-=5

//    if(this.awayscore < 0){
//     this.awayscore = 0;
//   }
//   }
// }

tryScoreUndo(){
  if (this.team == 1){

    for (var x = 0; x < this.trackScore.length; x++){
      if (this.trackTeam[x] == 1 && this.trackScore[x] == "try")
      {
         this.homescore = this.homescore - 5;
         this.trackScore.splice(x,1);
         this.trackTeam.splice(x,1);
         break;
      }
      else if (x == this.trackScore.length - 1)
      {
          const alert = this.alertCtrl.create({
            title: "No try has been added on the team",
            buttons: [{ text:'OK'}]
          });
          alert.present();
      }
    }
    if (this.homescore < 0)
    this.homescore = 0;
  }
  else{
    for (var x = 0; x < this.trackScore.length; x++){
      if (this.trackTeam[x] == 2 && this.trackScore[x] == "try")
      {
        this.awayscore = this.awayscore - 5;
        this.trackScore.splice(x,1);
         this.trackTeam.splice(x,1);
         break;
      }
      else if (x == this.trackScore.length - 1)
      {
        const alert = this.alertCtrl.create({
          title: "No try has been added on the team",
          buttons: [{ text:'OK'}]
        });
        alert.present();
      
      }
    if ( this.awayscore < 0)
    this.awayscore = 0;
  }
}
}
conversionUndo(){

  if(this.team==1){
    this.homescore-=2
    
    if(this.homescore < 0){
      this.homescore = 0;
    }
    
  }
  else{
   this.awayscore-=2
   if(this.awayscore < 0){
    this.awayscore = 0;
  }
  }
}
penaltyUndo(){

  if(this.team==1){
    this.homescore-=3
    if(this.homescore < 0){
      this.homescore = 0;
    }
    
  }
  else{
   this.awayscore-=3
   if(this.awayscore < 0){
    this.awayscore = 0;
  }
  }
}
dropUndo(){

  if(this.team==1){
    this.homescore-=3
    if(this.homescore < 0){
      this.homescore = 0;
    }
    
  }
  else{
   this.awayscore-=3
   if(this.awayscore < 0){
    this.awayscore = 0;
  }
  }
}
reset(){


  const confirm = this.alertCtrl.create({
    title: 'confirm REST?',
    message: 'Do you want to RESET the score ?',
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
          this.test=[];
          this.team=0;
          this.navCtrl.push(HomePage)

          console.log('Agree clicked');
        }
      }
    ]
  });
  confirm.present();

}
}



