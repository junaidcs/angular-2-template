import { Component } from 'angular2/core';
import { Video } from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']    
})

export class PlaylistComponent {

	vids: number[] = [11,22,33,44,556];

	showArr: boolean = true;

    clickCalled(vid:Video) {
        console.log(vid);
    }
}