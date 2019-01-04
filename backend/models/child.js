module.exports = (sequelize, DataTypes) => {
    var Child = sequelize.define('Child', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        number: DataTypes.INTEGER,
        factory_id: DataTypes.INTEGER.UNSIGNED
    });

    Child.associate = function(models) {
        models.Child.belongsTo(models.Factory, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Child;
};