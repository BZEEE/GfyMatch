/**
 * Vec2.ts
 * John Smolley
 * November 11, 2018
 */

import {
    Vector,
} from "../MasterExports";

export class Vec2 extends Vector<Vec2> {

    /**
     * Generates new Vec2 object with given values
     * @param x
     * @param y
     */
    public static FromValues( x: number, y: number ) {
        return new Vec2(x, y);
    }

    /**
     * Returns deep copy of source object
     * @param src
     */
    public static Clone( src: Vec2 ) {
        return new Vec2( src.X, src.Y );
    }

    public constructor( x: number, y: number ) {
        super();
        this.SetAs(x, y);
    }

    /**
     * Returns new deep copy
     */
    public Clone(): Vec2 {
        return Vec2.Clone(this);
    }

    /**
     * Sets all components by value
     * @param x
     * @param y
     */
    public SetAs(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    public GetComponentCount() {
        return 2;
    }

    public get X(): number {
        return this.Data[0];
    }

    public set X(x: number) {
        this.Data[0] = x;
    }

    public get Y(): number {
        return this.Data[1];
    }

    public set Y(y: number) {
        this.Data[1] = y;
    }
}
