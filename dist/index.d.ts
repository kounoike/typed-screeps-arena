// Project: https://github.com/screepers/typed-screeps-arena
// Definitions by: thmsn <https://github.com/thmsndk>
//                 Skyler Kehren <https://github.com/pyrodogg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference path="game/index.d.ts" />
/// <reference path="arena/index.d.ts" />
/// <reference path="arena/season_alpha/capture_the_flag/basic.d.ts" />
/// <reference path="arena/season_alpha/capture_the_flag/advanced.d.ts" />
/// <reference path="arena/season_alpha/collect_and_control/basic.d.ts" />
/// <reference path="arena/season_alpha/collect_and_control/advanced.d.ts" />
/// <reference path="arena/season_beta/capture_the_flag/basic.d.ts" />
/// <reference path="arena/season_beta/capture_the_flag/advanced.d.ts" />
/// <reference path="arena/season_beta/collect_and_control/basic.d.ts" />
/// <reference path="arena/season_beta/collect_and_control/advanced.d.ts" />
/// <reference path="arena/season_1/construct_and_control/basic/basic.d.ts" />
/// <reference path="arena/season_1/portal_exploration/basic/basic.d.ts" />

// Re-export prototypes to ensure ambient module "game/prototypes" is surfaced when compiling only with index.d.ts
export * from "game/prototypes";
