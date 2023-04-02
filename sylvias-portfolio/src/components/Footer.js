import React from "react";
// icons for footer - https://react-icons.github.io/react-icons
import {
  // github:
  AiFillGithub,
  // email:
  AiFillMail,
  // linkedin:
  AiFillLinkedin,
} from "react-icons/ai";
import "../App.css";
// import { Footer } from "flowbite-react";

export default function FooterApp() {
  return (
    // <Footer
    //   container={true}
    //   className="fixed inset-x-0 bottom-0 h-1 border-none"
    // >
    //   <Footer.LinkGroup>
    //
    //
    //     </Footer.Link>
    //     <Footer.Link href="https://www.linkedin.com/in/sylviaely/">
    //       <AiFillLinkedin />
    //     </Footer.Link>
    //   </Footer.LinkGroup>
    // </Footer>

    <footer className="fixed bottom-0 w-full border-none bg-transparent dark:bg-gray-800 sm:px-4">
      <ul className="flex justify-end space-x-2 py-4 text-md font-medium text-black dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/sely1724"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="mailto: sylvianne9417@gmail.com">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sylviaely/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}
