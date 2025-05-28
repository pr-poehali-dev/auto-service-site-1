import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "Диагностика",
      description: "Полная компьютерная диагностика всех систем автомобиля",
      icon: "🔧",
    },
    {
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт двигателей любой сложности",
      icon: "⚙️",
    },
    {
      title: "Замена масла",
      description: "Быстрая замена масла и фильтров с гарантией качества",
      icon: "🛢️",
    },
    {
      title: "Шиномонтаж",
      description: "Сезонная замена шин, балансировка, ремонт проколов",
      icon: "🚗",
    },
    {
      title: "Тормозная система",
      description: "Ремонт и обслуживание тормозных систем",
      icon: "🛑",
    },
    {
      title: "Кузовной ремонт",
      description: "Покраска, рихтовка, устранение вмятин",
      icon: "🎨",
    },
  ];

  const advantages = [
    "15+ лет опыта работы",
    "Сертифицированные мастера",
    "Оригинальные запчасти",
    "Гарантия на все работы",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Профессиональный
            <br />
            <span className="text-orange-400">автосервис</span>
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Качественный ремонт и обслуживание автомобилей любых марок. Опытные
            мастера, современное оборудование, честные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              🔧 Записаться на ремонт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-800 px-8 py-3"
            >
              📋 Узнать цены
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-blue-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают нас?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Мы — команда профессионалов с многолетним опытом работы в
                автомобильной сфере. Используем только качественные запчасти и
                современное оборудование.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1632823471565-1246336c6171?w=600&h=400&fit=crop"
                alt="Автосервис"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">Свяжитесь с нами</h3>
              <p className="text-xl text-blue-100 mb-8">
                Готовы помочь с ремонтом вашего автомобиля. Звоните или
                приезжайте к нам!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-blue-200">
                      Ежедневно с 8:00 до 20:00
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold">
                      г. Москва, ул. Автомобильная, 15
                    </div>
                    <div className="text-blue-200">
                      Рядом с метро "Автозаводская"
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold">info@automaster.ru</div>
                    <div className="text-blue-200">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-6">Записаться на ремонт</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder="Описание проблемы"
                  rows={3}
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  📅 Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
