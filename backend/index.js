app.post('/addproduct', async (req, res) => {
  try {
    const { name, image, category, new_price, old_price } = req.body;

    // Validate required fields
    if (!name || !image || !category || !new_price || !old_price) {
      throw new Error("Missing required fields");
    }

    // Fetch existing products to determine the next id
    const products = await Product.find({});
    let id = 1; // Default id if no products exist

    if (products.length > 0) {
      // Get the last product's id and increment it
      id = products[products.length - 1].id + 1;
    }

    // Create a new product instance
    const product = new Product({
      id: id,
      name: name,
      image: image,
      category: category,
      new_price: new_price,
      old_price: old_price,
    });

    // Save the product to the database
    await product.save();
    console.log("Product saved successfully");

    // Respond with success message
    res.json({
      success: true,
      product: product,
    });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
});
