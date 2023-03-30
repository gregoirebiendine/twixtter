import type TwixData from './TwixData'
import type UserData from './UserData'

export default interface TwixtterProfileData extends Object {
    connectedUser: UserData,
    user: UserData,
    twixs: Array<TwixData>
};