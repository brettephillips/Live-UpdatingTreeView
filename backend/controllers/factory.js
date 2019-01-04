exports.index = function(req, res) {
    res.json({
        status: "success",
        message: "Contacts retrieved successfully",
        data: "contacts"
    });
};