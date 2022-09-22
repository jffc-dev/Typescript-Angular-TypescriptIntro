let skills = ['Bash','Counter','Healing']
// skills.push(10) -> invalid type

let skills_1: (boolean | string | number)[] = ['Bash','Counter','Healing']
skills_1.push(10)
skills_1.push(false)
skills_1.push("String")

// const character = {
//     name: 'Goku',
//     hp: 100,
//     skills: ['Bash', 'Counter']
// }

// // character.country = 'Test'; --> invalid property

interface Character {
    name: string;
    hp: number;
    skills: string[];
    country?: String;
}

const character: Character = {
    name: 'Goku',
    hp: 100,
    skills: ['Bash', 'Counter']
}

character.country = 'Test';