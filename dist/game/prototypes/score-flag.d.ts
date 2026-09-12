declare module "game/prototypes" {
    import {
        EFF_ATTACK_MODIFIER,
        EFF_DAMAGE_TAKEN_MODIFIER,
        EFF_HEAL_MODIFIER,
        EFF_RANGED_ATTACK_MODIFIER,
        EFF_FATIGUE_MODIFIER,
        EFF_HITS_LOSS,
    } from "game/constants";
    import { Flag } from "game/prototypes";
    export interface ScoreFlag extends Flag {
        effectType:
            | EFF_ATTACK_MODIFIER
            | EFF_RANGED_ATTACK_MODIFIER
            | EFF_HEAL_MODIFIER
            | EFF_DAMAGE_TAKEN_MODIFIER
            | EFF_FATIGUE_MODIFIER
            | EFF_HITS_LOSS;
        scorePerTick: number;
    }
    export const ScoreFlag: _Constructor<ScoreFlag>;
}
