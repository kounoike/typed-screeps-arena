declare module "arena/season_1/construct_and_control/advanced/prototypes" {
    import type { _Constructor, GameObject } from "game/prototypes";
    import type {
        EFFECT_SLOWDOWN,
        KIND_BLUE,
        KIND_GREEN,
        KIND_RED,
    } from "arena/season_1/construct_and_control/advanced/constants";

    type AreaEffectType = typeof EFFECT_SLOWDOWN;

    /** An object that applies an effect of the specified type to all creeps at the same tile */
    export interface AreaEffect extends GameObject {
        /** The effect type */
        readonly effect: AreaEffectType;
        readonly kind: typeof KIND_BLUE | typeof KIND_GREEN | typeof KIND_RED;
    }
    export const AreaEffect: _Constructor<AreaEffect>;
}
