import { DataTypes, Model } from 'sequelize';
export class roles extends Model {
    static initModel(sequelize) {
        return roles.init({
            ro_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            ro_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'roles',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "ro_id" },
                    ]
                },
            ]
        });
    }
}
