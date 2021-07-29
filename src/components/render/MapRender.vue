<template>
    <div class="MapRender">
        <MapTileRender
            v-for="(tileData, index) in mapData.tiles"
            :key="index"
            :mapTileData="tileData"
            :style="{
                left: (index - Math.floor(index / mapData.size.x)*mapData.size.x) * 32 + 'px',
                top: Math.floor(index / mapData.size.x) * 32 + 'px'
            }"
        ></MapTileRender>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MapData } from '@/components/models/MapData';
import MapTileRender from '@/components/render/MapTileRender.vue';

@Component({
    components: {
        MapTileRender
    }
})
export default class MapRender extends Vue {
    @Prop({ required: true }) mapData!: MapData;
}
</script>

<style scoped>

.MapRender > .MapTileRender {
    position: absolute;
}

</style>
