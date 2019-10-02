import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hj-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    honk() {
        let audio = new Audio();
        audio.src = "../../../assets/Honk1.wav";
        audio.load();
        audio.play();
    }

}
