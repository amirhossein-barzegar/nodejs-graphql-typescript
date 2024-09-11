import { DataTypes, Model } from 'sequelize';
export class users extends Model {
    static initModel(sequelize) {
        return users.init({
            u_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            u_username: {
                type: DataTypes.STRING(255),
                allowNull: true,
                unique: "u_username_3"
            },
            u_first_name: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            u_last_name: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            u_email: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            u_phone: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: "u_phone"
            },
            u_status: {
                type: DataTypes.ENUM('0', '1', '2'),
                allowNull: true
            },
            u_country_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'countries',
                    key: 'co_id'
                }
            },
            u_created_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            u_updated_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'users',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "u_id" },
                    ]
                },
                {
                    name: "u_phone",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "u_phone" },
                    ]
                },
                {
                    name: "u_username",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "u_username" },
                    ]
                },
                {
                    name: "u_username_2",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "u_username" },
                    ]
                },
                {
                    name: "u_username_3",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "u_username" },
                    ]
                },
                {
                    name: "FK_users_u_country_id",
                    using: "BTREE",
                    fields: [
                        { name: "u_country_id" },
                    ]
                },
            ]
        });
    }
}
