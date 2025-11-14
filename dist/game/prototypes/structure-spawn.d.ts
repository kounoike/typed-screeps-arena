declare module "game/prototypes" {
    import type {
        BodyPartConstant,
        DirectionConstant,
        ERR_BUSY,
        ERR_INVALID_ARGS,
        ERR_NOT_ENOUGH_ENERGY,
        ERR_NOT_OWNER,
        OK,
        ResourceConstant,
    } from "game/constants";
    import type { Creep, Store } from "game/prototypes";

    export interface Spawning {
        needTime: number;
        remainingTime: number;
        creep: Creep;
    }

    export type STRUCTURE_SPAWN = "spawn";
    // export const STRUCTURE_SPAWN: STRUCTURE_SPAWN;
    export interface StructureSpawn extends OwnedStructure<STRUCTURE_SPAWN> {
        /**
         * A Store object that contains a cargo of this structure. Spawns can contain only energy.
         */
        store: Store<ResourceConstant>;
        /**
         * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
         * @returns A creep on success or an errorcode on failure
         */
        spawnCreep(body: BodyPartConstant[]): {
            object?: Creep;
            error?: ERR_BUSY | ERR_INVALID_ARGS | ERR_NOT_ENOUGH_ENERGY;
        };
        spawning: Spawning | null;

        setDirections(directions: DirectionConstant[]): OK | ERR_NOT_OWNER | ERR_INVALID_ARGS;
        /**
         * get the directions where the creep should move when spawned.
         */
        directions: DirectionConstant[];
    }
    interface StructureSpawnConstructor extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {}

    export const StructureSpawn: StructureSpawnConstructor;
}
