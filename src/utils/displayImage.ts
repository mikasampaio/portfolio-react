import Default from "../assets/default.png";
import Previsao from "../assets/previsao-tempo.png";
import DevBills from "../assets/devbills.png";
import Book from "../assets/books.png";
import Codeburger from "../assets/codeburger.png";

export const displayImage = (value: string) => {
  switch (value) {
    case "previsao-tempo-dnc":
      return Previsao;

    case "devbills-frontend":
      return DevBills;

    case "books-interface":
      return Book;

      case "Interface-DevClub":
        return Codeburger;

    default:
      return Default;
  }
};
