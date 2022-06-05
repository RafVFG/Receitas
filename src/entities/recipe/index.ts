import { Recipe } from "./interfaces/recipe";

export function recipe(data: Recipe) {
    let recipe: Record<string, any> = {};
    recipe["value"] = data;

    function getValue() {
        return data
    }

    return {
        getValue
    }
}