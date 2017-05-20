export class Video {
    id: number;
    title: string;
    vidCode: string;
    desc: string;

    constructor(id: number, title: string, vidCode: string, desc: string) {
        this.id = id;
        this.title = title;
        this.vidCode = vidCode;
        this.desc = desc;
    }
}