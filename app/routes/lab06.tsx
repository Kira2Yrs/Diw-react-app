import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function MyTermProjecr()
{

    const [book, setBook] = useState({
        bookTitle: "Web Programming",
        bookDesc: "พัฒนาด้วย React & Tailwind CSS",
        bookPrice : 199,
        bookAuthor : "Beritotai",
        bookClover : "/images/rub.jpg",

    });

const [nextId, setNextId] = useState (0);
const [books, setBooks] = useState ([]);

    const myPage ="diw term project";
    const myName ="wirawat lueasap";
    const myStudID ="026730491014-9";

    const addBook=  (e : any) =>{
        setBooks ([
            ...books,
        {
            id: nextId,
            bookTitle: book.bookTitle,
            bookDesc: book.bookDesc,
            bookPrice: book.bookPrice,
            bookAuthor: book.bookAuthor,
            bookClover: book.bookClover,
        }
        ]);
        setNextId(nextId+1);
    }
    const bookItems= books.map((bobj, index) =>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={bobj.bookClover} title={bobj.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bobj.bookTitle}</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bobj.bookDesc}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
    );

    const handleTitleChange = (e: any) => {
        setBook({
            ...book,
            bookTitle: e.target.value
        });

    }
    const handleDescChange = (e: any) => {
        setBook({
            ...book,
            bookDesc: e.target.value
        });

    }
    const handlePriceChange = (e: any) => {
        setBook({
            ...book,
            bookPrice: e.target.value
        });

    }
    const handleAuthorChange = (e: any) => {
        setBook({
            ...book,
            bookAuthor: e.target.value
        });

    }
    const handleCloverChange = (e: any) => {
        setBook({
            ...book,
            bookClover: e.target.value
        });

    }

    const resetForm = (e: any) =>{
        setBook({
            bookTitle: " ", bookDesc: " ", bookPrice: 0.0, bookAuthor: " ", bookClover: ""
        });
    }

    return(
        <>
        <Header messenger ={myPage}/>
        <p className="text-xl m-3 text-center">
            Name: {myName} Studert ID :{myStudID}
        </p>
         <div className="flex justify-center w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6 ">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=ชื่อหนังสือ(BookTitle)</label>
            <input
              value={book.bookTitle}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=รายละเอียดหนังสือ(Book Desription)</label>
            <input
              value={book.bookDesc}
              onChange={handleDescChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=ราคาหนังสือ(bookPrice)</label>
            <input
              value={book.bookPrice}
              onChange={handlePriceChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=ชื่อผู้แต่ง(bookAuthor)</label>
            <input
              value={book.bookAuthor}
              onChange={handleAuthorChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">=หน้าปกหนังสือ(bookClover)</label>
            <input
              value={book.bookClover}
              onChange={handleCloverChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={addBook}>
                เพิ่มหนังสือ</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={resetForm}>
                ลบหนังสือ</button>

          </div>

        </form>
           <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={book.bookClover} title={book.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}({book.bookPrice} THB)
                
                </h5>
             </a>

             <p> className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                {book.bookDesc}
             </p>
             <p> className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                ผู้แต่ง (Author){book.bookAuthor}
             </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
              <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {bookItems}
        </div>
      </div>
            </div>
          </div>
        </div>
        <Footer messenger = "@ 2525 Wirawat - "/>
           </>
    );

}