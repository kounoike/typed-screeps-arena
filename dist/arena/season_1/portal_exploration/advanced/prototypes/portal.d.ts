/// <reference path="../../../../../game/prototypes/index.d.ts" />
declare module "arena/season_1/portal_exploration/advanced/prototypes" {
    import type { _Constructor, GameObject } from "game/prototypes";

    /** A portal is a special type of game object that allows creeps to teleport */
    export interface Portal extends GameObject {
        /** The destination coordinates can't access in the advanced arena. */
    }
    export const Portal: _Constructor<Portal>;
}
