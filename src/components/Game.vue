<template>
    <div class="Game">
        <LevelRender :levelData="levelData"></LevelRender>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { LevelData } from '@/components/models/LevelData';
import LevelRender from '@/components/render/LevelRender.vue';

@Component({
    components: {
        LevelRender
    }
})
export default class Game extends Vue {

    private levelData: LevelData = {
        hero: {
            position: {
                x: 2,
                y: 2,
                diection: 'left'
            }
        },
        map: {
            size: {
                x: 3,
                y: 3
            },
            tiles: [
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
                {
                    blocker: false,
                    textures: [
                        'tiles/Map_tile_38.png'
                    ]
                },
            ]
        }
    }

    mounted() {
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener('keydown', this.onKeyDown);
    }

    destroyed() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.key === 'ArrowLeft') {
            this.levelData.hero.position.diection = 'left';
            this.levelData.hero.position.x -= 1;
        }
        if (e.key === 'ArrowRight') {
            this.levelData.hero.position.diection = 'right';
            this.levelData.hero.position.x += 1;
        }
        if (e.key === 'ArrowDown') {
            this.levelData.hero.position.diection = 'down';
            this.levelData.hero.position.y += 1;
        }
        if (e.key === 'ArrowUp') {
            this.levelData.hero.position.diection = 'up';
            this.levelData.hero.position.y -= 1;
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
