<template>
    <div class="MapFogRender">
        <MapFogTileRenderer
            v-for="(tileData, index) in mapData.tiles"
            :key="index"
            :tileIndex="index"
            :mapData="mapData"
            :style="{
                left: (index - Math.floor(index / mapData.size.x)*mapData.size.x) * 32 + 'px',
                top: Math.floor(index / mapData.size.x) * 32 + 'px'
            }"
        ></MapFogTileRenderer>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MapData } from '@/components/models/MapData';
import { MapUtils } from '@/components/utils/MapUtils';
import MapFogTileRenderer from '@/components/render/MapFogTileRenderer.vue';

@Component({
    components: {
        MapFogTileRenderer
    }
})
export default class MapFogRender extends Vue {
    @Prop({ required: true }) mapData!: MapData;
}
</script>

<style scoped>

.MapFogRender > .MapFogTileRenderer {
    position: absolute;
}

</style>
