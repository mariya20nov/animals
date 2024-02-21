import {useState} from "react";
import IAnimal from "../IAnimal";

const URL = "https://api.api-ninjas.com/v1/animals?name=";
const X_API_KEY = "NgQGIFyVFsqJP4ch0szcyg==YmVFqBKNd8Cmxlil";

interface IAnimalRaw {
    name: string;
    characteristics: {
        weight: string;
        diet: string;
        skin_type: string;
        lifespan: string;
    }
}
export const useFetch = (name?: string) => {
    const [data, setData] = useState<IAnimal[]>();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const fetchData = async () => {
        setIsPending(true);
        try {
            const response = await fetch(
                URL + name,
                {
                    headers: { "X-Api-Key": X_API_KEY },
                    cache: "force-cache",
                }
            );

            if (!response.ok) throw new Error(response.statusText);

            const json = await response.json();

            setIsPending(false);
            setData(json.map((item: IAnimalRaw) => ({
                name: item.name,
                range: 0,
                characteristics: {
                    weight: { value: item.characteristics.weight, like: false },
                    diet: { value: item.characteristics.diet, like: false },
                    skinType: { value: item.characteristics.skin_type, like: false },
                    lifespan: { value: item.characteristics.lifespan, like: false },
                }
            })));
            setError(null);
        } catch (error) {
            setError(`${error} Could not Fetch Data `);
            setIsPending(false);
        }
    };

    return {data, fetchData, isPending, error};
};