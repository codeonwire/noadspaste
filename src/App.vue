<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { Video } from "./main.ts";

let vl: Video = new Video("");

const iframeSrc = ref<string | null>(null);
iframeSrc.value = vl.video_link;

function generateIframe(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    vl.generateIframe(input.value);
    iframeSrc.value = vl.video_link;
}
</script>

<template>
    <div class="baner uppercase bg-cyan-800 text-white font-semibold p-8 text-center text-2xl">Noads paste</div>
    <div class="main left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white flex flex-col gap-20">
        <input
            type="text"
            name="inp"
            id="inp"
            @keydown.enter="generateIframe"
            class="absolute left-1/2 -translate-x-1/2 border-4 border-cyan-800 pr-8 pl-2 pt-2 pb-2 font-semibold text-xl text-black lowercase"
        />
        <iframe
            v-if="iframeSrc"
            class="bg-cyan-800 overflow-hidden rounded-2xl mt-10"
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
