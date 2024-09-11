import { DataTypes, Model } from 'sequelize';
export class profile_images extends Model {
    static initModel(sequelize) {
        return profile_images.init({
            p_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            p_user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'u_id'
                }
            },
            p_room_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_path: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            p_created_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_updated_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'profile_images',
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
                    name: "FK_profile_images_p_user_id",
                    using: "BTREE",
                    fields: [
                        { name: "p_user_id" },
                    ]
                },
            ]
        });
    }
}
