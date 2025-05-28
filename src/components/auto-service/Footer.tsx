const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl">🚗</span>
            <span className="text-xl font-bold text-white">АвтоМастер</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2024 АвтоМастер. Все права защищены.</p>
            <p className="text-sm text-gray-400">
              Качественный ремонт автомобилей
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
