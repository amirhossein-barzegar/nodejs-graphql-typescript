import { DataTypes, Model } from 'sequelize';
export class user_rooms extends Model {
    static initModel(sequelize) {
        return user_rooms.init({
            ur_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            ur_user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'u_id'
                }
            },
            ur_room_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'rooms',
                    key: 'r_id'
                }
            },
            ur_role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'ro_id'
                }
            }
        }, {
            sequelize,
            tableName: 'user_rooms',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "ur_id" },
                    ]
                },
                {
                    name: "FK_user_rooms_ur_role_id",
                    using: "BTREE",
                    fields: [
                        { name: "ur_role_id" },
                    ]
                },
                {
                    name: "FK_user_rooms_ur_room_id",
                    using: "BTREE",
                    fields: [
                        { name: "ur_room_id" },
                    ]
                },
                {
                    name: "FK_user_rooms_ur_user_id",
                    using: "BTREE",
                    fields: [
                        { name: "ur_user_id" },
                    ]
                },
            ]
        });
    }
}
