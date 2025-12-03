import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
const RecipeList = ({ recipe, setSelectedRecipe, toggle }) => {
    if (!recipe) return null;


    return (

        <div>
            <h1>Recipe List</h1>
            <ListGroup>
                {recipe.map((item, index) => (
                    <ListGroupItem
                        onClick={() => {
                            setSelectedRecipe(item);
                            toggle();
                        }} key={index}
                    >
                        {item.title}
                    </ListGroupItem>
                ))}

            </ListGroup>
        </div>

    );
};
export default RecipeList;