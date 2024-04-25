import "./style.scss";
import { GrClose } from "react-icons/gr";

type ModalProps = {
  active: boolean;
  setActive: (active: boolean) => void;
};

function ModalReservation({ active, setActive }: ModalProps) {
  const handleOutsideClick = () => {
    setActive(false);
  };
  return (
    <main className={`modal__reservation ${active ? "active" : ""}`}>
      <div className={`container__modal `}>
        <div className="box__header">
          <span className="title">Nouvelle Réservation</span>
          <GrClose onClick={handleOutsideClick} />
        </div>
        <form
          action="
      "
          className="form__aside"
          id="rdv__check__validity"
        >
          <div className="date__box_content">
            <label htmlFor="dateStart">Date d'arrivée</label>
            <input
              type="date"
              name="dateStart"
              id=""
              placeholder="MM/DD/YYYY"
              defaultValue="2024-04-24"
            />
          </div>
          <div className="date__box_content">
            <label htmlFor="dateEnd">Date de départ</label>
            <input
              type="date"
              name="dateEnd"
              id=""
              placeholder="MM/DD/YYYY"
              defaultValue="2024-04-28"
            />
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
          <div className="date__box_content">
            <label htmlFor="phoneUser">Phone</label>
            <input
              type="phone"
              name="phoneUser"
              id=""
              placeholder="ex : +2438256878455"
            />
          </div>
          <button className="btn btn__submit__form">Réserver</button>
        </form>
      </div>
    </main>
  );
}

export default ModalReservation;
