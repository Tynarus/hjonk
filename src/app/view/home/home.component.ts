import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hj-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public honkAudio1 = new Audio('../../../assets/Honk1.wav');

    constructor() {
    }

    ngOnInit() {
    }

    // I think that removing the load() function might help Mobile to work.
    public honk(): void {
        try {
            this.honkAudio1.play();
        } catch {
            console.error('Audio File could not be played');
        }
    }
}
