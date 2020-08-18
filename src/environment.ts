/**
 * @author WMXPY
 * @namespace Environment
 * @description Environment
 */

import { readTextFile, readTextFileSync } from "@sudoo/io";
import * as Path from "path";

export class Environment<Env extends Record<string, string>> {

    public static fromFileSync<Env extends Record<string, string>>(...paths: string[]): Environment<Env> {

        const path: string = Path.resolve(...paths);

        const raw: string = readTextFileSync(path);
        const environments: Env = JSON.parse(raw);

        return new Environment<Env>(environments);
    }

    public static async fromFile<Env extends Record<string, string>>(...paths: string[]): Promise<Environment<Env>> {

        const path: string = Path.resolve(...paths);

        const raw: string = await readTextFile(path);
        const environments: Env = JSON.parse(raw);

        return new Environment<Env>(environments);
    }

    private readonly _environments: Env;

    private constructor(environments: Env) {

        this._environments = environments;
    }

    public get environments(): Env {
        return this._environments;
    }

    public get<Key extends keyof Env>(key: Key): Env[Key] {

        return this._environments[key];
    }

    public has<Key extends keyof Env>(key: Key): boolean {

        if (this._environments[key]) {
            return true;
        }
        return false;
    }
}
