import React, { useState } from 'react';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ setNextClicked] = useState(false);

  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
  });
  const [errors, setErrors] = useState({
    step1: '',
    step2: '',
    step3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const validateStep = (step) => {
    let isValid = true;
    const stepErrors = {};

    if (step === 1 && !formData.step1.trim()) {
      stepErrors.step1 = 'Step 1 is required';
      isValid = true;
    }
    if (step === 2 && !formData.step2.trim()) {
      stepErrors.step2 = 'Step 2 is required';
      isValid = true;
    }
    if (step === 3 && !formData.step3.trim()) {
      stepErrors.step3 = 'Step 3 is required';
      isValid = true;
    }

    setErrors(stepErrors);
    return isValid;
  };

  

  const nextStep = () => {
    const isValid = validateStep(currentStep);
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="mx-auto mt-8 p-6 bg-gray-200 shadow-md" style={{ width: "45rem" }}>
       <div className="w-full h-14 pt-2 text-center font-bold shadom-sm overflow-hidden sm:rounded-md text-xl mb-4">
        Crime Report Form
      </div>

     <div className="flex items-center mb-4">
  <div className={`flex-none ${currentStep >= 1 ? 'text-blue-500 font-bold' : 'text-gray-400 font-semibold'} mr-2`}>Contact information</div>
  <div className="flex-auto relative">
    <div className={` left-0 top-1/2 w-full bg-gray-400 h-0 ${currentStep >= 2 ? 'bg-blue-500 h-0.5' : ''}`} ></div>
  </div>
  <div className={`flex-none ${currentStep >= 2 ? 'text-blue-500 font-bold' : 'text-gray-400 font-semibold'} mx-2`}>Crime details</div>
  <div className="flex-auto relative">
    <div className={` left-0 top-1/2 w-full bg-gray-400 h-0 ${currentStep >= 3 ? 'bg-blue-500 h-0.5' : ''}`} ></div>
  </div>
  <div className={`flex-none ${currentStep === 3 ? 'text-blue-500 font-bold' : 'text-gray-400 font-semibold'} ml-2`}>Save information</div>
</div>


      <form onSubmit={handleSubmit}>
        {/* <div> */}
          {currentStep === 1 && (
            <div>
              {/* <p className="mb-4 text-md font-semibold">*Please fill in personal information below*</p> */}
              {/* <input
                type="text"
                name="step1"
                value={formData.step1}
                onChange={handleChange}
                placeholder="Step 1"
                className="w-full border rounded-md px-3 py-2 mb-3"
              /> */}
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">First name</label>
                <input type="text"name='fname' id="first_name" className="bg-gray-50 border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" name='crimeType' id="last_name" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input type="text" name='lname' id="company" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>  
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input type="tel" name='phoneNumber' id="phone" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input type="text" name='lname' id="company" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Theft" />
              </div>  
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input type="tel" name='phoneNumber' id="phone" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07..."  />
              </div>
             
            </div>
              {errors.step1 && <p className="text-red-500">{errors.step1}</p>}
              <button
                type="button"
                onClick={() => {
                  nextStep();
                  setNextClicked(true);
                }}
                className="bg-blue-700 text-white font-bold hover:bg-blue-500 rounded-md p-2  px-4"
              >
                Next
              </button>

            </div>
          )}

          {currentStep === 2 && (
            <div>
              {/* <p className="mb-4 text-xs text-gray-600">*Please fill in information on the reported incident*</p> */}

              {/* <input
                type="text"
                name="step2"
                value={formData.step2}
                onChange={handleChange}
                placeholder="Step 2"
                className="w-full border rounded-md px-3 py-2 mb-3"
              /> */}
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
              
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crime Type</label>
                <input type="text" name='lname' id="company" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Theft" />
              </div>  
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                <input type="tel" name='phoneNumber' id="phone" className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07..."  />
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Injured number</label>
                <input id="website" name='injured' className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
              </div>
              <div>
                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Victims</label>
                <input type="number"name='victims' id="visitors" className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray -lighter dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Injured number</label>
                <input id="website" name='injured' className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
              </div>
              <div>
                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Victims</label>
                <input type="number"name='victims' id="visitors" className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray -lighter dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
              </div>
              
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
                  District
                </label>
                <input type="text" name='district' id="phone" className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                  Sector
                </label>
                <div className="relative">
                  <select name='sector' className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-state">
                    <option>Select</option>
                    <option>Kagarama</option>
                    <option>Gatenga</option>
                    <option>Nyanza</option>
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
                  Street
                </label>
                <input name='street' className="bg-gray-50 border border-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-zip" type="text" placeholder="90210"/>
              </div>
            </div>
              {errors.step2 && <p className="text-red-500">{errors.step2}</p>}
              <div className='pt-6'>
                <button
                  type="button"
                  onClick={prevStep}
                  className="mr-2 bg-gray-500 hover:bg-gray-300 font-bold text-white rounded-md px-4 p-2"
                >
                  Previous
                </button>
                <button
                type="button"
                onClick={() => {
                  nextStep();
                  setNextClicked(true);
                }}
                className="bg-blue-700 text-white font-bold hover:bg-blue-500 rounded-md px-4 p-2"
              >
                Next
              </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <p className="text-md font-semibold mb-4">Extra information</p>
          <textarea
            type="text"
            name="step3"
            value={formData.step3}
            onChange={handleChange}
            placeholder="Step 3"
            className="w-full border rounded-md px-3 py-2 mb-3"
          />
          {errors.step3 && <p className="text-red-500">{errors.step3}</p>}
          <div>
            <button
              type="button"
              onClick={prevStep}
              className="mr-2 bg-gray-500 hover:bg-gray-300 font-bold text-white rounded-md px-4 p-2"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-500 font-bold text-white rounded-md px-4 p-2"
            >
              Submit
            </button>
          </div>
        </div>
      )}

    </form>
  </div>
);
};

export default StepForm;

