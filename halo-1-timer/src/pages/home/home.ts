import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {CommonTimer} from '../utilities/CommonTimer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  minutes:string = '00';
  seconds:string = '00';
  tabBarElement: any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.tabBarElement.style.display = 'none';

  }


  startTimer(timerSeconds: number){
    var self = this;
    var timerInterval = setInterval(function(){
      var timer = new CommonTimer();
      var timeRemaining = timer.getTimeRemaing(timerSeconds);

      self.updateTime(timeRemaining);
    }, 995);
  }

  updateTime(time: any){
    this.minutes = time.minutes;
    this.seconds = time.seconds;
  }

}
