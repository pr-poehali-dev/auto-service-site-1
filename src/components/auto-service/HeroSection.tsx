import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
