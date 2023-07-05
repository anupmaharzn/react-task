import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import UserModel, {
    UserDocumentType,
    UserInputType,
} from '../models/user.model'
import { omit } from 'lodash'

export async function createUser(input: UserInputType) {
    try {
        const user = await UserModel.create(input)
        return omit(user.toJSON(), 'password')
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function validatePassword({
    email,
    password,
}: {
    email: string
    password: string
}) {
    const user = await UserModel.findOne({ email })
    if (!user) {
        return false
    }
    const isValid = await user.comparePassword(password)
    if (!isValid) {
        return false
    }
    return omit(user.toJSON(), 'password')
}

export async function findUser(query: FilterQuery<UserDocumentType>) {
    return UserModel.findOne(query).lean()
}

export async function findAndUpdateUser(
    query: FilterQuery<UserDocumentType>,
    update: UpdateQuery<UserDocumentType>,
    options: QueryOptions = {}
) {
    return UserModel.findOneAndUpdate(query, update, options)
}
