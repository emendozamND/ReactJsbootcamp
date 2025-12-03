import React, { useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

const RecipeForm = ({ addRecipe, loader }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // si falta algo, no hacemos nada
        if (!title || !description) {
            return;
        }

        // agregamos la receta
        addRecipe({ title, description });

        // limpiamos el formulario
        setTitle('');
        setDescription('');
    };
    return (
        <div className="d-flex justify-content-center mt-4">
            <Card style={{ maxWidth: '500px', width: '100%' }}>
                <CardHeader>
                    <h1 className="h4 mb-0 text-center">Add Recipe</h1>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                type="text"
                                value={title}
                                placeholder="Chocolate cake"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="mt-3">
                            <Label for="description">Description</Label>
                            <Input
                                id="description"
                                type="textarea"
                                value={description}
                                placeholder="Write the recipe description..."
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </FormGroup>

                        <div className="d-grid mt-4">
                            <Button color="primary" type="submit">
                                {loader ? "Loading..." : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default RecipeForm;
