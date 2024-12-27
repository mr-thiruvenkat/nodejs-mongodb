const StatusModel = require("../status/models");

const insertMultipleIfNotExists = async (status) => {
  try {
    await Promise.all(
      status.map(async (data) => {
        delete data._id;
        const existingDoc = await StatusModel.findOne({
          statusid: data.statusid,
        });
        if (!existingDoc) {
          const result = new StatusModel(data);
          await result.save();
        } else {
          console.log("Status Skipped.. Document already exists");
        }
      })
    );
  } catch (err) {
    console.error("Error inserting multiple documents:", err.message);
  }
};

function insertStatus() {
  const statusList = [
    {
      statusid: 1001,
      name: "Active",
    },
    {
      statusid: 1002,
      name: "In-Active",
    },
  ];
  insertMultipleIfNotExists(statusList);
}

module.exports = insertStatus;
