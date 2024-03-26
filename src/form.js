import React from 'react';

export default function LocationForm() {

//   const [fname, SetFname] = useState("")
//   const [lname, setLname] = useState("")
//   // const axios = require('axios');
// const FormData = require('form-data');
// let data = new FormData();
// data.append('features', `[{\n"attributes":{\n"fname": "${fname}",\n"lname": "${lname}"\n}\n}]`);
// data.append('f', 'pjson');

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://esrirw.rw/server/rest/services/Hosted/Survey111/FeatureServer/0/addFeatures/applyEdits?token=tAgiheaJgpcH1XyEzfkqktjXj4_IJP-fwcp6hMd4PoUaAxU2RFAYG1AfzX1uQwcFJ2l3HYTV8hepRg-D136hDPQldHfDGAjXt9XSSNSIvcHFZbT9YfmqP-6Ht86UyHCZfV4Eoy4sFOwLHeyC2Z_f6TpPlSr0PqF8kphM-CwdKUE.',
//   headers: { 
//     'Cookie': 'AGS_ROLES="FA55mMB1e7bWn/RvUcdykdmwHvTKXplxgUBG9vgmtH8KGVNmofnRJVsOI4IIseEt8s45QSxnioI8leX+UVvQew=="', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

  
  
  return (
    <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
      <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
        <section className="bg-cream-lighter p-4 shadow " style= {{width: "60%"}}>
          <div
          className="w-full h-14 pt-2 text-center  bg-gray-700  shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white mb-4">
          Crime Report Form

          </div>
          <form >
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text"name='fname' id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" name='crimeType' id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crime Type</label>
                <input type="text" name='lname' id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Theft" />
              </div>  
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input type="tel" name='phoneNumber' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07..."  />
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Injured number</label>
                <input id="website" name='injured' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
              </div>
              <div>
                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Victims</label>
                <input type="number"name='victims' id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray -lighter dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
              </div>
            </div>
            
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
                  District
                </label>
                <input type="text" name='district' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                  Sector
                </label>
                <div className="relative">
                  <select name='sector' className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                    <option>Kagarama</option>
                    <option>Gatenga</option>
                    <option>Nyanza</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
                  Street
                </label>
                <input name='street' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">More details</label>
              <textarea name='details' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Provide any more relevant details" />
            </div>
            <button type="submit" aria-label="Submit form" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
             
        </section>
      </main>
    </div>
  );
}

