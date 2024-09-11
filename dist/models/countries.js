import { DataTypes, Model } from 'sequelize';
export class countries extends Model {
    static initModel(sequelize) {
        return countries.init({
            co_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            co_code: {
                type: DataTypes.SMALLINT,
                allowNull: false,
                unique: "co_code"
            },
            co_flag: {
                type: DataTypes.STRING(500),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'countries',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "co_id" },
                    ]
                },
                {
                    name: "co_code",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "co_code" },
                    ]
                },
            ]
        });
    }
}
