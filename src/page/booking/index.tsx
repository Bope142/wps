import Header from "../../component/header";
import "./style.scss";
import cover1 from "../../assets/images/cover/cover1.webp";
import cover2 from "../../assets/images/cover/cover2.webp";
import cover3 from "../../assets/images/cover/cover3.webp";
import cover4 from "../../assets/images/cover/cover4.webp";
import cover5 from "../../assets/images/cover/cover5.webp";
import cover6 from "../../assets/images/cover/cover6.webp";
import cover7 from "../../assets/images/cover/cover7.webp";
import cover8 from "../../assets/images/cover/cover8.webp";
import cover9 from "../../assets/images/cover/cover9.webp";
import cover10 from "../../assets/images/cover/cover10.webp";
import { BoxCoverHouse } from "../../component/box";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { MdBedroomChild } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { SlSizeActual } from "react-icons/sl";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaElevator } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { FaAirFreshener } from "react-icons/fa";
import Footer from "../../component/footer";

const FormBookReservations = () => {
  return (
    <div className="box__aside">
      <div className="box__header">
        <FaCalendarAlt />
        <span className="title">Planifier un tour</span>
      </div>
      <form
        action="
      "
        className="form__aside"
        id="rdv__form"
      >
        <div className="date__box">
          <input type="date" name="" id="" />
          <input type="time" name="" id="" />
        </div>
        <button className="btn btn__submit__form">Envoyer une démande</button>
      </form>
    </div>
  );
};

const FormBookVerification = () => {
  return (
    <div className="box__aside">
      <div className="box__header">
        <FaHouseCircleCheck />
        <span className="title">Vérifier la disponibilité</span>
      </div>
      <form
        action="
      "
        className="form__aside"
        id="rdv__check__validity"
      >
        <div className="date__box_content">
          <label htmlFor="dateStart">Date d'arrivée</label>
          <input type="date" name="dateStart" id="" />
        </div>
        <div className="date__box_content">
          <label htmlFor="dateEnd">Date de départ</label>
          <input type="date" name="dateEnd" id="" />
        </div>
        <div className="date__box_content">
          <label htmlFor="countAdult">Adulte</label>
          <select name="countAdult" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="date__box_content">
          <label htmlFor="countChildren">Enfants</label>
          <select name="countChildren" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="btn btn__submit__form">Vérifier</button>
      </form>
    </div>
  );
};

const BoxDescription = () => {
  return (
    <div className="box__container">
      <span className="title">Déscription</span>
      <p className="content__overview">
        Bienvenue dans ce magnifique appartement situé à proximité du grand
        boulevard, offrant un espace spacieux et confortable pour votre séjour à
        Kinshasa.
        <br />
        <br />
        Cet appartement est idéalement situé pour profiter de toutes les
        commodités de la ville, tout en offrant un havre de paix loin de
        l'agitation urbaine. Avec ses grandes pièces lumineuses et son design
        moderne, vous vous sentirez immédiatement chez vous dès que vous
        franchirez la porte.
        <br />
        <br />
        Que vous soyez en voyage d'affaires ou en vacances, cet appartement vous
        offre le cadre idéal pour votre séjour à Kinshasa. Réservez dès
        maintenant et laissez-vous séduire par le charme de cet appartement
        exceptionnel.
      </p>
    </div>
  );
};

const BoxAboutHouse = () => {
  return (
    <div className="box__container">
      <span className="title">Details de la propriété</span>
      <div className="content__overview__box">
        <div className="info__box">
          <div className="ico__box">
            <MdBedroomChild />
          </div>
          <p className="overiew_p">5 chambres</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <FaShower />
          </div>
          <p className="overiew_p">2 Douches équipées</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <SlSizeActual />
          </div>
          <p className="overiew_p">100 M² d'espace</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <FaPeopleGroup />
          </div>
          <p className="overiew_p">2-8 personnes</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <FaParking />
          </div>
          <p className="overiew_p">Parking Disponible</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <MdOutlineSecurity />
          </div>
          <p className="overiew_p">Sécurité</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <FaElevator />
          </div>
          <p className="overiew_p">Ascenceur</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <FaKitchenSet />
          </div>
          <p className="overiew_p">Cuisine équipé</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <MdOutlineSignalWifi4Bar />
          </div>
          <p className="overiew_p">Fibre Optique</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <IoTvSharp />
          </div>
          <p className="overiew_p">Netflix et Canal+</p>
        </div>
        <div className="info__box">
          <div className="ico__box">
            <FaAirFreshener />
          </div>
          <p className="overiew_p">Climatisation</p>
        </div>
      </div>
    </div>
  );
};

const BoxMaps = () => {
  return (
    <div className="box__container">
      <span className="title">Localisation</span>
      <div className="content__maps"></div>
    </div>
  );
};

const BoxCTA = () => {
  return (
    <div className="box__container cta">
      <p>
        Ne manquez pas <span> l'opportunité</span> de vivre une{" "}
        <span>expérience</span>
        unique à <span>Kinshasa</span> !🤩
      </p>
      <button className="btn" id="btn__book__now">
        Réservez maintenant
      </button>
    </div>
  );
};
function BookingPage() {
  const pictures = [
    { cover: cover1, url: "/images/cover/cover1.webp" },
    { cover: cover2, url: "/images/cover/cover2.webp" },
    { cover: cover3, url: "/images/cover/cover3.webp" },
    { cover: cover4, url: "/images/cover/cover4.webp" },
    { cover: cover5, url: "/images/cover/cover5.webp" },
    { cover: cover6, url: "/images/cover/cover6.webp" },
    { cover: cover7, url: "/images/cover/cover7.webp" },
    { cover: cover8, url: "/images/cover/cover8.webp" },
    { cover: cover9, url: "/images/cover/cover9.webp" },
    { cover: cover10, url: "/images/cover/cover10.webp" },
  ];

  return (
    <>
      <Header />
      <BoxCoverHouse pictureList={pictures} />
      <section className="container__padding" id="house__infos">
        <div className="details__box">
          <h1 className="title__house">
            Grand appartement approximité du grand boulevard
          </h1>
          <div className="content__box__infos">
            <div className="info__box">
              <div className="ico__box">
                <FaLocationDot />
              </div>
              <p>
                Avenue Colonel Lukusa, Quartier Socimat, Gombe, Kinshasa,RDC
              </p>
            </div>
            <div className="info__box">
              <div className="ico__box">
                <IoIosPricetags />
              </div>
              <strong>2500 $</strong>
            </div>
          </div>
          <BoxDescription />
          <BoxAboutHouse />
          <BoxMaps />
        </div>
        <div className="aside__container">
          <FormBookReservations />
          <FormBookVerification />
          <BoxCTA />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingPage;
