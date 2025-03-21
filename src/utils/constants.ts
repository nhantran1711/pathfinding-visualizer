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

export const TILE_STYLE = "lg:w-[20px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[20px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-300 ";

export const TRAVERSED_TILE_STYLE = TILE_STYLE + "bg-cyan-300";
export const START_TILE_STYLE = TILE_STYLE +  "bg-green-200";
export const END_TILE_STYLE = TILE_STYLE + "bg-red-400";
export const WALL_TILE_STYLE = TILE_STYLE + "bg-gray-400";
export const PATH_TILE_STYLE = TILE_STYLE + "bg-green-400";

