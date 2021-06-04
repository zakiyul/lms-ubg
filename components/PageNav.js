const PageNav = () => {
  return (
    <div className="px-5 md:px-10 flex mt-5 items-center">
      <button className="text-xs md:text-base border hover:bg-black hover:bg-opacity-10 hover:shadow px-3 py-2 rounded mr-2">
        Dashboard
      </button>
      <button className="text-xs md:text-base border hover:bg-black hover:bg-opacity-10 hover:shadow px-3 py-2 rounded">
        Costumize this page
      </button>
    </div>
  );
};

export default PageNav;
