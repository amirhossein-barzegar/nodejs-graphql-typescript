import { DataTypes, Model } from 'sequelize';
export class permissions extends Model {
    static initModel(sequelize) {
        return permissions.init({
            p_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            p_role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'ro_id'
                }
            },
            p_description: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'permissions',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "p_id" },
                    ]
                },
                {
                    name: "FK_permissions_p_role_id",
                    using: "BTREE",
                    fields: [
                        { name: "p_role_id" },
                    ]
                },
            ]
        });
    }
}
