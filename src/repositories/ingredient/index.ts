import { Ingredient } from "../../entities/ingredient/interfaces/ingredient";
import { connection } from "../../main/config/connection-mysql";
import { IngredientRepositoryMethods } from "./interface/methods";


export function IngredientRepository(): IngredientRepositoryMethods {
    const database = connection();

    async function create(data: Ingredient): Promise<void> {
        const ingredient = {
            name: data.name,
            amaunt: data.amaunt
        };

        await database.execute(
            `insert into ingredient (
                name,
                idUnit,
                amaunt)
            values (
                '${ingredient.name}',
                '${ingredient.amaunt}'
            );`
            
        )
    }

    return {
        create
    }
}