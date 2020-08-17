/**
 * @author WMXPY
 * @namespace Environment
 * @description Environment
 */

import { readTextFileSync, readTextFile } from "@sudoo/io";

export class Environment<Env extends Record<string, string>> {

    public static fromFileSync<Env extends Record<string, string>>(path: string): Environment<Env> {

        const raw: string = readTextFileSync(path);
        const environments: Env = JSON.parse(raw);

        return new Environment<Env>(environments);
    }

    public static async fromFile<Env extends Record<string, string>>(path: string): Promise<Environment<Env>> {

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
