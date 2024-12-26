import { RESOURCE_SCORE } from "arena/season_beta/collect_and_control/basic/constants";
import { GameObject, _Constructor } from "game/prototypes";

declare module "arena/season_beta/collect_and_control/basic/prototypes" {
  export interface ScoreCollector extends GameObject {
    /**
     * The type of the resource this collector accepts.
     */
    resourceType: RESOURCE_SCORE;
    /**
     * Whether you have control over this collector.
     */
    my: boolean;
    /**
     * Current collected score number of the owner player.
     */
    score: number;
    /**
     * Total number of score needed to win instantly.
     */
    scoreTotal: number;
  }

  export const ScoreCollector: _Constructor<ScoreCollector>;
}
