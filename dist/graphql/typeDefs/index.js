const typeDefs = `#graphql
    #Scalers
    scalar JSON

    #Interfaces
    interface IStatus {
        status: Int!
        message: String
    }

    #Inputs
    input UserInput {
        username: String
        first_name: String
        last_name: String
        email: String
        phone: String!
        status: String
        country_id: ID!
        password: String!
    }

    input ContactInput {
        alias: String
        user_id: ID!
    }
    
    input LoginInput {
        phone: String!
        password: String!
    }

    input UpdateUserInput {
        id: ID
        username: String
        first_name: String
        last_name: String
        email: String
        phone: String
        status: String
        country_id: ID
    }

    input MessageInput {
        id: ID
        receiver_id: Int!
        type: String
        content: String!
        sender_type: MessagerType
        receiver_type: MessagerType
        seen: Int
        forwarded_from: Int
        reply_to: Int
        reactions: JSON
        mentions: JSON
    }

    #Types
    type User {
        u_id: ID
        u_username: String
        u_first_name: String
        u_last_name: String
        u_email: String
        u_phone: String!
        u_status: String
        u_country_id: ID!
    }

    type Contact {
        c_alias: String
        c_user: User!
        c_owner: User!
    }

    enum MessagerType {
        u
        r
    }

    type Message {
        m_id: ID
        m_sender_id: Int!
        m_receiver_id: Int!
        m_type: Int!
        m_content: String
        m_sender_type: MessagerType!
        m_receiver_type: MessagerType!
        m_seen: Int!
        m_forwarded_from: Message
        m_reply_to: Message
        m_reactions: JSON
        m_mentions: JSON
        m_created_at: Int
        m_updated_at: Int
    }

    type Country {
        co_id: ID
        co_name: String
        co_code: String
        co_flag: String
    }

    type Status implements IStatus {
        status: Int!
        message: String
    }

    type Token implements IStatus {
        status: Int!
        message: String
        token: String
    }

    type Messages implements IStatus {
        status: Int!
        message: String
        result: [Message]!
    }

    type GetUser implements IStatus {
        status: Int!
        message: String
        result: User
    }

    type Query {
        loginUser(loginInput: LoginInput!): Token
        logoutUser: Status
        getContacts: [Contact]!
        getCountries: [Country]
        getPVMessgaes(receiver_id: Int!): Messages!
        getUser: GetUser!
    }

    type Mutation {
        createUser(user: UserInput!): User
        updateUser(id: ID, user: UpdateUserInput!): User
        deleteUser(id: ID): Status

        addContact(contact: ContactInput!): Contact
        createMessage(message: MessageInput!): Message
    }
    
    type Subscription {
        loginUserFinished: User
        messageSended: Message
    }
`;
export default typeDefs;
