import { DataTypes, Model } from 'sequelize';
export class rooms extends Model {
    static initModel(sequelize) {
        return rooms.init({
            r_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            r_type: {
                type: DataTypes.ENUM('0', '1', '2'),
                allowNull: true
            },
            r_title: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            r_description: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            r_alias: {
                type: DataTypes.STRING(255),
                allowNull: true,
                comment: "برای اختصاص دادن آیدی برای کانال یا گروه مورد نظر استفاده میشود"
            },
            r_notif_status: {
                type: DataTypes.ENUM('f', 't'),
                allowNull: true,
                comment: "برای صدا دار یا بی صدا کردن کانال یا گروه مورد استفاده قرار میگیرد"
            }
        }, {
            sequelize,
            tableName: 'rooms',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "r_id" },
                    ]
                },
            ]
        });
    }
}
