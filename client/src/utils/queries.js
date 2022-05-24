import { gql } from "@apollo/client";

export const users = gql`

    query seeUsers{
        Users {
            friend
            firstName
            personality
        }
}


`