namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const mission = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    LunarLander,
    [img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 5 5 . 2 4 
        2 2 . 5 4 . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 . 5 . 5 2 4 
        2 2 . . . . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 . 5 4 2 4 
        2 2 5 . . . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 5 5 . 2 4 
        2 2 4 . . . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 5 . 5 2 4 
        2 2 . 4 5 4 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 4 5 5 4 2 4 
        2 2 . . 5 . 2 2 
        `],
    100,
    true
    )
    LunarLander.ay = -40
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (LunarLander.vx > 10 || LunarLander.vx > 10) {
        LunarLander.setBounceOnWall(true)
        scene.cameraShake(3, 500)
        info.changeLifeBy(-1)
    } else {
        LunarLander.setBounceOnWall(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    LunarLander,
    [img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 5 5 . 2 4 
        2 2 . 5 4 . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 . 5 . 5 2 4 
        2 2 . . . . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 . 5 4 2 4 
        2 2 5 . . . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 5 5 . 2 4 
        2 2 4 . . . 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 5 5 . 5 2 4 
        2 2 . 4 5 4 2 2 
        `,img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 4 5 5 4 2 4 
        2 2 . . 5 . 2 2 
        `],
    100,
    true
    )
    LunarLander.ay = -40
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    LunarLander.ax = -50
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    LunarLander.ax = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    LunarLander.ax = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    LunarLander.ax = 50
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    LunarLander,
    [img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 . . . . 2 4 
        2 2 . . . . 2 2 
        `],
    100,
    true
    )
    LunarLander.ay = 30
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    LunarLander,
    [img`
        . . . 2 4 . . . 
        . . 2 2 2 4 . . 
        . . 1 1 1 b . . 
        . . 1 1 1 b . . 
        . 2 1 1 1 b 4 . 
        2 2 b b b b 2 4 
        2 2 . . . . 2 4 
        2 2 . . . . 2 2 
        `],
    100,
    true
    )
    LunarLander.ay = 30
})
let LunarLander: Sprite = null
info.setLife(3)
LunarLander = sprites.create(img`
    . . . 2 4 . . . 
    . . 2 2 2 4 . . 
    . . 1 1 1 b . . 
    . . 1 1 1 b . . 
    . 2 1 1 1 b 4 . 
    2 2 b b b b 2 4 
    2 2 . . . . 2 4 
    2 2 . . . . 2 2 
    `, SpriteKind.Player)
scene.cameraFollowSprite(LunarLander)
scene.setBackgroundColor(15)
LunarLander.z = 3
LunarLander.setPosition(43, 203)
tiles.setTilemap(tilemap`level1`)
let goal = sprites.create(img`
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 1 1 1 1 2 2 1 1 2 2 1 1 1 1 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . c c c . . b b . . c b b . . 
    . . . c . c b . . c b . b . . . 
    . . . c . . . c b . . . b . . . 
    . . . c b b b . . b b b b . . . 
    . . c c . . . . . . . . c b . . 
    . . c . . . . . . . . . . b . . 
    . c c b . . . . . . . . c b b . 
    c c c c . . . . . . . . c c c c 
    `, SpriteKind.goal)
tiles.placeOnTile(goal, tiles.getTileLocation(28, 11))
let goalTimer = 0
let astro_1 = sprites.create(img`
    . . 1 1 1 . . . 
    . . c a 1 . . . 
    1 . 1 1 1 . . 1 
    1 . . 1 . . 1 . 
    . 1 1 1 1 1 . . 
    . . 1 2 1 b . . 
    . . 1 1 1 b . . 
    . 1 1 . 1 1 . . 
    `, SpriteKind.mission)
tiles.placeOnTile(astro_1, tiles.getTileLocation(3, 2))
let astro_2 = sprites.create(img`
    . . 1 1 1 . . . 
    . . c a 1 . . . 
    1 . 1 1 1 . . 1 
    1 . . 1 . . 1 . 
    . 1 1 1 1 1 . . 
    . . 1 2 1 b . . 
    . . 1 1 1 b . . 
    . 1 1 . 1 1 . . 
    `, SpriteKind.mission)
tiles.placeOnTile(astro_2, tiles.getTileLocation(11, 10))
let astro_3 = sprites.create(img`
    . . 1 1 1 . . . 
    . . c a 1 . . . 
    1 . 1 1 1 . . 1 
    1 . . 1 . . 1 . 
    . 1 1 1 1 1 . . 
    . . 1 2 1 b . . 
    . . 1 1 1 b . . 
    . 1 1 . 1 1 . . 
    `, SpriteKind.mission)
tiles.placeOnTile(astro_3, tiles.getTileLocation(24, 9))
let astro_4 = sprites.create(img`
    . . 1 1 1 . . . 
    . . c a 1 . . . 
    1 . 1 1 1 . . 1 
    1 . . 1 . . 1 . 
    . 1 1 1 1 1 . . 
    . . 1 2 1 b . . 
    . . 1 1 1 b . . 
    . 1 1 . 1 1 . . 
    `, SpriteKind.mission)
tiles.placeOnTile(astro_4, tiles.getTileLocation(26, 3))
info.setScore(0)
forever(function () {
	
})
game.onUpdateInterval(100, function () {
    if (LunarLander.overlapsWith(goal) && info.score() == 4) {
        LunarLander.setBounceOnWall(false)
        goalTimer += 1
    } else {
        goalTimer = 0
    }
    if (LunarLander.overlapsWith(goal) && goalTimer > 5) {
        game.over(true, effects.confetti)
    }
    if (LunarLander.overlapsWith(astro_1)) {
        astro_1.destroy(effects.hearts, 200)
        info.changeScoreBy(1)
    } else if (LunarLander.overlapsWith(astro_2)) {
        astro_2.destroy(effects.hearts, 200)
        info.changeScoreBy(1)
    } else if (LunarLander.overlapsWith(astro_3)) {
        astro_3.destroy(effects.hearts, 200)
        info.changeScoreBy(1)
    } else if (LunarLander.overlapsWith(astro_4)) {
        astro_4.destroy(effects.hearts, 200)
        info.changeScoreBy(1)
    } else {
    	
    }
})
