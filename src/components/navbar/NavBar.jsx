import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <div className="flex  justify-between items-center text-white w-full text-2xl pt-3">
        <h3 className="text-2xl  dark:text-white ps-4  first-letter:text-red-600 first-letter:text-[25px] text-start md:text-center">
          Sanjay&#39;s Portfolio
        </h3>
        <ul className="justify-evenly w-auto hidden md:flex">
          <li
            className=" me-10 hover:cursor-pointer hover: brightness-100 hover:underline underline-offset-4 
          hover:animate-pulse hover:text-red-600"
          >
            About
          </li>
          <li
            className=" me-10 hover:cursor-pointer hover: brightness-100 hover:underline underline-offset-4 
          hover:animate-pulse hover:text-red-600"
          >
            LinkedIn
          </li>
          <li
            className=" me-10 hover:cursor-pointer hover: brightness-100 hover:underline underline-offset-4 
          hover:animate-pulse hover:text-red-600"
          >
            Hire me!
          </li>
          <li
            className=" me-10 hover:cursor-pointer hover: brightness-100 hover:underline underline-offset-4 
          hover:animate-pulse hover:text-red-600"
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}
