import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  currentDate  = new Date()
  private timerId: any;

  ngOnInit(): void {
    
    this.timerId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  

}
