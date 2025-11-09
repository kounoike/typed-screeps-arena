import { expectType } from "tsd";
import { arenaInfo } from "game";
import { GameObject, Resource, Structure } from "game/prototypes";

// arenaInfo basic properties
expectType<string>(arenaInfo.name);
expectType<number>(arenaInfo.level);
expectType<string>(arenaInfo.season);
expectType<number>(arenaInfo.ticksLimit);

// GameObject id type (number | string)
expectType<number | string>((null as any as GameObject).id);

// Resource should extend GameObject
expectType<number | string>((null as any as Resource).id);

// Structure hits/hitsMax
expectType<number>((null as any as Structure).hits);
expectType<number>((null as any as Structure).hitsMax);
