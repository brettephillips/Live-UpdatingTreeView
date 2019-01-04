module.exports = (sequelize, DataTypes) => {
    var Factory = sequelize.define('Factory', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        lower_bound: DataTypes.INTEGER,
        upper_bound: DataTypes.INTEGER
    });

    Factory.associate = function(models) {
        models.Factory.hasMany(models.Child);
    };

    return Factory;
};