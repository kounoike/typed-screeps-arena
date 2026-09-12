declare module "arena/season_4/escort_run/basic" {
    import { _Constructor, Creep } from "game/prototypes";
    export interface EscortCreep extends Creep {}
    export const EscortCreep: _Constructor<EscortCreep>;
}
