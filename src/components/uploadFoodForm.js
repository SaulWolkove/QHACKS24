function UploadFoodForm() {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Retrieve form data
        const name = event.target.name.value;
        const foodGroup = event.target.foodGroup.value;
        const brand = event.target.brand.value;
        const expiryDate = event.target.expiryDate.value;

        // Do something with the form data (e.g., send it to a server)
        console.log("Food Name:", name);
        console.log("Food Group:", foodGroup);
        console.log("Brand:", brand);
        console.log("Expiry Date:", expiryDate);

        // You can add further processing or submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Food Name:
                <input type="text" name="name" required />
            </label>
            <br />
            <label>
                Food Group:
                <select name="foodGroup" required>
                    <option value="">Select Food Group</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Grains">Grains</option>
                    <option value="Protein">Protein</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Brand:
                <input type="text" name="brand" required />
            </label>
            <br />
            <label>
                Expiry Date:
                <input type="date" name="expiryDate" required />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UploadFoodForm;
