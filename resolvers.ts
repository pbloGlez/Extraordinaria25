import {Character, House} from "./types.ts"

export const resolvers = {
    Query: {
        getCharacter: (_: unknown, args: {id: string}) : Character | null => {
            return character.find((c) => c.id === args.id) 
        },
        getCharacters: (_: unknown, args: {id?: string[]}) : Character[] =>{
            if(!args.id) return characters;
            return character.filter((c) => args.id!.includes(c.id));
        },
    },
    Character: {
        house: (parent: Character): House | null => {
            return parent.house
        },
    },
    House: {
        characters: (parent: House) : Character[] => {
            return parent.characters
        },
    },
};


