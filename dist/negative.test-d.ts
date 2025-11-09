// @ts-nocheck
/// <reference path="./index.d.ts" />
import { expectError } from "tsd";
import { createConstructionSite, getObjectsByPrototype } from "game/utils";
import { StructureRampart } from "game/prototypes";

// Negative usage assertions are isolated here to avoid IDE squiggles in the main test file
expectError(createConstructionSite(1, 1));
expectError(getObjectsByPrototype());
expectError(createConstructionSite({ x: 1, y: 2 } as any, 123 as any));
