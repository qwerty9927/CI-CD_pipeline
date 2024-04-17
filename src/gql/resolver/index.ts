import { GetUserInput } from "../input/user.input"
import { UserOuput } from "../output/user.output"

const users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
  { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
]

const getUser = (input: GetUserInput): UserOuput | undefined => {
  return users.find((item) => {
    return item.id === input.id
  })
}

const getUsers = (): UserOuput[] => {
  return users
}

export { getUser, getUsers }
