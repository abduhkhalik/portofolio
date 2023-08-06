import Me from "../../assets/me.jpg";
import './Intro.css'

const Intro = () => {
  return (
    <section className="px-24 py-32">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl mb-5 font-semibold">Hello Saya</h1>
            <h2 className="text-4xl font-bold mb-3">Abduh Khalik</h2>
            <p className="text-base text-gray-600 mb-5">
              Saya adalah <em className="font-bold">FrontEnd Develepor</em>,
              sekarang saya dalam proses pengembangan skill saya untuk menjadi
              seorang
              <em className="font-bold"> FullStack Developer</em>.
            </p>
              <div className="button-borders mb-5">
                <button className="primary-button">KONTAK</button>
              </div>
          </div>
          <div className="w-full lg:w-1/2 lg:px-10">
            <div className="max-w-full">
              <img src={Me} className="rounded-full" alt="Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
