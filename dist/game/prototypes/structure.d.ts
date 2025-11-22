declare module "game/prototypes" {
    // don't restrict StructureConstant to known structure types, because some arena needs custom Structures
    export type StructureConstant = string;

    export interface StructureJSON extends RoomObjectJSON {
        hits: number;
        hitsMax: number;
    }
    export interface Structure<T extends StructureConstant = StructureConstant> extends GameObject {
        readonly prototype: Structure;

        /**
         * The current amount of hit points of the structure.
         */
        hits: number;
        /**
         * The total amount of hit points of the structure.
         */
        hitsMax: number;

        toJSON(): StructureJSON;
    }

    export const Structure: _Constructor<Structure>;
}
