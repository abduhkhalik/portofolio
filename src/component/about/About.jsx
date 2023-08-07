import Sosial from "./Sosial";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-100 -mt-48 lg:mt-0">
      <h1 className="title">
        ABOUT ME
      </h1>
      <div className="container">
        <div className="flex flex-wrap my-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl lg:text-2xl font-bold">Salam Kenal!</h2>
            <h3 className="text-xl font-medium my-3">
              Saya tinggal di Indonesia tepatnya di Kota Palu, Provinsi Sulawesi
              Tengah, saya mulai belajar programer pada tahun 2021.
            </h3>
            <p className="text-gray-600 text-base">
              Perjalanan saya untuk memulai karir menjadi seorang programer
              sangat mulus karna banyak sekali tools yang membantu saya dalam
              belajar, saya sangat tertarik dalam memcahkan masalah di
              masyarakat dalam bidang teknologi, di luar pekerjaan, saya senang
              bermain game dan belajar.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:px-10">
            <h2 className="text-xl lg:text-2xl font-bold">Sosial Media</h2>
            <div className="my-3">
              <Sosial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
