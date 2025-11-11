const add_button = document.getElementById('add');




let counter = 1;


function add_participant() {
    counter += 1;
    const participant_addition = document.createElement('section');
    participant_addition.classList.add(`participant${counter}`);
    const new_participant = `

            <p>Participant ${counter}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${counter}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${counter}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${counter}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>`;

    participant_addition.innerHTML = new_participant;
    add_button.insertAdjacentElement('beforebegin', participant_addition);
    
};

add_button.addEventListener('click', add_participant);

const submit_button = document.getElementById("submitButton");

submit_button.addEventListener('click', submitForm);
const form = document.querySelector('form')
const summary = document.getElementById('summary')

function totalFees() {

let feeElements = document.querySelectorAll("[id^=fee]");
console.log(feeElements);

feeElements = [...feeElements];

const fee_total = feeElements.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.value), 0);
return fee_total;
}



function submitForm(event) {
    event.preventDefault();
    form.style.display = 'none';
    
    const adult_name = document.getElementById('adult_name').value;

    const fee_total = totalFees();

    const summary_funnery = document.createElement("div");
    const summary_filler = `
    <p>Thank you ${adult_name} for registering. you have registered $${counter} participants and owe ${fee_total} in Fees.</p>`


    summary_funnery.innerHTML = summary_filler;
    
    summary.appendChild(summary_funnery);
};
