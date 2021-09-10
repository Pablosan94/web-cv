import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  public percent: number = 0;

  public currentPercent: number = 0;

  @HostBinding('style.--bg-color')
  public bgColor: string = '';

  @HostBinding('style.--percent')
  public currentPercentStyle: string = '0%';

  ngOnInit(): void {
    let animationInterval = setInterval(() => {
      if (this.currentPercent < this.percent) {
        this.currentPercent += 0.5;
        this.currentPercentStyle = this.currentPercent + '%';
        this.bgColor = this.getBackgroundColor(
          this.currentPercent,
          {
            red: 214,
            green: 92,
            blue: 92
          },
          {
            red: 237,
            green: 190,
            blue: 94
          },
          {
            red: 64,
            green: 191,
            blue: 128
          }
        );
      } else {
        clearInterval(animationInterval);
      }
    }, 400 / this.percent)
  }

  getBackgroundColor(percentage: number,
                     lowColor: { red: number, green: number, blue: number },
                     mediumColor: { red: number, green: number, blue: number },
                     highColor: { red: number, green: number, blue: number }): string {
    let color1 = lowColor;
    let color2 = mediumColor;
    let fade = percentage / 100;

    // Do we have 3 colors for the gradient? Need to adjust the params.
    if (highColor) {
      fade = fade * 2;

      // Find which interval to use and adjust the fade percentage
      if (fade >= 1) {
        fade -= 1;
        color1 = mediumColor;
        color2 = highColor;
      }
    }

    let diffRed = color2.red - color1.red;
    let diffGreen = color2.green - color1.green;
    let diffBlue = color2.blue - color1.blue;

    let gradient = {
      red: Math.floor(color1.red + (diffRed * fade)),
      orange: Math.floor(color1.red + (diffRed * fade)),
      green: Math.floor(color1.green + (diffGreen * fade)),
      blue: Math.floor(color1.blue + (diffBlue * fade))
    };

    return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
  }

  /*getBackgroundColor(): string {
    if (this.percent < 25) {
      return 'hsl(0, 60%, 60%)';
    } else if (this.percent < 50) {
      return 'hsl(20, 80%, 60%)';
    } else if (this.percent < 75) {
      return 'hsl(40, 80%, 65%)';
    } else if (this.percent === 100) {
      return 'hsl(200, 80%, 65%)';
    }

    return 'hsl(150, 50%, 50%)';
  }*/
}
