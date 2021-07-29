<template>
    <div class="MapTileRender">
        <img 
            class="MapTileRender__texture"
            v-for="(texture, index) in mapTileData.textures"
            :key="index"
            :src="'./assets/tile-set-1/' + texture"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MapTileData } from '@/components/models/MapTileData';

@Component({
    components: {

    }
})
export default class MapTileRender extends Vue {
    @Prop({ required: true }) mapTileData!: MapTileData;
}
</script>

<style scoped>
.MapTileRender {
    width: 32px;
    height: 32px;
}

.MapTileRender__texture {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
