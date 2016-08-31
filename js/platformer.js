var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

let dx = 32
let dy = 32

const Blocks = {
    EMPTY: 'assets/tiles/empty.png',
    GROUND: 'assets/tiles/ground.png',
    SPIKE: 'assets/tiles/spike.png',
}

let level = {
    // TODO: Collidable? Deadly?
    height: 6,
    width: 6,
    layout: 
"\
######\
#    #\
#  # #\
# #  #\
#     \
######\
"
}

function render(levelToRender) {
    let levelArray = levelToRender.layout.split('')
    
    canvas.height = level.height * dx
    canvas.width = level.width * dy
    
    for(var y = 0; y < levelToRender.height; y++) {
        let ypos = y * dy
        for(var x = 0; x < levelToRender.width; x++) {
            let xpos = x * dx
            var blockToDraw
            let index = y * level.width + x
            
            switch(levelArray[index]) {
                case '#':
                    blockToDraw = Blocks.GROUND
                    break
                case 'x':
                    blockToDraw = Blocks.SPIKE
                    break
                default:
                    blockToDraw = Blocks.EMPTY
                    break
            }

            drawBlock(blockToDraw, xpos, ypos)
        }
    }

}

function drawBlock(blockToDraw, x, y) {
    let blockImage = new Image()
    blockImage.src = blockToDraw
    blockImage.onload = () => ctx.drawImage(blockImage, x, y, dx, dy)
}

render(level)