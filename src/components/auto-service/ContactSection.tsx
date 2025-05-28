import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-6">Свяжитесь с нами</h3>
            <p className="text-xl text-blue-100 mb-8">
              Готовы помочь с ремонтом вашего автомобиля. Звоните или приезжайте
              к нам!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-semibold">+7 (495) 123-45-67</div>
                  <div className="text-blue-200">Ежедневно с 8:00 до 20:00</div>
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
  );
};

export default ContactSection;
