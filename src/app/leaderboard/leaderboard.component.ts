import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  standalone: false,
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent {
  allData: any[] = [];
  filteredData: any[] = [];
  activeFilter: string = 'ALL';
  weekTypes: string[] = ['I', 'II', 'III', 'IV', 'ALL'];

  ngOnInit() {
    this.generateData();
    this.filterData('ALL');
  }

  generateData() {
    const weeks = ['I', 'II', 'III', 'IV'];
    for (let i = 0; i < 50; i++) {
      const item = {
        customerId: Math.floor(Math.random() * 10000),
        loginName: 'User_' + Math.random().toString(36).substring(2, 7),
        place: i + 1,
        week: weeks[Math.floor(Math.random() * weeks.length)],
      };
      this.allData.push(item);
    }
  }

  filterData(week: string) {
    this.activeFilter = week;

    if (week === 'ALL') {
      this.filteredData = this.allData;
    } else {
      const weekData = this.allData.filter((item) => item.week === week);

      if (weekData.length < 10) {
        const otherData = this.allData.filter((item) => item.week !== week);

        const needed = 10 - weekData.length;

        const additional = [];
        for (let i = 0; i < needed; i++) {
          const randomIndex = Math.floor(Math.random() * otherData.length);
          additional.push({ ...otherData[randomIndex] });
        }

        this.filteredData = [...weekData, ...additional];
      } else {
        this.filteredData = weekData;
      }
    }
  }
}
