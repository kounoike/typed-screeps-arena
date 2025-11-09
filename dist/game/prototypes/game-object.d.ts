// filepath: /home/kounoike/ghq/github.com/kounoike/typed-screeps-arena/dist/game/prototypes/game-object.d.ts
declare module "game/prototypes" {
    import { FindPathOpts, PathStep } from "game/path-finder";
    export interface RoomObjectJSON {
        id: number;
        x: number;
        y: number;
    }

    export interface EffectData {
        multiplier: number;
    }

    export interface Effect {
        /** The effect type */
        effectType: string;
        /** End time of the effect (represented by tick) */
        endTime: number;
        /** multiplier data */
        data: EffectData;
    }

    export interface GameObject extends Position {
        /**
         * A unique object identificator.
         * You can use {@link getObjectById} method to retrieve an object instance by its id.
         */
        id: Id<this>;

        /**
         * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
         */
        exists: boolean;

        /**
         * If defined, then this object will disappear after this number of ticks.
         */
        ticksToDecay?: number;

        /**
         * Get linear range to another position. pos may be any object containing x and y properties.
         */
        getRangeTo(pos: Position): number;

        /**
         * Returns the path from this object to another position. pos can be any object containing x and y properties. See /game/utils::findPath for details.
         */
        findPathTo(pos: Position, opts?: FindPathOpts): PathStep[];

        /**
         * Find all positions from the given positions array within the specified linear range.
         */
        findInRange<T extends Position>(positions: T[], range: number): T[];

        /**
         * Find a position with the shortest linear distance from the given position, or null otherwise.
         */
        findClosestByRange<T extends Position>(positions: T[]): T | null;

        /**
         * Find a position with the shortest path from the given position, or null otherwise.
         * @param opts object containing additional options:
         * ignore: array (objects which should be treated as obstacles during the search)
         * Any options supported by searchPath method
         */
        findClosestByPath<T extends Position>(positions: T[], opts?: FindPathOpts): T | null;

        toJSON(): RoomObjectJSON;

        /**
         * An array of effects on this object.
         * question: Can be either null/undefined if no effects are present?
         * for Creep, it is always defined (empty array if no effects are present).
         * for other objects, it can be undefined if no effects are present (is there anyway to get effect?).
         */
        effects?: Effect[] | null;

        /**
         * If this object's owner will changed by a Flag, this property will contain a reference to that Flag.
         */
        controlledBy?: Flag;
    }
}
