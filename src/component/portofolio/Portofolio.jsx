import "./Card.css";
import Porto1 from "/src/assets/webs/1.jpg";
import Porto2 from "/src/assets/webs/2.jpg";
import Porto3 from "/src/assets/webs/3.jpg";

const Portofolio = () => {
  const data = [
    {
      id: 1,
      title: "Landing Page",
      img: Porto1,
      desc: "Dalam Proyek ini saya membuat design landing page untuk tempat penyewaan alat-alat berkemah dengan informasi tempat-tempat wisata yang populer di dalamnya.",
    },
    {
      id: 2,
      title: "Design Web rumah makan",
      img: Porto2,
      desc: "Dalam Proyek ini saya membuat design website dengan react.js dan juga framework yaitu tailwind css untuk tampilannya ini adalah website dengan konsep restoran yang saya bangun dengan sederhana",
    },
    {
      id: 3,
      title: "Design Content Instagram",
      img: Porto3,
      desc: "Dalam Proyek ini saya membuat konsep tentang petugas kesehatan yang menggunakan masker sebagai pelindung mereka dan juga manfaat masker dalam dunia kedokteran.",
    },
  ];

  return (
    <section id="porto" className="py-32 bg-gray-300 -mt-48 lg:mt-0">
      <h1 className="title uppercase">My Portofolio</h1>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-5 lg:gap-9 item-center my-10">
          {data.map((item) => {
            return (
              <div key={item.id} className="w-full lg:w-1/4">
                <div className="card md:w-full">
                  <img src={item.img} alt={item.title} />
                  <div className="card__content">
                    <p className="card__title">{item.title}</p>
                    <p className="card__description">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
