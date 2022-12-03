import { expect } from 'chai'

type Character = {
    name: string;
    health: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

const generateCharacter = (name: string): Character => {
    const strength = throwDices();
    const dexterity = throwDices();
    const constitution = throwDices();
    const intelligence = throwDices();
    const wisdom = throwDices();
    const charisma = throwDices();
    return { name, health: 10 - Math.floor((constitution - 10)/2), strength: strength, dexterity: dexterity, constitution: constitution, intelligence: intelligence, wisdom: wisdom, charisma: charisma }; 
}

const throwDices = (): number => {
    let dices: number[] = new Array(4)
    let sum = 0;
    let min = 0;
    for(let i=0; i<4; i++){
        dices[i] = (Math.floor(Math.random() * 6) + 1);
        sum += dices[i];
        if(i==0 || min > dices[i]){
            min = dices[i];
        }
    }
    sum -= min;
    return sum;
}

describe('[Backend] Level 1', () => {
    it('Should create a character with correct stats', () => {
        const character = generateCharacter('ShadowyDnD')
        expect(character.name).eq('ShadowyDnD')
        expect(character.strength).greaterThan(0);
        expect(character.dexterity).greaterThan(0);
        expect(character.constitution).greaterThan(0);
        expect(character.intelligence).greaterThan(0);
        expect(character.wisdom).greaterThan(0);
        expect(character.charisma).greaterThan(0);
        expect(10 - Math.floor((character.constitution - 10)/2)).eq(character.health);
    })
})
