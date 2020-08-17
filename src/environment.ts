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
}
