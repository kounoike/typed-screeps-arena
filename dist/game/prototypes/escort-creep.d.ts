declare module "game/prototypes" {
    export interface EscortCreep extends Creep {
        // no additional properties
    }

    interface EscortCreepConstructor extends _Constructor<EscortCreep>, _ConstructorById<EscortCreep> {}

    export const EscortCreep: EscortCreepConstructor;
}
