interface Character1 {
    name: string;
    hp: number;
    skills: string[];
    country?: String;
    showHp: ()=>void;
}

function heal(character: Character1, HpToHeal): void{

    character.hp += HpToHeal;
    console.log(character);
    

}

const newCharacter_t: Character1 = {
    name: "Javier",
    hp: 100,
    skills: [],
    showHp() {
        console.log("The character has " + this.hp + " life points");
    }
}

newCharacter_t.showHp();
heal(newCharacter_t,30);
newCharacter_t.showHp();