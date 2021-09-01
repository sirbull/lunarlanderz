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
    scene.cameraShake(3, 500)
    info.changeLifeBy(-1)
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
LunarLander.setPosition(43, 203)
scene.setBackgroundColor(15)
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
goal.setPosition(463, 180)
let goalTimer = 0
let astro_1 = img`
    . . 1 1 1 . . . 
    . . c a 1 . . . 
    1 . 1 1 1 . . 1 
    1 . . 1 . . 1 . 
    . 1 1 1 1 1 . . 
    . . 1 2 1 b . . 
    . . 1 1 1 b . . 
    . 1 1 . 1 1 . . 
    `
let astro_2 = astro_1.clone()
let astro_1_kind = sprites.create(astro_1, SpriteKind.mission)
let astro_2_kind = sprites.create(astro_2, SpriteKind.mission)
astro_1_kind.setPosition(43, 16)
forever(function () {
    LunarLander.setBounceOnWall(true)
    LunarLander.setFlag(SpriteFlag.ShowPhysics, false)
})
game.onUpdateInterval(100, function () {
    if (LunarLander.overlapsWith(goal)) {
        LunarLander.setBounceOnWall(false)
        goalTimer += 1
    } else {
        goalTimer = 0
    }
    if (LunarLander.overlapsWith(goal) && goalTimer > 5) {
        game.over(true, effects.confetti)
    }
})
