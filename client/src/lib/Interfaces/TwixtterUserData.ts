import type TwixContent from './TwixContent'
import type UserData from './UserData'

export default interface TwixtterPorfileData extends Object {
    user: UserData
    twixs: Array<TwixContent>
};