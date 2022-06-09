import { Unit } from "./interfaces/unit";

export function unit(data: Unit) {
    let unit: Record<string, any> = {};
    unit["value"] = data;
    
    function getValue() {
        return data
    }

    return {
        getValue
    }
}