import { Report } from './report';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  report: Report;
  public students = [];
  public nominatedCount = 0;
  public participatedCount = 0;
  public qualifiedCount = 0;
  public winnersCount = 0;
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getReports()
      .subscribe((reportData) => {
        this.students = reportData;
        // console.log(this.students);

        for (let i = 0; i < this.students.length; i++) {
          this.report = this.students[i];
          let nominatedValue = this.report.nominated;
          let participatedValue = this.report.participated;
          let qualifiedValue = this.report.qualified;
          let winnerValue = this.report.winners;
          if (nominatedValue != null) {
            this.nominatedCount++;
          }
          if (participatedValue != null) {
            this.participatedCount++;
          }
          if (qualifiedValue != null) {
            this.qualifiedCount++;
          }
          if (winnerValue != null) {
            this.winnersCount++;
          }
        }

        // Global options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        let myChart = new Chart("myChart", {
          type: 'pie',
          data: {
            labels: ['Nominated', 'Participated', 'Qualified', 'Winners'],
            datasets: [{
              label: 'Students',
              data: [this.nominatedCount, this.participatedCount, this.qualifiedCount, this.winnersCount],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
              ],
              borderWidth: 1,
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
              ],
              hoverBorderWidth: 3,
              hoverBorderColor: '#000'
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: 'Cultural Activities Report',
              position: 'top',
              fontSize: 25
            },
            legend: {
              position: 'right',
              labels: {
                fontColor: '#000'
              }
            },
            layout: {
              padding: {
                left: 0,
                right: 20,
                bottom: 10,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            },
            plugins: {
              labels: {
                render: 'value',
                fontColor: '#000',
                fontStyle: 'bold',
                position: 'border'
              }
            }
          }
        })
      });
  }

}
