import szavazat from "./szavazat";
import fs from "fs";

export default class Megoldás {
    private _Szavazatok: szavazat[] = [];
    public get JelöltekSzáma(): number {
        return this._Szavazatok.length;
    }
    public get SzavazatokSzam(): number {
        let szavazat: number = 0;
        for (let index = 0; index < this._Szavazatok.length; index++) {
            szavazat = szavazat + parseInt(this._Szavazatok[index].kepviselo);
        }
        return szavazat;
    }
    public get Szazalek(): number {
        let szavazat: number = 0;
        let szorzo: number = 0;
        const szavazatok: number = 4694;
        let aktSzazalek: number = 0;
        for (let index = 0; index < this._Szavazatok.length; index++) {
            szavazat = szavazat + parseInt(this._Szavazatok[index].kepviselo);
        }
        szorzo = 12345 / 100; //123,45 = 1 %
        aktSzazalek = szavazatok / szorzo; //38.02%
        aktSzazalek = parseInt(aktSzazalek.toFixed(2));
        return aktSzazalek;
    }
    public constructor(forrás: string) {
        const sorok: string[] = fs.readFileSync(forrás).toString().split("\n");
        for (let i = 1; i < sorok.length; i++) {
            if (sorok[i].length != 0) {
                this._Szavazatok.push(new szavazat(sorok[i]));
            }
        }
    }
}
