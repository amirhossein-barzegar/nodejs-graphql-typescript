import { DataTypes, Model } from 'sequelize';
export class contacts extends Model {
    static initModel(sequelize) {
        return contacts.init({
            c_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            c_alias: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            c_user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'u_id'
                }
            },
            c_owner_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'u_id'
                }
            }
        }, {
            sequelize,
            tableName: 'contacts',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "c_id" },
                    ]
                },
                {
                    name: "UK_contacts",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "c_user_id" },
                        { name: "c_owner_id" },
                    ]
                },
                {
                    name: "FK_contacts_c_owner_id",
                    using: "BTREE",
                    fields: [
                        { name: "c_owner_id" },
                    ]
                },
            ]
        });
    }
}
