export interface IBook {
  id: string;
  name: string;
  description: string;
  author: string;
  year: string;
  numberPages: number;
  cover: string;
  reserved: boolean;
}

export interface IBookState {
  books: IBook[];
  bookSelected: IBook;
}
