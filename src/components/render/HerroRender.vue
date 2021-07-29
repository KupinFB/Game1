<template>
    <div
        class="HerroRender"
        :style="{
            left: heroData.position.x * 32 + 'px',
            top: heroData.position.y * 32 + 'px'
        }"
    >
        <img 
            :class="`HerroRender__layer HerroRender__shadow ${ heroData.position.diection }`"
            :src="'./assets/tile-set-1/shadows/e6.png'"
        />
        <img 
            :class="`HerroRender__layer HerroRender__ship ${ heroData.position.diection }`"
            :src="shipTextureUrl"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { HeroData } from '@/components/models/HeroData';

@Component({
    components: {

    }
})
export default class HerroRender extends Vue {
    @Prop({ required: true }) heroData!: HeroData;

    get shipTextureUrl(): string {
        switch(this.heroData.position.diection) {
        case 'down': {
            return './assets/tile-set-1/objects/other/Ship3.png';
        }
        case 'up': {
            return './assets/tile-set-1/objects/other/Ship2.png';
        }
        default: {
            return './assets/tile-set-1/objects/other/Ship1.png';
        }
        }
    }
}
</script>

<style scoped>
.HerroRender {
    width: 32px;
    height: 32px;
    position: relative;
}

.HerroRender__layer {
    position: absolute;
    left: 0;
    top: 0;
}

.HerroRender__shadow.left {
    transform: translateX(6px) translateY(13px);
}
.HerroRender__shadow.right {
    transform: translateX(-2px) translateY(13px);
}
.HerroRender__shadow.down {
    transform: translateX(3px) translateY(13px);
}
.HerroRender__shadow.up {
    transform: translateX(3px) translateY(13px);
}

.HerroRender__ship.left {
    transform: translateX(-10px) translateY(-8px) scaleX(-1);
}
.HerroRender__ship.right {
    transform: translateX(-4px) translateY(-8px);
}
.HerroRender__ship.down {
    transform: translateX(6px) translateY(-8px);
}
.HerroRender__ship.up {
    transform: translateX(6px) translateY(-8px);
}

</style>
