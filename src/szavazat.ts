export default class szavazat {
    private _valasztoKerulet: string;
    private _kepviselo: string;
    private _egyesület: string;
    private _vezeteknev: string;
    private _utonev: string;
    private _part: string;

    public get ValasztoK(): string {
        return this._valasztoKerulet;
    }
    public get kepviselo(): string {
        return this._kepviselo;
    }
    public get egyesület(): string {
        return this._egyesület;
    }
    public get vezeteknev(): string {
        return this._vezeteknev;
    }
    public get utonev(): string {
        return this._utonev;
    }
    public get part(): string {
        return this._part;
    }

    constructor(sor: string) {
        const m: string[] = sor.split(" ");

        this._valasztoKerulet = m[0];
        this._kepviselo = m[1];
        this._egyesület = m[2];
        this._vezeteknev = m[3];
        this._utonev = m[4];
        this._part = m[5];
    }
}
