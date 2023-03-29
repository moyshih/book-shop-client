import BookData from "./BookData";

interface Purchase {
    id: string,
    book: BookData,
    date: Date,
}

export default Purchase;