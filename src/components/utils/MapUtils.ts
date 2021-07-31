import { MapData } from "../models/MapData";
import { MapTileData } from "../models/MapTileData";
import { Point } from "../models/Point";

export class MapUtils {
    public static GetTileXYByIndex(mapData: MapData, index: number): Point | undefined {
        if (index >= mapData.tiles.length) {
            return undefined;
        }
        const y = Math.floor(index / mapData.size.x);
        const x = index - y * mapData.size.x;
        return { x, y };
    }

    public static GetTileByXY(mapData: MapData, x: number, y: number): MapTileData | undefined {
        if (x < 0 || y < 0 || x >= mapData.size.x || y >= mapData.size.y) {
            return undefined;
        }
        return mapData.tiles[mapData.size.x * y + x];
    }

    public static GetFogValueString(mapData: MapData, index: number) {
        const tile = mapData.tiles[index];
        if (tile?.visited) {
            return '0000';
        }
        const tilePos = MapUtils.GetTileXYByIndex(mapData, index);
        debugger
        if (tilePos) {
            const leftTile: MapTileData | undefined = MapUtils.GetTileByXY(mapData, tilePos.x - 1, tilePos.y);
            const rightTile: MapTileData | undefined = MapUtils.GetTileByXY(mapData, tilePos.x + 1, tilePos.y);
            const topTile: MapTileData | undefined = MapUtils.GetTileByXY(mapData, tilePos.x, tilePos.y - 1);
            const bottomTile: MapTileData | undefined = MapUtils.GetTileByXY(mapData, tilePos.x, tilePos.y + 1);

            const l: boolean = leftTile ? !!leftTile.visited : false;
            const r: boolean = rightTile ? !!rightTile.visited : false;
            const t: boolean = topTile ? !!topTile.visited : false;
            const b: boolean = bottomTile ? !!bottomTile.visited : false;
            
            return (t ? '0' : '1') + (r ? '0' : '1') + (b ? '0' : '1') + (l ? '0' : '1');
        }
        return '';
    }

    public static GetTileTextureCoordinatesByIndex(mapData: MapData, index: number, tileSize: number): Point | undefined {
        const tilePos = MapUtils.GetTileXYByIndex(mapData, index);
        if (tilePos) {
            return { x: tilePos.x * tileSize, y: tilePos.y * tileSize }
        }
        return undefined;
    }
}