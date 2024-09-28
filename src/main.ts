import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

export class Video {
    public video_link: string;

    constructor(video_link: string) {
        this.video_link = video_link;
    }

    public generateIframe(value: string) {
        this.video_link = value;
        this.video_link = this.video_link.replace("watch?v=", "embed/");
        console.log(this.video_link);
    }
}

createApp(App).mount("#app");
