
const hexagon = (posX, posY, radius) => {
    let rotAngle = 360 / 6;
    beginShape();
    for (let i = 0; i < 6; i++) {
      const thisVertex = pointOncircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y);
    }
    endShape(CLOSE);
}

const pointOncircle = (posX, posY, radius, angle) => {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

const randomSelectTwo = () => {

  const rando = random(1)
  if(rando > 0.5){
      return true
  } else {
      return false
  }

}

const getRandomFromPalette = () => {

  const rando2 = floor(random(0, PALETTE.length));
  return PALETTE[rando2];

}






const myTriangle = (center, radius, direction) => {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE); 
  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
}

const layerConstructor = [
  {
    name: 'Outline Shape',
    init: (props) => OutlineShape({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Circles',
    init: (props) => Circles({
      ...props,
      ...setState(state)
    }),
    weight: 0.6
  },
  {
    name: 'SimpleLines',
    init: (props) => SimpleLines({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'CenteredShape',
    init: (props) => CenteredShape({
      ...props,
      ...setState(state)
    }),
    weight: 0.4
  }, 
  {
    name: 'DottedLines',
    init: (props) => DottedLines({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'SteppedHexagons',
    init: (props) => SteppedHexagons({
      ...props,
      ...setState(state)
    }),
    weight: 0.7
  },
  {
    name: 'RingOfShapes',
    init: (props) => RingOfShapes({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name:'Test Lines',
    init: (props) => TestLines({
      ...props,
      ...setState(state)
    }),
    weight: 1
  },
]

const makeCrystal = (pos) => {
  const layers = layerConstructor.map(lcon => {
    let picker = random(1)
    const draw = picker > lcon.weight
        return lcon.init({
          pos: pos,
          draw: draw
        })
  })
  return layers
}

const drawCrystal = (crystal) => {
  crystal.forEach(layer => {
    if (layer.state.draw) {
      push()
        translate(layer.state.pos.x, layer.state.pos.y)
        layer.render()
      pop()
    }
  })
}