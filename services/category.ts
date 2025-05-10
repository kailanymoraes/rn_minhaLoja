import {data} from "../data/index";

export const getAllCategories = () =>{
    return data.categories;
}

export const getCategoryById=(pId: number) => {
    return data.categories.find(item => item.id === pId);
}