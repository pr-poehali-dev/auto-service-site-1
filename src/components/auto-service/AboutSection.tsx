import { advantages } from "@/data/advantages";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
