// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000100016141414141500000000000101011500000000000000010101011f1f1f1f01011f1802021b0101150000011802021b0101150000000001180202020202021b011519000000121b1414141419000000121b1f000000001f190021000000201c011419201e00001c0114141800210000001c1f0000000101190000000000001c011f19000000001c0114151900000000001c1f1500010118000000220000001c1f1f190000000000120202000000030000001b010001180000001c151900001c0115190000000000000000200007082222001c010001190000001c151900001c0114190000210000000000000009091109001c0101011900060b08180000001c011519000000000000000000001111110900001b01180000120213000000001c1f1519000000000000000021000c11110e20000002000000000000000021001c01151900200000070800000000000c090708000021000007050508000000001c011419000000070909080000070a04090911000000000017090917082000001d1f1f1a0000070910091107080909090e0c09060822070a090e0c09170605050a040407050a090e0d0c09100909090e00000c09090909090e00000c090909090909090909090e0000000c0f0f0f0e000000000c0f0f0f0e000000000c0f0f0f0f0e0c0f0f0e00000000000000000000000000000000000000000000000000000000`, img`
222222....222222......2222222222
2....222..2....222....2........2
2......2.22......2....2........2
2......2.2.......2...22........2
2......222.......22.22.........2
2.................2.2..........2
2...........2222..2.2..........2
2...........2..2..222..........2
2...........2..2...2...........2
2...........22.2...............2
2.....22.....2.22.....2222.....2
2....2222..222..2.....2..22....2
2...22..222.....2222222...222222
22222...........................
................................
................................
`, [myTiles.transparency16,sprites.builtin.forestTiles24,sprites.builtin.forestTiles18,sprites.castle.rock1,sprites.builtin.oceanSand0,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,sprites.builtin.oceanSand5,sprites.builtin.oceanSand7,sprites.builtin.oceanSand8,sprites.builtin.oceanSand3,sprites.builtin.oceanSand6,sprites.builtin.oceanSand13,sprites.builtin.oceanSand12,sprites.builtin.oceanSand15,sprites.builtin.oceanSand14,sprites.builtin.oceanSand11,sprites.builtin.oceanSand9,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.builtin.forestTiles25,sprites.builtin.forestTiles29,sprites.builtin.forestTiles26,sprites.builtin.oceanSand10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles12,sprites.builtin.forestTiles28,myTiles.tile1,myTiles.tile2,sprites.builtin.oceanSand4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
