import { contacts as _contacts } from "./contacts";
import { countries as _countries } from "./countries";
import { messages as _messages } from "./messages";
import { permissions as _permissions } from "./permissions";
import { profile_images as _profile_images } from "./profile_images";
import { roles as _roles } from "./roles";
import { rooms as _rooms } from "./rooms";
import { user_passwords as _user_passwords } from "./user_passwords";
import { user_rooms as _user_rooms } from "./user_rooms";
import { user_tokens as _user_tokens } from "./user_tokens";
import { users as _users } from "./users";
export { _contacts as contacts, _countries as countries, _messages as messages, _permissions as permissions, _profile_images as profile_images, _roles as roles, _rooms as rooms, _user_passwords as user_passwords, _user_rooms as user_rooms, _user_tokens as user_tokens, _users as users, };
export function initModels(sequelize) {
    const contacts = _contacts.initModel(sequelize);
    const countries = _countries.initModel(sequelize);
    const messages = _messages.initModel(sequelize);
    const permissions = _permissions.initModel(sequelize);
    const profile_images = _profile_images.initModel(sequelize);
    const roles = _roles.initModel(sequelize);
    const rooms = _rooms.initModel(sequelize);
    const user_passwords = _user_passwords.initModel(sequelize);
    const user_rooms = _user_rooms.initModel(sequelize);
    const user_tokens = _user_tokens.initModel(sequelize);
    const users = _users.initModel(sequelize);
    users.belongsTo(countries, { as: "u_country", foreignKey: "u_country_id" });
    countries.hasMany(users, { as: "users", foreignKey: "u_country_id" });
    messages.belongsTo(messages, { as: "m_forwarded_from_message", foreignKey: "m_forwarded_from" });
    messages.hasMany(messages, { as: "messages", foreignKey: "m_forwarded_from" });
    messages.belongsTo(messages, { as: "m_reply_to_message", foreignKey: "m_reply_to" });
    messages.hasMany(messages, { as: "m_reply_to_messages", foreignKey: "m_reply_to" });
    permissions.belongsTo(roles, { as: "p_role", foreignKey: "p_role_id" });
    roles.hasMany(permissions, { as: "permissions", foreignKey: "p_role_id" });
    user_rooms.belongsTo(roles, { as: "ur_role", foreignKey: "ur_role_id" });
    roles.hasMany(user_rooms, { as: "user_rooms", foreignKey: "ur_role_id" });
    user_rooms.belongsTo(rooms, { as: "ur_room", foreignKey: "ur_room_id" });
    rooms.hasMany(user_rooms, { as: "user_rooms", foreignKey: "ur_room_id" });
    contacts.belongsTo(users, { as: "c_user", foreignKey: "c_user_id" });
    users.hasMany(contacts, { as: "contacts", foreignKey: "c_user_id" });
    contacts.belongsTo(users, { as: "c_owner", foreignKey: "c_owner_id" });
    users.hasMany(contacts, { as: "c_owner_contacts", foreignKey: "c_owner_id" });
    profile_images.belongsTo(users, { as: "p_user", foreignKey: "p_user_id" });
    users.hasMany(profile_images, { as: "profile_images", foreignKey: "p_user_id" });
    user_passwords.belongsTo(users, { as: "up_user", foreignKey: "up_user_id" });
    users.hasMany(user_passwords, { as: "user_passwords", foreignKey: "up_user_id" });
    user_rooms.belongsTo(users, { as: "ur_user", foreignKey: "ur_user_id" });
    users.hasMany(user_rooms, { as: "user_rooms", foreignKey: "ur_user_id" });
    user_tokens.belongsTo(users, { as: "ut_user", foreignKey: "ut_user_id" });
    users.hasMany(user_tokens, { as: "user_tokens", foreignKey: "ut_user_id" });
    return {
        contacts: contacts,
        countries: countries,
        messages: messages,
        permissions: permissions,
        profile_images: profile_images,
        roles: roles,
        rooms: rooms,
        user_passwords: user_passwords,
        user_rooms: user_rooms,
        user_tokens: user_tokens,
        users: users,
    };
}
