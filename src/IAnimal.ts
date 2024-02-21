export interface ICharacteristic {
    value: string;
    like: boolean;
}

export interface ICharacteristics {
    weight: ICharacteristic;
    diet: ICharacteristic;
    skinType: ICharacteristic;
    lifespan: ICharacteristic;
}

interface IAnimal {
    name: string;
    range: number;
    characteristics: ICharacteristics
}

export default IAnimal;