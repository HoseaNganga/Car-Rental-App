import "./BookCarFunctionality.css";
const handleClick = () => {
  const bookForm = document.getElementById("book");
  const carOptionSelect = document.getElementById(`carType`);
  const locationOptionSelect = document.getElementById(`location`);
  const dropoffOptionSelect = document.getElementById(`dropOff`);
  const datePickSelect = document.getElementById(`datepick-up`);
  const datePickValue = datePickSelect.value;
  const dropDateSelect = document.getElementById(`datedrop-off`);
  const dropDateValue = dropDateSelect.value;
  const dropOffTypeSelect =
    dropoffOptionSelect.options[dropoffOptionSelect.selectedIndex].text;
  const locationTypeSelect =
    locationOptionSelect.options[locationOptionSelect.selectedIndex].text;
  const carTypeSelect =
    carOptionSelect.options[carOptionSelect.selectedIndex].text;
  if (
    (carTypeSelect,
    locationTypeSelect,
    dropOffTypeSelect,
    datePickValue,
    dropDateValue)
  ) {
    const newDiv = document.createElement("div");
    newDiv.className = "displayForm";
    const innerDiv = document.createElement(`div`);
    innerDiv.className = "styleInnerDiv";
    innerDiv.innerHTML = `
      <div class="innerDivHeader">
      <div class="flexInnerDiv">
        <h2>COMPLETE RESERVATION</h2>
        <button class="exitBtn">X</button>
      </div>
      <p>
        Upon completing this reservation enquiry, you will receive: Your
        rental voucher to produce on arrival at the rental desk and a
        toll-free customer support number.
      </p>
    </div>
    <div class="innerDivBody">
      <h3>Car:${carTypeSelect}</h3>
      <div>
        <h4>Pick-Up-Location: ${locationTypeSelect} </h4>
        
      </div>
      <div>
        <h4>Drop-Off-Location: ${dropOffTypeSelect} </h4>
        
      </div>
      <div>
        <h4>Pick-Up-Date: ${datePickValue} </h4>
        
      </div>
      <div>
        <h4>Drop-Date: ${dropDateValue} </h4>
        
      </div>
    </div>   
    <form class="overlayForm">
      <h3>Personal information</h3>
      <div class="flexOverlay">
      <div>
        <label htmlFor="inputFirstName">First Name</label>
        <input type="text" id="inputFirstName" placeholder="Enter your first name.." autoComplete="on" />
      </div>
      <div>
        <label htmlFor="inputLastName">Last Name</label>
        <input type="text" id="inputLastName" placeholder="Enter your last name.." autoComplete="on" />
      </div>
      <div>
        <label htmlFor="inputNumber">Phone Number</label>
        <input type="number"  id="inputNumber" placeholder="Enter your phone number" autoComplete="on"
        />
      </div>
      <div>
        <label htmlFor="inputAge">Age</label>
        <input type="number"  id="inputAge" placeholder="18" autoComplete="on" 
        />
      </div>
      <div>
        <label htmlFor="inputEmail">Email</label>
        <input type="email" id="inputEmail" placeholder="Enter your email" autoComplete="on" />
      </div>
      <div>
        <label htmlFor="inputAddress">Address</label>
        <input type="text" id="inputAddress" placeholder="Enter your Address.." autoComplete="on" />
      </div>
      <div>
        <label htmlFor="inputCity">City</label>
        <input type="text" id="inputCity" placeholder="Enter your City.." autoComplete="on"  />
      </div>
      <div>
        <label htmlFor="inputCode">Zip-Code</label>
        <input type="text" id="inputCode" placeholder="Enter your Zip-Code.." autoComplete="on" />
      </div>
    </div>
    
    <div>
      <button class="inputReserve">Reserve Now</button>
    </div>
  </form>`;
    newDiv.appendChild(innerDiv);
    bookForm.appendChild(newDiv);
    const exitBtn = newDiv.querySelector(`.exitBtn`);
    const reserveBtn = newDiv.querySelector(`.inputReserve`);
    exitBtn.addEventListener("click", () => {
      newDiv.style.display = "none";
    });
    reserveBtn.addEventListener("click", () => {
      newDiv.style.display = "none";
      const houseH3Div = document.createElement(`div`);
      houseH3Div.className = "styleHouseH3";
      const newH3El = document.createElement(`h3`);
      newH3El.className = "h3Result";
      newH3El.appendChild(
        document.createTextNode("Check your email to confirm order")
      );
      const exitH3El = document.createElement(`button`);
      exitH3El.className = "h3ResultBtn";
      exitH3El.appendChild(document.createTextNode(`X`));
      houseH3Div.appendChild(newH3El);
      houseH3Div.appendChild(exitH3El);
      const flexContainer = document.querySelector(`.flexContainer`);
      const parentEl = flexContainer.parentElement;
      parentEl.insertBefore(houseH3Div, flexContainer);

      exitH3El.addEventListener(`click`, () => {
        houseH3Div.style.display = "none";
      });
    });
  }
};

export default handleClick;
