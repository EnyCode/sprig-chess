/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const cursor = "a"
const cursorSelected = "b"
const pawnBlack = "c"
const pawnWhite = "d"
const bishopBlack = "e"
const bishopWhite = "f"
const knightBlack = "g"
const knightWhite = "h"
const rookBlack = "i"
const rookWhite = "j"
const kingBlack = "k"
const kingWhite = "l"
const queenBlack = "m"
const queenWhite = "n"
const whiteSelected = "w"
const blackSelected = "x"
const whiteSquare = "y"
const blackSquare = "z"

setLegend(
  [ cursor, bitmap`
4444444444444444
4DDDDDDDDDDDDDD4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4D............D4
4DDDDDDDDDDDDDD4
4444444444444444` ],
  [ cursorSelected, bitmap`
6666666666666666
6FFFFFFFFFFFFFF6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6F............F6
6FFFFFFFFFFFFFF6
6666666666666666` ],
  [ pawnBlack, bitmap`
................
................
......0000......
.....0111L0.....
.....011LL0.....
.....01LLL0.....
......01L0......
.....01LLL0.....
.....01LLL0.....
......01L0......
.....01LLL0.....
....01LLLLL0....
....01LLLLL0....
....00000000....
................
................` ],
  [ pawnWhite, bitmap`
................
................
......0000......
.....022210.....
.....022110.....
.....021110.....
......0210......
.....021110.....
.....021110.....
......0210......
.....021110.....
....02111110....
....02111110....
....00000000....
................
................` ],
  [ bishopBlack, bitmap`
................
................
......0000......
.....011LL0.....
.....01LLL0.....
......01LLL0....
.....01LLL0.....
....01LLL010....
....01LL01L0....
....01LLLLL0....
.....01LLL0.....
.....000000.....
....011LLLL0....
....00000000....
................
................` ],
  [ bishopWhite, bitmap`
................
................
......0000......
.....022110.....
.....021110.....
......021110....
.....021110.....
....02111020....
....02110210....
....02111110....
.....021110.....
.....000000.....
....02211110....
....00000000....
................
................` ],
  [ knightBlack, bitmap`
................
................
.....0000.......
.....01110......
......01L10.....
.....01LLL10....
....011LLLL0....
....0001LLL0....
......01LLL0....
.....011LL0.....
.....01LLL0.....
.....000000.....
....011LLLL0....
....00000000....
................
................` ],
  [ knightWhite, bitmap`
................
................
.....0000.......
.....02220......
......02120.....
.....0211120....
....02211110....
....00021110....
......021110....
.....022110.....
.....021110.....
.....000000.....
....02211110....
....00000000....
................
................` ],
  [ rookBlack, bitmap`
................
................
....00..00.0....
....01001100....
....0111LLL0....
....01LLLLL0....
....00000000....
.....011LL0.....
.....011LL0.....
.....01LLL0.....
.....01LLL0.....
....00000000....
....011LLLL0....
....00000000....
................
................` ],
  [ rookWhite, bitmap`
................
................
....00..00.0....
....02002200....
....02221110....
....02111110....
....00000000....
.....022110.....
.....022110.....
.....021110.....
.....021110.....
....00000000....
....02211110....
....00000000....
................
................` ],
  [ kingBlack, bitmap`
................
................
.......00.......
.......00.......
.....0....0.....
....010..010....
....011001L0....
....01L11LL0....
....01LLLLL0....
.....01LLL0.....
.....01LLL0.....
.....000000.....
....011LLLL0....
....00000000....
................
................` ],
  [ kingWhite, bitmap`
................
................
.......00.......
.......00.......
.....0....0.....
....020..020....
....02200210....
....02122110....
....02111110....
.....021110.....
.....021110.....
.....000000.....
....02211110....
....00000000....
................
................` ],
  [ queenBlack, bitmap`
................
................
................
.......00.......
.....0.00.0.....
.....0....0.....
....00.00.00....
....01011010....
....011LL1L0....
....01LLLLL0....
.....01LLL0.....
.....000000.....
....011LLLL0....
....00000000....
................
................` ],
  [ queenWhite, bitmap`
................
................
................
.......00.......
.....0.00.0.....
.....0....0.....
....00.00.00....
....02022020....
....02211210....
....02111110....
.....021110.....
.....000000.....
....02211110....
....00000000....
................
................` ],
  [ whiteSelected, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666` ],
  [ blackSelected, bitmap`
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF` ],
  [ whiteSquare, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222` ],
  [ blackSquare, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL` ],
)

const pieces = [
  pawnBlack, pawnWhite,
  bishopBlack, bishopWhite,
  knightBlack, knightWhite,
  rookBlack, rookWhite,
  kingBlack, kingWhite,
  queenBlack, queenWhite
]

const whitePieces = [
  pawnWhite, bishopWhite, knightWhite, rookWhite, kingWhite, queenWhite
]
const blackPieces = [
  pawnBlack, bishopBlack, knightBlack, rookBlack, kingBlack, queenBlack
]

setSolids([])

const level = map`
yzyzyzyz
zyzyzyzy
yzyzyzyz
zyzyzyzy
yzyzyzyz
zyzyzyzy
yzyzyzyz
zyzyzyzy`

setMap(level)

function setup() {
  for (let x = 0; x < 8; x++) {
    addSprite(x, 1, pawnBlack)
    addSprite(x, 6, pawnWhite)
  }
  // bishops
  addSprite(2, 0, bishopBlack)
  addSprite(5, 0, bishopBlack)
  addSprite(2, 7, bishopWhite)
  addSprite(5, 7, bishopWhite)
  // knights
  addSprite(1, 0, knightBlack)
  addSprite(6, 0, knightBlack)
  addSprite(1, 7, knightWhite)
  addSprite(6, 7, knightWhite)
  // rooks
  addSprite(0, 0, rookBlack)
  addSprite(7, 0, rookBlack)
  addSprite(0, 7, rookWhite)
  addSprite(7, 7, rookWhite)
  // king
  addSprite(4, 0, kingBlack)
  addSprite(4, 7, kingWhite)
  // Queen
  addSprite(3, 0, queenBlack)
  addSprite(3, 7, queenWhite)

  // cursor
  addSprite(3, 5, cursor)
}

function drawMoves(x, y) {
  let piece = getTile(x, y)
  getTile(x, y).forEach((t) => {
    if (whitePieces.indexOf(t.type) >= 0) {
        piece = t
        return
      }
  })

  if (piece.type == pawnWhite) {
    let white = (piece.x % 2) + ((piece.y + 1) % 2) == 1
    if (piece.y == 0) {
      return
    }
    let enemies = getTile(piece.x - 1, piece.y - 1).concat(getTile(piece.x + 1, piece.y - 1))
    enemies.forEach((t) => {
      if (blackPieces.indexOf(t.type) >= 0) {
        let white = (t.x % 2) + ((t.y + 1) % 2) == 1
        addSprite(t.x, t.y, white ? whiteSelected : blackSelected)
      }
    })
    enemies = getTile(piece.x, piece.y - 1)
    let allowMove = true
    enemies.forEach((t) => {
      if (pieces.indexOf(t.type) >= 0) {
        allowMove = false
      }
    })
    if (allowMove) {
      addSprite(piece.x, piece.y - 1, white ? whiteSelected : blackSelected)
    }
    if (piece.y == 6 && allowMove) {
      enemies = getTile(piece.x, piece.y - 2)
      allowMove = true
      enemies.forEach((t) => {
        if (pieces.indexOf(t.type) >= 0) {
          allowMove = false
        }
      })
      if (allowMove) {
        addSprite(piece.x, 4, white ? blackSelected : whiteSelected)
      }
    }
  } else if (piece.type == bishopWhite) {
    let white = (piece.x % 2) + ((piece.y + 1) % 2) == 1
    let select = white ? whiteSelected : blackSelected
    for (let x = 1; x < 8; x++) {
      if (piece.x + x < 8 && piece.y + x < 8) {
        let collision = false
        if (x > 1) {
          let removal = 1
          x -= 1
          for (; x > 0; x--) {
            removal += 1
            getTile(piece.x + x, piece.y + x).forEach((t) => {
              if (pieces.indexOf(t.type) >= 0) {
                collision = true
              }
            })
          }
          x += removal
        }
        if (!collision) {
          getTile(piece.x + x, piece.y + x).forEach((t) => {
            if (whitePieces.indexOf(t.type) >= 0) {
              collision = true
            }
          })
        }
        if (!collision) {
          addSprite(piece.x + x, piece.y + x, select)
        }
      }
      if (piece.x + x < 8 && piece.y - x >= 0) {
        let collision = false
        if (x > 1) {
          let removal = 1
          x -= 1
          for (; x > 0; x--) {
            removal += 1
            getTile(piece.x + x, piece.y - x).forEach((t) => {
              if (pieces.indexOf(t.type) >= 0) {
                collision = true
              }
            })
            if (piece.x == 3 && piece.y == 3) {
              console.log(x, removal, collision, piece.x + x, piece.y - x)
            }
          }
          x += removal
        }
        if (!collision) {
          getTile(piece.x + x, piece.y - x).forEach((t) => {
            if (whitePieces.indexOf(t.type) >= 0) {
              collision = true
            }
          })
        }
        if (!collision) {
          addSprite(piece.x + x, piece.y - x, select)
        }
      }
      if (piece.x - x >= 0 && piece.y + x < 8) {
        let collision = false
        if (x > 1) {
          let removal = 1
          x -= 1
          for (; x > 0; x--) {
            removal += 1
            getTile(piece.x - x, piece.y + x).forEach((t) => {
              if (pieces.indexOf(t.type) >= 0) {
                collision = true
              }
            })
          }
          x += removal
        }
        if (!collision) {
          getTile(piece.x - x, piece.y + x).forEach((t) => {
            if (whitePieces.indexOf(t.type) >= 0) {
              collision = true
            }
          })
        }
        if (!collision) {
          addSprite(piece.x - x, piece.y + x, select)
        }
      }
      if (piece.x - x >= 0 && piece.y - x >= 0) {
        let collision = false
        if (x > 1) {
          let removal = 1
          x -= 1
          for (; x > 0; x--) {
            removal += 1
            getTile(piece.x - x, piece.y - x).forEach((t) => {
              if (pieces.indexOf(t.type) >= 0) {
                collision = true
              }
            })
          }
          x += removal
        }
        if (!collision) {
          getTile(piece.x - x, piece.y - x).forEach((t) => {
            if (whitePieces.indexOf(t.type) >= 0) {
              collision = true
            }
          })
        }
        if (!collision) {
          addSprite(piece.x - x, piece.y - x, select)
        }
      }
    }
  } else if (piece.type == knightWhite) {
    function checkTarget(x, y) {
      let ok = true
      getTile(x, y).forEach((t) => {
        if (whitePieces.indexOf(t.type) >= 0) {
          ok = false
        }
      })
      return ok
    }
    let white = (piece.x % 2) + ((piece.y + 1) % 2) == 1
    let select = white ? blackSelected : whiteSelected
    if (piece.x + 2 < 8) {
      for (let x = 0; x < 2; x++) {
        let y = (x == 0 ? 1 : -1) + piece.y
        console.log(y)
        if (y < 8 && y >= 0 && checkTarget(piece.x + 2, y)) {
          console.log("placing")
          addSprite(piece.x + 2, y, select)
        }
      }
    }
    if (piece.y + 2 < 8) {
      for (let x = 0; x < 2; x++) {
        let y = (x == 0 ? 1 : -1) + piece.x
        if (y < 8 && y >= 0 && checkTarget(y, piece.y + 2)) {
          addSprite(y, piece.y + 2, select)
        }
      }
    }
    if (piece.x - 2 >= 0) {
      for (let x = 0; x < 2; x++) {
        let y = (x == 0 ? 1 : -1) + piece.y
        if (y < 8 && y >= 0 && checkTarget(piece.x - 2, y)) {
          addSprite(piece.x - 2, y, select)
        }
      }
    }
    if (piece.y - 2 >= 0) {
      for (let x = 0; x < 2; x++) {
        let y = (x == 0 ? 1 : -1) + piece.x
        if (y < 8 && y >= 0 && checkTarget(y, piece.y - 2)) {
          addSprite(y, piece.y - 2, select)
        }
      }
    }
  } else if (piece.type == rookWhite) {
    let toReturn = false;
    for (let x = piece.x; x < 8; x++) {
      if (toReturn) {
        break;
      }
      if (x == piece.x) { continue }
      let rtn = false;
      getTile(x, piece.y).forEach((t) => {
        if (blackPieces.indexOf(t.type) >= 0) {
          toReturn = true;
        } else if (whitePieces.indexOf(t.type) >= 0) {
          rtn = true;
        }
      })
      if (rtn) { break }
      let white = (x % 2) + ((piece.y + 1) % 2) == 1
      let select = white ? whiteSelected : blackSelected
      addSprite(x, piece.y, select);
    }
    toReturn = false;
    for (let x = piece.x; x >= 0; x--) {
      if (toReturn) {
        break;
      }
      if (x == piece.x) { continue }
      let rtn = false;
      getTile(x, piece.y).forEach((t) => {
        if (blackPieces.indexOf(t.type) >= 0) {
          toReturn = true;
        } else if (whitePieces.indexOf(t.type) >= 0) {
          rtn = true;
        }
      })
      if (rtn) { break }
      let white = (x % 2) + ((piece.y + 1) % 2) == 1
      let select = white ? whiteSelected : blackSelected
      addSprite(x, piece.y, select);
    }
    toReturn = false;
    for (let y = piece.y; y < 8; y++) {
      if (toReturn) {
        break;
      }
      if (y == piece.y) { continue }
      let rtn = false;
      getTile(piece.x, y).forEach((t) => {
        if (blackPieces.indexOf(t.type) >= 0) {
          toReturn = true;
        } else if (whitePieces.indexOf(t.type) >= 0) {
          rtn = true;
        }
      })
      if (rtn) { break }
      let white = (piece.x % 2) + ((y + 1) % 2) == 1
      let select = white ? whiteSelected : blackSelected
      addSprite(piece.x, y, select);
    }
    toReturn = false;
    for (let y = piece.y; y >= 0; y--) {
      if (toReturn) {
        break;
      }
      if (y == piece.y) { continue }
      let rtn = false;
      getTile(piece.x, y).forEach((t) => {
        if (blackPieces.indexOf(t.type) >= 0) {
          toReturn = true;
        } else if (whitePieces.indexOf(t.type) >= 0) {
          rtn = true;
        }
      })
      if (rtn) { break }
      let white = (piece.x % 2) + ((y + 1) % 2) == 1
      let select = white ? whiteSelected : blackSelected
      addSprite(piece.x, y, select);
    }
  }
}

setup()

let c = getFirst(cursor)

let selected = false

onInput("w", () => {
  c.y -= 1
})
onInput("a", () => {
  c.x -= 1
})
onInput("s", () => {
  c.y += 1
})
onInput("d", () => {
  c.x += 1
})

onInput("k", () => {
  if (!selected) {
    let onPiece = false
    getTile(c.x, c.y).forEach((t) => {
      if (whitePieces.indexOf(t.type) >= 0) {
        onPiece = true
      }
    })
    if (onPiece) {
      selected = true
      addSprite(c.x, c.y, cursorSelected)
      drawMoves(c.x, c.y)
      //c = getFirst(cursorSelected)
    }
  } else {
    let onMove = false
    getTile(c.x, c.y).forEach((t) => {
      if (t.type == whiteSelected || t.type == blackSelected) {
        onMove = true
      }
    })
    if (onMove) {
      let piece
      let sel = getFirst(cursorSelected)
      getTile(sel.x, sel.y).forEach((t) => {
        if (whitePieces.indexOf(t.type) >= 0) {
          piece = t
        }
      })
      piece.x = c.x
      piece.y = c.y

      getAll(whiteSelected).forEach((t) => t.remove())
      getAll(blackSelected).forEach((t) => t.remove())
      getFirst(cursorSelected).remove()

      getTile(piece.x, piece.y).forEach((t) => {
        if (blackPieces.indexOf(t.type) >= 0) {
          t.remove()
        }
      })
      
      selected = false
    }
  }
})

onInput("l", () => {
  if (selected) {
    getAll(whiteSelected).forEach((t) => t.remove())
    getAll(blackSelected).forEach((t) => t.remove())
    getFirst(cursorSelected).remove()
    selected = false
  }
})
