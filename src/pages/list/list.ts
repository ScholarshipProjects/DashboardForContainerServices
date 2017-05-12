import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas1') lineCanvas1;
  @ViewChild('lineCanvas2') lineCanvas2;
  
  
 
    barChart: any;
    doughnutChart: any;
    lineChart: any;
    lineChart1: any;
    lineChart2: any;
    
 
    constructor(public navCtrl: NavController) {
 
    }
    ionViewDidLoad() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00"],
                datasets: [
                    {
                        label: "CPU Load",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 60],
                        spanGaps: false,
                    }
                ]
            }
 
        });
        this.lineChart1 = new Chart(this.lineCanvas1.nativeElement, {
            type: 'line',
            data: {
                labels: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00"],
                datasets: [
                    {
                        label: "Disk Usage",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [20, 10, 13, 9, 9, 12, 12],
                        spanGaps: false,
                    }
                ]
            }
 
        });
        this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
            type: 'line',
            data: {
                labels: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00"],
                datasets: [
                    {
                        label: "Bandwidth",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [725, 412, 5511, 2244, 1411, 5200, 1900],
                        spanGaps: false,
                    }
                ]
            }
 
        });
    }
}
