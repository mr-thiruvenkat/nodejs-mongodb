const CategoryModel = require("../category/models");

const insertMultipleIfNotExists = async (category) => {
  try {
    await Promise.all(
      category.map(async (data) => {
        delete data._id;
        const existingDoc = await CategoryModel.findOne({ name: data.name });
        if (!existingDoc) {
          const result = new CategoryModel(data);
          await result.save();
        } else {
          console.log("Skipped.. Document already exists");
        }
      })
    );
  } catch (err) {
    console.error("Error inserting multiple documents:", err.message);
  }
};

function insertCategory() {
  const categories = [
    {
      name: "Maternity Wear",
    },
    {
      name: "Western",
    },
    {
      name: "Ethnic Wear",
    },
    {
      name: "Winter Essentials",
    },
    {
      name: "Summer Essentials",
    },
    {
      name: "Sleepwear",
    },
    {
      name: "Footwear",
    },
    {
      name: "Accessories",
    },
  ];
  insertMultipleIfNotExists(categories);
}

module.exports = insertCategory;
