import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "books",
    categoryName: "Books",
    description: "Quizzes based on Books",
    value:10,
    image:
    "https://hips.hearstapps.com/hmg-prod/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg?crop=1.00xw:0.752xh;0,0.197xh&resize=1200:*"
  },
  {
    _id: uuid(),
    category: "music",
    categoryName: "Music",
    description: "Quizzes based on Music",
    value:12,
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtckKqHD-poXFjYKTCEXYuxevG7RnIkDueHQ&usqp=CAU",
  },
  {
    _id: uuid(),
    category: "sports",
    categoryName: "Sports",
    description: "Quizzes based on Sports",
    value:21,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsoxEr7lDZc_RK-KlCG_3wWJHvmORSanqPQ&usqp=CAU",
  },
  {
    _id: uuid(),
    category: "tech",
    categoryName: "Technology",
    description: "Quizzes based on Tech",
    value:18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqSwXQE9onxwY__FyuOMjYKoM8AaCukPcDQ&usqp=CAU",
  },
];