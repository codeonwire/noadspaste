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

        this.video_link = this.video_link.includes("https://youtu.be/") ? this.video_link.split("?si=")[0].replace("?si=", "").replace("youtu.be/", "youtube.com/embed/") : this.video_link;
        this.video_link = this.video_link.includes("watch?v=") ? this.video_link.replace("watch?v=", "embed/") : this.video_link;
        console.log(this.video_link);
    }
}

createApp(App).mount("#app");
