import { _Constructor, _ConstructorById, OwnedStructure } from "game/prototypes";

declare module "arena/season_1/construct_and_control/basic/prototypes" {
    export type STRUCTURE_GOAL = "goal";

    /**
     * A StructureGoal is a structure that serves as an objective in certain arena scenarios.
     */
    export interface StructureGoal extends OwnedStructure<STRUCTURE_GOAL> {}
    interface StructureGoalConstructor extends _Constructor<StructureGoal>, _ConstructorById<StructureGoal> {}

    export const StructureGoal: StructureGoalConstructor;
}
