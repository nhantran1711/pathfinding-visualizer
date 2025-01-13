export const MAX_ROWS = 40;
export const MAX_COLS = 50;


export const START_TILE_CONFIGURATION = {
    row: 1,
    col: 1,
    isEnd: false,
    isStart: false,
    isWall: false,
    isPath: false,
    distance: 0,
    isTraversed: false,
    parent: null
}

export const END_TILE_CONFIGURATION = {
    row: MAX_ROWS - 2,
    col: MAX_COLS - 2,
    isEnd: false,
    isStart: false,
    isWall: false,
    isPath: false,
    distance: 0,
    isTraversed: false,
    parent: null
}