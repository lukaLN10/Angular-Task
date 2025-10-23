import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-wheel',
  standalone: false,
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css',
})
export class WheelComponent {
  @ViewChild('wheel') wheelRef!: ElementRef<HTMLDivElement>;

  selectedNumber: number | null = null;
  errorMessage = '';
  spinning = false;
  numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  showResult = false;
  resultNumber: number | null = null;

  spin() {
    if (
      !this.selectedNumber ||
      this.selectedNumber < 1 ||
      this.selectedNumber > 10
    ) {
      this.errorMessage = 'აღნიშნული სექტორი ვერ მოიძებნა 😕';
      return;
    }

    this.errorMessage = '';
    this.spinning = true;
    this.showResult = false;

    const fullTurns = 4;
    const sectorAngle = 36;
    const midOffset = 18;

    const wheel = this.wheelRef.nativeElement;

    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(0deg)`;

    setTimeout(() => {
      const targetRotation =
        360 * fullTurns + (this.selectedNumber! - 1) * sectorAngle + midOffset;

      wheel.style.transition = 'transform 4s cubic-bezier(0.25, 1, 0.3, 1)';
      wheel.style.transform = `rotate(${-targetRotation}deg)`;

      const onTransitionEnd = () => {
        this.spinning = false;
        this.resultNumber = this.selectedNumber;
        this.showResult = true;

        wheel.removeEventListener('transitionend', onTransitionEnd);
      };

      wheel.addEventListener('transitionend', onTransitionEnd);
    }, 50);
  }

  closeResult() {
    this.showResult = false;
    this.selectedNumber = null;

    const wheel = this.wheelRef.nativeElement;
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(0deg)`;
  }
}
