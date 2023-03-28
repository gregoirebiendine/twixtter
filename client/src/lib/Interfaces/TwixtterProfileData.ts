import type TwixData from './TwixData'
import type UserData from './UserData'

export default interface TwixtterProfileData extends Object {
    user: UserData
    twixs: Array<TwixData>
};