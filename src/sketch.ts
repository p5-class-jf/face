
function draw() {
    translate(width/2, height/2)
    background('lightblue')
    noStroke()
    // Face
    fill('#fff5d4')
    ellipse(0, 0, height * 0.5, height * 0.6)
    // Eyes
    {
        const w = height * 0.05
        const h = -height * 0.1
        fill('white')
        ellipse(-w, h, 50)
        ellipse(+w, h, 50)
        fill('black')
        ellipse(-w+5, h-2, 20)
        ellipse(+w-5, h+2, 20)
    }
    // Mouth
    fill('#070163')
    ellipse(0, height * 0.1, height * 0.3, height * 0.2)
}

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}