import { FaAngleDown } from "react-icons/fa6";
import "./Faq.css";
import FaqArray from "../FaqArray/FaqArray";
import faqImg from "../../../ImageAssests/faq/car.png";

const Faq = () => {
  const questionArray = FaqArray();

  const handleClick = (id) => {
    const pEl = document.querySelectorAll(`.common`);
    const selectedQuestion = Array.from(pEl).find(
      (val) => Number(val.id) === id
    );
    if (selectedQuestion) {
      selectedQuestion.classList.toggle("hidden");
      selectedQuestion.style.color = "	#48494B";
    }
  };
  return (
    <div className="faqDiv">
      <div className="img">
        <img src={faqImg} alt="car" />
      </div>
      <h2>FAQ</h2>
      <h4>Frequently Asked Questions</h4>
      <p>
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>
      <ul className="questionsContainer">
        {questionArray.map((val) => (
          <li className="questionItem" key={val.id}>
            <div className="questionItemFlex">
              <h3>{val.question}</h3>
              <button className="answerBtn" onClick={() => handleClick(val.id)}>
                <FaAngleDown size={22} />{" "}
              </button>
            </div>
            <p className="hidden common" id={val.id}>
              {val.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
