export class Dog {
    private readonly _age: number;
    private _color: string;

    constructor(age: number, color: string) {
        this._age = age;
        this._color = color;
    }

    get age(): number {
        return this._age;
    }
    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}
