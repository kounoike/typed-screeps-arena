declare module "game/prototypes" {
    // self-import is unnecessary inside the same ambient module; remove and refer directly
    export interface Flag extends GameObject {
        readonly prototype: Flag;
        /**
         * Equals to true or false if the flag is owned.
         * Returns undefined if it is neutral.
         */
        my?: boolean;
    }

    interface FlagConstructor extends _Constructor<Flag>, _ConstructorById<Flag> {}
    export const Flag: FlagConstructor;
}
