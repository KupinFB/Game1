<template>
    <div class="MapFogTileRenderer">
        <img 
            class="MapFogTileRenderer__texture"
            v-if="value !== '0000'"
            :src="'./assets/tile-set-1/fog/codes/' + value + '.png'"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MapTileData } from '@/components/models/MapTileData';
import { MapData } from '@/components/models/MapData';
import { MapUtils } from '@/components/utils/MapUtils';

@Component({
    components: {

    }
})
export default class MapFogTileRenderer extends Vue {
    @Prop({ required: true }) tileIndex!: number;
    @Prop({ required: true }) mapData!: MapData;

    get value(): string { return MapUtils.GetFogValueString(this.mapData, this.tileIndex); }
}
</script>

<style scoped>
.MapFogTileRenderer {
    width: 32px;
    height: 32px;
}

.MapFogTileRenderer__texture {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
