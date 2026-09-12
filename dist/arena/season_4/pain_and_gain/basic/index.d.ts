declare module "arena/season_4/pain_and_gain/basic" {
    import {
        EFF_ATTACK_MODIFIER,
        EFF_DAMAGE_TAKEN_MODIFIER,
        EFF_HEAL_MODIFIER,
        EFF_RANGED_ATTACK_MODIFIER,
    } from "game/constants";
    import { _Constructor, Flag } from "game/prototypes";
    export interface ScoreFlag extends Flag {
        effectType: EFF_ATTACK_MODIFIER | EFF_RANGED_ATTACK_MODIFIER | EFF_HEAL_MODIFIER | EFF_DAMAGE_TAKEN_MODIFIER;
        scorePerTick: number;
    }

    export const ScoreFlag: _Constructor<ScoreFlag>;
}
