<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { Video } from "./main.ts";

let vl: Video = new Video("https://www.youtube.com/embed/OOOOOOOOOOO");

const iframeSrc: Ref<string | null, string | null> = ref<string | null>(null);
iframeSrc.value = vl.video_link;

let miniVl: Video = new Video("https://www.youtube.com/embed/OOOOOOOOOOO");

const miniIframeSrc: Ref<string | null, string | null> = ref<string | null>(null);
miniIframeSrc.value = miniVl.video_link;

let miniVl2: Video = new Video("https://www.youtube.com/embed/OOOOOOOOOOO");

const miniIframeSrc2: Ref<string | null, string | null> = ref<string | null>(null);
miniIframeSrc2.value = miniVl2.video_link;

function generateIframe(event: KeyboardEvent) {
    if ((event != null) & (event != "")) {
        const input = event.target as HTMLInputElement;
        vl.generateIframe(input.value);
        iframeSrc.value = vl.video_link;
        input.value = "";
    }
}

function generateMiniIframe(event: KeyboardEvent) {
    if ((event != null) & (event != "")) {
        const input = event.target as HTMLInputElement;
        miniVl.generateIframe(input.value);
        miniIframeSrc.value = miniVl.video_link;
    }
}

function generateMiniIframe2(event: KeyboardEvent) {
    if ((event != null) & (event != "")) {
        const input = event.target as HTMLInputElement;
        miniVl2.generateIframe(input.value);
        miniIframeSrc2.value = miniVl2.video_link;
    }
}

const exportProgram: Function = () => {
    window.open("http://localhost:5173", "_blank", "width=1920,height=1080,resizable=yes,scrollbars=yes");
    window.close();
};
</script>

<template>
    <div class="baner uppercase bg-cyan-800 text-white font-semibold p-8 text-center text-2xl flex justify-between">
        <h1>Noads paste</h1>
        <input type="text" name="inp" id="inp" @change="generateIframe" class="absolute left-1/2 -translate-x-1/2 rounded-md pr-8 pl-2 pt-2 pb-2 font-semibold text-xl text-gray-400 lowercase" />
        <button @click="exportProgram" class="bg-slate-800 p-3 rounded-md text-xs">Export program</button>
    </div>
    <div class="main left-1/4 top-1/2 -translate-x-1/4 -translate-y-1/2 absolute text-white flex flex-col gap-30 mt-10">
        <div class="iframe bg-red-800 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl"></div>
        <iframe
            v-if="iframeSrc"
            class="bg-cyan-800 overflow-hidden rounded-2xl z-50"
            width="1120"
            height="630"
            :src="iframeSrc"
            title="Noads paste video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
    <div class="flex">
        <input
            type="text"
            name="inp"
            id="inp"
            @change="generateMiniIframe"
            class="absolute right-0 top-1/4 -mt-16 -translate-x-1/2 rounded-md pr-8 pl-2 pt-2 pb-2 font-semibold text-xl text-gray-400 lowercase border-4 hover:border-b-red-800"
        />
        <input
            type="button"
            value="GO"
            name="inp"
            id="inp"
            @click=""
            class="absolute right-0 top-1/4 -mt-16 -translate-x-1/2 rounded-md pr-4 pl-4 pt-2 pb-2 mr-10 font-semibold text-xl text-white uppercase bg-cyan-800 hover:bg-cyan-900 duration-500 hover:duration-500"
        />
        <div class="main right-0 top-1/4 -translate-x-1/2 -translate-y-1/4 absolute text-white flex flex-col gap-30 mt-10">
            <div class="iframe2 bg-cyan-800 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl"></div>
            <iframe
                v-if="miniIframeSrc"
                class="bg-cyan-800 overflow-hidden rounded-2xl z-50"
                width="285"
                height="157.5"
                :src="miniIframeSrc"
                title="Noads paste video"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
        <input
            type="text"
            name="inp"
            id="inp"
            @change="generateMiniIframe2"
            class="absolute right-0 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-md pr-8 pl-2 pt-2 pb-2 font-semibold text-xl text-gray-400 lowercase border-4 border-b-cyan-800 hover:border-b-red-800"
        />
        <input
            type="button"
            value="GO"
            name="inp"
            id="inp"
            @click=""
            class="absolute right-0 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-md pr-4 pl-4 pt-2 pb-2 mr-10 font-semibold text-xl text-white uppercase bg-cyan-800 hover:bg-cyan-900 duration-500 hover:duration-500"
        />
        <div class="main right-0 bottom-1/3 -translate-x-1/2 translate-y-1/3 absolute text-white flex flex-col gap-30 mt-10">
            <div class="iframe2 bg-cyan-800 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl"></div>
            <iframe
                v-if="miniIframeSrc2"
                class="bg-cyan-800 overflow-hidden rounded-2xl z-50"
                width="285"
                height="157.5"
                :src="miniIframeSrc2"
                title="Noads paste video"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<style scoped></style>
