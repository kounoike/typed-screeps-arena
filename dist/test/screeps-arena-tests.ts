import {
  Creep,
  OwnedStructure,
  Structure,
  StructureContainer,
  StructureExtension,
  StructureRampart,
  StructureTower,
  StructureSpawn,
} from "game/prototypes";
import {
  ATTACK,
  HEAL,
  RANGED_ATTACK,
  RESOURCE_ENERGY,
  TOUGH,
  WORK,
  MOVE,
  CARRY,
} from "game/constants";
import { constants, prototypes } from "game";
import {
  createConstructionSite,
  getObjectsByPrototype,
  getTicks,
  findInRange,
  findPath,
  findClosestByPath,
  getObjectById,
  getTerrainAt,
  getDirection,
} from "game/utils";
import { Visual } from "game/visual";
import { CostMatrix, searchPath } from "game/path-finder";
import {
  BodyPart,
  Flag,
} from "arena/season_beta/capture_the_flag/basic/prototypes";
import {
  ScoreCollector,
  AreaEffect,
} from "arena/season_beta/collect_and_control/basic/prototypes";
import {
  EFFECT_DAMAGE,
  EFFECT_FREEZE,
  RESOURCE_SCORE,
} from "arena/season_beta/collect_and_control/basic/constants";

export function loop(): void {
  // $ExpectType number
  const ticks = getTicks();

  const attack = constants.ATTACK;
  const carry = constants.CARRY;
  const move = constants.MOVE;
  const work = constants.WORK;
  const tough = constants.TOUGH;
  const rangedAttack = constants.RANGED_ATTACK;
  const heal = constants.HEAL;

  // $ExpectType CostMatrix
  const costMatrix = new CostMatrix();

  // $ExpectType TerrainConstant
  const terrain = getTerrainAt({ x: 0, y: 0 });

  switch (terrain) {
    case constants.TERRAIN_PLAIN:
      break;
    case constants.TERRAIN_WALL:
      break;
    case constants.TERRAIN_SWAMP:
      break;
  }

  // $ExpectType Structure<StructureConstant>[]
  const structures = getObjectsByPrototype(Structure);

  // $ExpectType Structure<StructureConstant>[]
  const structures2 = getObjectsByPrototype(prototypes.Structure);

  // $ExpectType OwnedStructure<StructureConstant>[]
  const ownedStructures = getObjectsByPrototype(OwnedStructure);

  // $ExpectType OwnedStructure<StructureConstant>[]
  const ownedStructures2 = getObjectsByPrototype(prototypes.OwnedStructure);

  // $ExpectType StructureSpawn[]
  const spawns = getObjectsByPrototype(StructureSpawn);

  // $ExpectType StructureSpawn[]
  const spawns2 = getObjectsByPrototype(prototypes.StructureSpawn);

  // $ExpectType StructureContainer[]
  const containers = getObjectsByPrototype(StructureContainer);

  // $ExpectType StructureContainer[]
  const containers2 = getObjectsByPrototype(prototypes.StructureContainer);

  // $ExpectType StructureExtension[]
  const extensions = getObjectsByPrototype(StructureExtension);

  // $ExpectType StructureExtension[]
  const extensions2 = getObjectsByPrototype(prototypes.StructureExtension);

  // $ExpectType StructureTower[]
  const myTowers = getObjectsByPrototype(StructureTower);

  // $ExpectType StructureTower[]
  const myTowers2 = getObjectsByPrototype(prototypes.StructureTower);

  // $ExpectType Creep[]
  const myCreeps = getObjectsByPrototype(Creep).filter((i) => i.my);

  // $ExpectType Creep[]
  const myCreeps2 = getObjectsByPrototype(prototypes.Creep).filter((i) => i.my);

  // $ExpectType Creep[]
  const enemyCreeps = getObjectsByPrototype(Creep).filter((i) => !i.my);

  // $ExpectType BodyPart[]
  const bodyParts = getObjectsByPrototype(BodyPart);

  // $ExpectType Flag | undefined
  const enemyFlag = getObjectsByPrototype(Flag).find((i) => !i.my);

  // $ExpectType Creep
  const creepForId = myCreeps[0];

  // $ExpectType Creep | undefined
  const myCreep = getObjectsByPrototype(Creep).find((i) => i.my);

  if (myCreep && enemyFlag) {
    // $ExpectType SearchPathResult
    const { path } = searchPath(myCreep, enemyFlag);

    if (path[0]) {
      // $ExpectType DirectionConstant
      const direction = getDirection(
        path[0].x - myCreep.x,
        path[0].y - myCreep.y
      );

      // $ExpectType CreepMoveResult
      myCreep.move(direction);
    }
  }

  // Test getObjectById
  if (myCreep) {
    // $ExpectType Creep | null
    const creepFromId = getObjectById(myCreep.id);
  }

  // TODO: Test other creep actions

  // $ExpectType StructureTower | undefined
  const myTower = getObjectsByPrototype(StructureTower).find((i) => i.my);

  // Test Store object
  if (myTower) {
    // $ExpectType number
    const energyStored = myTower.store[RESOURCE_ENERGY];

    // $ExpectType number | null
    const maxCapacity = myTower.store.getCapacity(RESOURCE_ENERGY);

    // $ExpectType TowerAttackResult
    myTower.attack(enemyCreeps[0]);

    // $ExpectType Creep | null
    const findClosestByRange = myTower.findClosestByRange(
      getObjectsByPrototype(Creep).filter((i) => !i.my)
    );

    // $ExpectType Creep[]
    const findInRangeResult = myTower.findInRange(enemyCreeps, 1);

    // $ExpectType Position[]
    const findPathToResult = myTower.findPathTo(findInRangeResult[0]);

    // TODO: Test findPathTo with options

    // $ExpectType Creep | null
    const findClosestByPathResult = myTower.findClosestByPath(enemyCreeps);

    // TODO: Test findClosestByPath with options

    // $ExpectType Creep[]
    const utilsFindInRangeResult = findInRange(myTower, enemyCreeps, 1);

    // $ExpectType Position[]
    const utilsFindPathResult = findPath(myTower, utilsFindInRangeResult[0]);

    // $ExpectType Creep
    const utilsFindClosestByPathResult = findClosestByPath(
      myTower,
      enemyCreeps
    );

    // TODO: Test findClosestByPath with options

    if (enemyFlag) {
      const positions: Array<Creep | Flag> = [...enemyCreeps, enemyFlag];
      // $ExpectType (Creep | Flag)[]
      const findInRangeMultipleTypesOfPositions = myTower.findInRange(
        positions,
        1
      );
    }
  }

  // $ExpectType StructureSpawn | undefined
  const mySpawn = spawns.find((i) => i.my);

  // Test Spawn object
  if (mySpawn) {
    // $ExpectType number
    const energyStored = mySpawn.store[RESOURCE_ENERGY];

    // $ExpectType number | null
    const maxCapacity = mySpawn.store.getCapacity(RESOURCE_ENERGY);

    // $ExpectType SpawnCreepResult
    const spawnResult = mySpawn.spawnCreep([
      WORK,
      MOVE,
      CARRY,
      TOUGH,
      ATTACK,
      RANGED_ATTACK,
      HEAL,
    ]);

    if (spawnResult.object) {
      // $ExpectType Creep
      const creepBeingSpawned = spawnResult.object;
    }

    // $ExpectType Spawning | undefined
    const spawning = mySpawn.spawning;

    if (spawning) {
      // $ExpectType Creep
      const creepBeingSpawned = spawning.creep;

      // $ExpectType number
      const remainingTime = spawning.remainingTime;

      // $ExpectType number
      const needTime = spawning.needTime;

      // $ExpectType 0 | -1
      const result = spawning.cancel();
    }
  }

  // $ExpectType Creep | undefined
  const creepWithScore = myCreeps.find((i) => i.store[RESOURCE_SCORE] > 0);

  // $ExpectType ScoreCollector | undefined
  const scoreCollector = getObjectsByPrototype(ScoreCollector).find(
    (i) => i.resourceType === RESOURCE_SCORE
  );

  // Test ScoreCollector object
  if (creepWithScore && scoreCollector) {
    // $ExpectType boolean
    const isOwner = scoreCollector.my;

    // $ExpectType number
    const scoreStored = creepWithScore.store[scoreCollector.resourceType];

    // $ExpectType CreepTransferResult
    creepWithScore.transfer(
      scoreCollector,
      scoreCollector.resourceType,
      scoreStored
    );
  }

  // $ExpectType AreaEffect[]
  const areaEffects = getObjectsByPrototype(AreaEffect);

  // $ExpectType AreaEffect | undefined
  const freezeEffects = areaEffects.find((x) => x.effect === EFFECT_FREEZE);

  // $ExpectType AreaEffect | undefined
  const damageEffects = areaEffects.find((x) => x.effect === EFFECT_DAMAGE);

  // $ExpectType CreateConstructionSiteResult<StructureRampart>
  const rampart1 = createConstructionSite(10, 10, StructureRampart);

  // $ExpectType CreateConstructionSiteResult<StructureRampart>
  const rampart2 = createConstructionSite(10, 10, prototypes.StructureRampart);

  // $ExpectType StructureRampart | undefined
  rampart2.object?.structure;

  // TODO: Test all buildable structure types

  // $ExpectType CreateConstructionSiteResult<StructureTower>
  const towerSite = createConstructionSite(10, 10, StructureTower);

  // Test overload createConstructionSite

  // $ExpectType CreateConstructionSiteResult<BuildableStructure>
  createConstructionSite({ x: 10, y: 10 }, StructureRampart);

  if (myTower) {
    // $ExpectType CreateConstructionSiteResult<BuildableStructure>
    createConstructionSite(myTower, StructureRampart);
  }

  // TODO: Test utils find methods, these methods are used by other methods.

  const pos1 = { x: 10, y: 9.5 };
  const pos2 = { x: 11, y: 10.5 };
  const pos3 = { x: 12, y: 9.5 };

  // $ExpectType Visual
  const visual = new Visual(10, true);

  // $ExpectType Visual
  visual
    .clear()
    .text("100", pos1, {
      font: "0.5",
      opacity: 0.7,
      backgroundColor: "#808080",
      backgroundPadding: 0.03,
    })
    .circle(pos1, {
      fill: "transparent",
      radius: 0.45,
      stroke: "cyan",
      opacity: 0.5,
    })
    .rect(pos1, 3, 3, { fill: "#000000", opacity: 0.3 })
    .line(pos1, pos2, { width: 0.1, color: "#FFFFFF", opacity: 0.5 })
    .poly([pos1, pos2, pos3], {
      stroke: "#FF0000",
      strokeWidth: 0.1,
      opacity: 0.5,
    });
}
