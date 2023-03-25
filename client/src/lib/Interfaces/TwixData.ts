export default interface TwixData {
    id: string,
    authorId: string,
    authorUsername: string,
    authorTwixname: string,
    textContent: string,
    mediaContent: string | null,
    commentNumber: number,
    retwixNumber: number,
    likeNumber: number,
    postDate: Date
};