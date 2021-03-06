/**
 * Created by apple on 2016/11/16.
 */
(function () {
    module.exports = function (sequelize, DataTypes) {
        return sequelize.define('hosptial',{
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING
            },
            level: {
                type: DataTypes.ENUM,
                values: [1,2,3,4,5,6,7,8,9]
            },
            area_id: {
                type: DataTypes.INTEGER,
                allowNul: false
            },
            address: {
                type: DataTypes.STRING
            },
            information: {
                type: DataTypes.TEXT('long')
            },
            telephoneNumber: {
                type: DataTypes.STRING
            }
        },{
            underscore: true
        });
    };
}).call(this);