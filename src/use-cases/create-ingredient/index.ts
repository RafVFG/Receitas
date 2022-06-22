import { Ingredient } from "../../entities/ingredient/interfaces/ingredient";
import { ingredient } from "../../entities/ingredient";
import { Item } from "../../entities/recipe/interfaces/recipe"
import { CreateIngredientMethods } from "./interfaces/methods";
import { IngredientRepositoryMethods } from "../../repositories/ingredient/interface/methods";

export function createIngredient(ingredientRepository: IngredientRepositoryMethods): CreateIngredientMethods {
    async function run(data: Ingredient[]): Promise<Item[] | null> {
        const ingredients = data.map((item) => {
          const ingredientOrError = ingredient(item)

          if (!ingredientOrError) return null;
          
         const validIngredient = ingredientOrError.getValue()

          const id = ingredientRepository.create(validIngredient.name) 
         return {
            id,
            idUnit: validIngredient.idUnit,
            amaunt: validIngredient.amaunt
         }
          
        })

         
        
        return ingredients;
    };

    return {
        run
    }
}