import React, { useState } from "react";

const PlayerForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Access formData to get the entered values
        // Add logic to handle form submission (e.g., send data to the server)
    };

    return (
        <div id='new-player-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="breed">Breed:</label>
                <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PlayerForm;