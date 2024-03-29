import { RecipeRepositoryMethods } from "./interfaces/methods";
import { connection } from "../../main/config/connection-mysql";
import { Recipe } from "../../entities/recipe/interfaces/recipe";

export function recipeRepository(): RecipeRepositoryMethods {
    const database = connection();

    async function create(data: Recipe): Promise<void> {
        const recipe = {
            name: data.name, 
            rating: data.rating,
            prepTipe: data.prepTime,
            yields: data.yields
        };

        const { insertId } = await database.execute(
            `insert into recipe (
                name,
                rating,
                prepTime,
                yields)
             values (
                '${recipe.name}',
                ${recipe.rating},
                '${recipe.prepTipe}',
                ${recipe.yields}
            )`
        );
        
        const recipeIngredients = data.ingredients.map((ingredient) => {
            return `(${insertId}, ${ingredient.id}, ${ingredient.idUnit}, '${ingredient.amaunt}')`
        });

        await database.execute(
            `insert into recipe_ingredient (
                idRecipe,
                idIngredient,
                idUnit,
                amaunt)
                values ${recipeIngredients}`
        )   
    };
    
    return {
        create
    }
}
