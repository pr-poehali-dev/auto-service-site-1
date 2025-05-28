import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚗</span>
            <h1 className="text-2xl font-bold text-blue-800">АвтоМастер</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-800 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-800 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-800 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            📞 Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
