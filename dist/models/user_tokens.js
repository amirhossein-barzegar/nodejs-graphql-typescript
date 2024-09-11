import { DataTypes, Model } from 'sequelize';
export class user_tokens extends Model {
    static initModel(sequelize) {
        return user_tokens.init({
            ut_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            ut_token: {
                type: DataTypes.STRING(400),
                allowNull: false
            },
            ut_agent: {
                type: DataTypes.STRING(300),
                allowNull: true
            },
            ut_ip: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            ut_status: {
                type: DataTypes.ENUM('0', '1', '2'),
                allowNull: false,
                defaultValue: "0",
                comment: "وضعیت توکن به طوری که 0 => غیرفعال 1 => فعال 2 => منقضی شده"
            },
            ut_user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'u_id'
                }
            },
            ut_created_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ut_expires_at: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'user_tokens',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "ut_id" },
                    ]
                },
                {
                    name: "FK_user_tokens_ut_user_id",
                    using: "BTREE",
                    fields: [
                        { name: "ut_user_id" },
                    ]
                },
            ]
        });
    }
}
