declare module "arena/season_1/construct_and_control/advanced/prototypes" {
    import { _Constructor, GameObject } from "game/prototypes";
    import { EFFECT_SLOWDOWN } from "arena/season_1/construct_and_control/advanced/constants";

    type AreaEffectType = typeof EFFECT_SLOWDOWN;

    /** An object that applies an effect of the specified type to all creeps at the same tile */
    export interface AreaEffect extends GameObject {
        /** The effect type */
        readonly effect: AreaEffectType;
    }
    export const AreaEffect: _Constructor<AreaEffect>;
}
