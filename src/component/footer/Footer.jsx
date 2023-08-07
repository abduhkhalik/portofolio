const Footer = () => {

    const links = [
        { name: "Tentang Saya", link: "#about" },
        { name: "Portofolio", link: "#porto" },
        { name: "Client", link: "#client" },
      ];

  return (
    <footer className="bg-gray-500 rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center dark:text-gray-200">
          © 2023{" "}
          <a href="#" className="hover:underline">
            AbduhKhalik
          </a>
          . All Rights Reserved.
        </span>
        {
            links.map((item, index) => (
        <ul key={index} className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-200 sm:mt-0">
          <li>
            <a href={item.link} className="mr-4 hover:underline md:mr-6 ">
              {item.name}
            </a>
          </li>
        </ul>
            ))
        }
      </div>
    </footer>
  );
};

export default Footer;
