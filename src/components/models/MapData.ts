import { MapTileData } from "./MapTileData";

export interface MapData {
    size: {
        x: number,
        y: number
    };

    tiles: MapTileData[];
}
