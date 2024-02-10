import { ResourceConstant } from "game/constants"
import { GameObject, _Constructor } from "game/prototypes";

declare module "arena/prototypes" {
  export interface ScoreCollector extends GameObject {
    /**
     * The type of the resource this collector accepts.
     */
    resourceType: ResourceConstant;
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
