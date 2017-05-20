import {Component} from 'angular2/core';
import { Config } from './config.service';
import { Video } from './video';
import { PlaylistComponent } from './playlist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    APP_HEADING:string = Config.APP_TITLE;
    videos: Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, 'Vid 1 title', 'vid1Code', 'vid1Desc here we goes'),
            new Video(2, 'Vid 2 title', 'vid2Code', 'vid2Desc here we goes'),
            new Video(3, 'Vid 3 title', 'vid3Code', 'vid3Desc here we goes'),
            new Video(4, 'Vid 4 title', 'vid4Code', 'vid4Desc here we goes'),
        ]
    }
}
