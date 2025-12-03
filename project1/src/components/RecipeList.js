import React from "react";
import { Card, CardBody, CardTitle, CardTex, ListGroup, ListGroupItem } from "reactstrap";
const RecipeList = ({ recipe }) => {
    if (!recipe) {
        return null;
    }

    return (
        <>
            <div>
                <h1>Recipe List</h1>
                <ListGroup>
                    {recipe.map((item, index) => (
                        <ListGroupItem key={index}>{item.title} </ListGroupItem>
                    ))}

                </ListGroup>
            </div>
        </>
    );
};
export default RecipeList;