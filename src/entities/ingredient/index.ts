import { Ingredient } from "./interfaces/ingredient";

export function ingredient(data: Ingredient) {
    let ingredient: Record <string, any> = {};
    ingredient ["value"] = data;

    function getValue() {
        return data
    }

    return {
        getValue
    }
}