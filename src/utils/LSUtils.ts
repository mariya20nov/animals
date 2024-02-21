import IAnimal from "../IAnimal";

export const getFromLS = (): IAnimal[] => {
    return JSON.parse(localStorage.getItem('animalsList') ?? '[]');
}

export const sortInLS = () => {
    const newList = JSON.parse(localStorage.getItem('animalsList') ?? '[]')
        .sort( (item1: IAnimal, item2: IAnimal) => item1.range - item2.range);
    localStorage.setItem('animalsList', JSON.stringify(newList));
}

export const addToLS = (animal: IAnimal) => {
    localStorage.setItem('animalsList', JSON.stringify([...getFromLS(), animal]));
}

export const editInLS = (animal: IAnimal) => {
    localStorage.setItem('animalsList', JSON.stringify(
        getFromLS().map(item => item.name === animal.name ? animal : item)
    ));
}