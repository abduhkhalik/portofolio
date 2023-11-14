import {data} from "../../data"
import "./Card.css";

const Portofolio = () => {
  return (
    <section id="porto" className="py-32 bg-gray-300 -mt-48 lg:mt-0">
      <h1 className="title uppercase">My Portofolio</h1>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-5 lg:gap-9 item-center my-10">
          {data.map((item) => {
            return (
              <div key={item.id} className="w-full lg:w-1/4 ">
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
