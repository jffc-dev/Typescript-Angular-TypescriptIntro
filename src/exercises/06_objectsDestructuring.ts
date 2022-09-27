interface Player {
    volume: number;
    second: number;
    song: string;
    details: Detail;
}

interface Detail{
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 30,
    song: 'Shape of you',
    details: {
        author: 'Ed Sheeran',
        year: 2020
    }
}

const {volume: vol, second, song, details: {author}} = player;

console.log("The current volume is: ", vol);
console.log("The current second is: ", second);
console.log("The current song is: ", song);
console.log("The current author is: ", author);

