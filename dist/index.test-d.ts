/// <reference path="./index.d.ts" />
// tsd-style type assertion tests (no runtime logic)
import { expectType, expectAssignable, expectError } from "tsd";
import {
    Creep,
    StructureTower,
    StructureRampart,
    Structure,
    OwnedStructure,
    Resource,
    ConstructionSite,
} from "game/prototypes";
import type { BuildableStructure } from "game/constants";
import { ScoreCollector } from "arena/prototypes";
import { RESOURCE_ENERGY } from "game/constants";
import { RESOURCE_SCORE, RESOURCE_SCORE_X, RESOURCE_SCORE_Y, RESOURCE_SCORE_Z } from "arena/constants";
import { getObjectsByPrototype, findInRange, findClosestByPath, findPath, createConstructionSite } from "game/utils";

// Id type
declare const creep: Creep;
expectType<number | string>(creep.id);

// getObjectsByPrototype inference
const creeps = getObjectsByPrototype(Creep);
expectType<Creep[]>(creeps);
const myCreeps = creeps.filter((c) => c.my);
expectType<Creep[]>(myCreeps);

// Structures
const structures = getObjectsByPrototype(Structure);
expectType<Structure[]>(structures);
const ownedStructures = getObjectsByPrototype(OwnedStructure);
expectType<OwnedStructure[]>(ownedStructures);

// Tower store access
declare const tower: StructureTower;
expectType<number>(tower.store[RESOURCE_ENERGY]);
expectType<number | null>(tower.store.getCapacity(RESOURCE_ENERGY));

// Path / range helpers on GameObject
declare const enemyCreeps: Creep[];
expectType<Creep | null>(tower.findClosestByRange(enemyCreeps));
expectType<Creep | null>(tower.findClosestByPath(enemyCreeps));
expectType<Creep[]>(tower.findInRange(enemyCreeps, 1));
expectType<Creep[]>(findInRange(tower, enemyCreeps, 1));
expectType<import("game/path-finder").PathStep[]>(findPath(tower, enemyCreeps[0]));
expectType<Creep>(findClosestByPath(tower, enemyCreeps));

// Resource extends GameObject
declare const resource: Resource;
expectType<number | string>(resource.id);
expectType<number>(resource.amount);

// ScoreCollector assertions
declare const collector: ScoreCollector;
expectType<boolean>(collector.my);
expectType<number>(collector.score);
expectType<number>(collector.scoreTotal);

// Creeps transferring score resources (methods return codes / void not asserted here)
declare const scoringCreep: Creep;
expectType<number>(scoringCreep.store[RESOURCE_SCORE]);
expectType<number>(scoringCreep.store[RESOURCE_SCORE_X]);
expectType<number>(scoringCreep.store[RESOURCE_SCORE_Y]);
expectType<number>(scoringCreep.store[RESOURCE_SCORE_Z]);

// Construction site creation result object shape
const rampartResult = createConstructionSite(10, 10, StructureRampart);
expectType<ConstructionSite<StructureRampart> | undefined>(rampartResult.object);
const towerResult = createConstructionSite(15, 15, StructureTower);
expectType<ConstructionSite<StructureTower> | undefined>(towerResult.object);

// Overload style (position object) - assume accepted
expectType<ConstructionSite<BuildableStructure> | undefined>(
    createConstructionSite({ x: 1, y: 2 }, StructureRampart).object
);

// Assignability checks
expectAssignable<ConstructionSite<StructureTower>>(towerResult.object!);
expectAssignable<Creep>(myCreeps[0]!);
