const Header = () => {
  return (
    <header className="px-5 md:px-10 py-3 flex items-center">
      <img
        src="https://e-learning.universitasbumigora.ac.id/pluginfile.php/20723/user/icon/clean/f1?rev=271175"
        alt="zakiul fikri"
        style={{ width: 100 }}
        className="md:rounded rounded-full mr-5 shadow"
      />
      <div className="">
        <h3 className="text-4xl font-bold">1901010120</h3>
        <h3 className="md:text-3xl md:font-bold text-lg font-semibold">
          Lalu Muhamad Zakiul Fikri
        </h3>
      </div>
    </header>
  );
};

export default Header;
