declare module "arena/season_3/escort_run/basic" {
    import { _Constructor, Creep } from "game/prototypes";
    export interface EscortCreep extends Creep {}
    export const EscortCreep: _Constructor<EscortCreep>;
}
