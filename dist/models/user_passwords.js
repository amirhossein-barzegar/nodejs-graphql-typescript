import { DataTypes, Model } from 'sequelize';
export class user_passwords extends Model {
    static initModel(sequelize) {
        return user_passwords.init({
            up_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            up_password: {
                type: DataTypes.STRING(400),
                allowNull: false
            },
            up_expires_at: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            },
            up_user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'u_id'
                }
            },
            up_type: {
                type: DataTypes.ENUM('0', '1'),
                allowNull: false,
                defaultValue: "0",
                comment: "0 => password , 1 => one-time-password"
            },
            up_used_at: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            },
            up_created_at: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'user_passwords',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "up_id" },
                    ]
                },
                {
                    name: "FK_user_passwords_up_user_id",
                    using: "BTREE",
                    fields: [
                        { name: "up_user_id" },
                    ]
                },
            ]
        });
    }
}
