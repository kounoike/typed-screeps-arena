/// <reference path="../../../../../game/prototypes/index.d.ts" />
declare module "arena/season_1/portal_exploration/basic/prototypes" {
    import { _Constructor, GameObject } from "game/prototypes";

    /** A portal is a special type of game object that allows creeps to teleport */
    export interface Portal extends GameObject {
        /** The destination coordinates of the portal */
        readonly destination: { x: number; y: number };
    }
    export const Portal: _Constructor<Portal>;
}
