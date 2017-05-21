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

	// videos_ = [{
	// 	id: 2,
	// 	title: 'its title',
	// 	desc: 'its desc'
	// }];

	videos_: Video[];

	constructor() {
		this.videos_ = [
            new Video(1, 'Vid 1 title', 'vid1Code', 'vid1Desc here we goes'),
            new Video(2, 'Vid 2 title', 'vid2Code', 'vid2Desc here we goes'),
            new Video(3, 'Vid 3 title', 'vid3Code', 'vid3Desc here we goes'),
            new Video(4, 'Vid 4 title', 'vid4Code', 'vid4Desc here we goes'),
        ]
	}

    clickCalled(vid:Video) {
        console.log(vid);
    }
}