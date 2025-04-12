// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100009090909090909090909090909090909090911090909080808080909091009090909090909090808080809120909090909090909090908080808090909090909090909090909090909090909090912090912090909080808080808090909090913080808090801060605080908080813060606060606070707070606060606060303030303030707070703030303030309080808090802030304080908080809110909090908080808080809090909090909130909090909090909091109091009090b0d0e09080808080909090909090a0c0a0c0c09080808080909090909090c0c0c0a0c09080808080909120909090a0c0c0c0f0909090909090909090909`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
2 2 2 . 2 . . . . . . . . . . . 
2 . . . 2 . . . . . . . 2 . . . 
2 2 2 2 2 . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.swamp.swampTile13,sprites.swamp.swampTile6,sprites.swamp.swampTile9,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile14,sprites.swamp.swampTile3,sprites.swamp.swampTile0,sprites.builtin.forestTiles0,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
