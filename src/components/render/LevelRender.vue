<template>
    <div class="LevelRender">
        <MapRender :mapData="levelData.map"></MapRender>
        <HerroRender :heroData="levelData.hero"></HerroRender>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { LevelData } from '@/components/models/LevelData';
import MapRender from '@/components/render/MapRender.vue';
import HerroRender from '@/components/render/HerroRender.vue';

@Component({
    components: {
        MapRender,
        HerroRender
    }
})
export default class LevelRender extends Vue {
    @Prop({ required: true }) levelData!: LevelData;
}
</script>

<style scoped>
.LevelRender > .MapRender {
    left: 0;
    top: 0;
    position: absolute;
}
.LevelRender > .HerroRender {
    left: 0;
    top: 0;
    position: absolute;
}

</style>
