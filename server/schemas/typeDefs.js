const typeDefs = `
    type User {
        _id: ID
        email: String
    }

    type Flashcard {
        question: String
        answer: String
        options: [String]
    }

    type Deck {
        _id: ID
        title: String
        class: String
        flashcardList: [Flashcard]
        public: Boolean
    }

    type Auth {
        token: ID
    }

    type Query {
        user: User
        searchDecks(class: String!): [Deck]
        getDeck(id: ID!): Deck
        me: User
    }

    type Mutation {
        signup(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;
module.exports = typeDefs;