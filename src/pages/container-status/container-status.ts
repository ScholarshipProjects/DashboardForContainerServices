import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-container-status',
  templateUrl: 'container-status.html'
})
export class ContainerStatusPage {

  containers: any = [
    {
      name: "DashF0",
      server: "EUNE",
      uptime: "59h",
      address: "192"
    }, {
      name: "DashF1",
      server: "JP",
      uptime: "32h",
      address: "111"
    }, {
      name: "DashF2",
      server: "RU",
      uptime: "64h",
      address: "14"
    }, {
      name: "DashF3",
      server: "US",
      uptime: "93h",
      address: "66"
    }, {
      name: "DashF0",
      server: "EUNE",
      uptime: "62h",
      address: "24"
    },
    {
      name: "DashF0",
      server: "EUNE",
      uptime: "59h",
      address: "192"
    }, {
      name: "DashF1",
      server: "JP",
      uptime: "32h",
      address: "111"
    }, {
      name: "DashF2",
      server: "RU",
      uptime: "64h",
      address: "14"
    }, {
      name: "DashF3",
      server: "US",
      uptime: "93h",
      address: "66"
    }, {
      name: "DashF0",
      server: "EUNE",
      uptime: "62h",
      address: "24"
    },
  ];

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["EUW", "EUNE", "JP", "RU", "US", "CN"],
        datasets: [{
          label: 'Total # of containers',
          data: [12, 19, 3, 15, 6, 13],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }
}