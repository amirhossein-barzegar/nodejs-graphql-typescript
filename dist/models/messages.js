import { DataTypes, Model } from 'sequelize';
export class messages extends Model {
    static initModel(sequelize) {
        return messages.init({
            m_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            m_sender_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            m_receiver_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            m_type: {
                type: DataTypes.ENUM('0', '1', '2', '3', '4'),
                allowNull: true,
                comment: "باید قرارداد کنم"
            },
            m_content: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            m_sender_type: {
                type: DataTypes.ENUM('u', 'r'),
                allowNull: false,
                defaultValue: "u",
                comment: "برای تعیین نوع فرستنده که ممکن است یک کاربر و یا یک چت باشد"
            },
            m_receiver_type: {
                type: DataTypes.ENUM('u', 'r'),
                allowNull: false,
                defaultValue: "u",
                comment: "برای تعیین نوع گیرنده که ممکن است یک کاربر و یا یک چت باشد"
            },
            m_seen: {
                type: DataTypes.ENUM('0', '1'),
                allowNull: false,
                defaultValue: "0"
            },
            m_forwarded_from: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'messages',
                    key: 'm_id'
                }
            },
            m_reply_to: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'messages',
                    key: 'm_id'
                }
            },
            m_reactions: {
                type: DataTypes.JSON,
                allowNull: true
            },
            m_mentions: {
                type: DataTypes.JSON,
                allowNull: true
            },
            m_created_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            m_updated_at: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'messages',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "m_id" },
                    ]
                },
                {
                    name: "FK_messages_m_forwarded_from",
                    using: "BTREE",
                    fields: [
                        { name: "m_forwarded_from" },
                    ]
                },
                {
                    name: "FK_messages_m_reply_to",
                    using: "BTREE",
                    fields: [
                        { name: "m_reply_to" },
                    ]
                },
            ]
        });
    }
}
