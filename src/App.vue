<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { Video } from "./main.ts";

let vl: Video = new Video("https://www.youtube.com/embed/OOOOOOOOOOO");

const iframeSrc: Ref<string | null, string | null> = ref<string | null>(null);
iframeSrc.value = vl.video_link;

function generateIframe(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    vl.generateIframe(input.value);
    iframeSrc.value = vl.video_link;
    input.value = "";
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
    <div class="main left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white flex flex-col gap-30 mt-10">
        <div class="iframe bg-cyan-800 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl"></div>
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
</template>

<style scoped></style>
