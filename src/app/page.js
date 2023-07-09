'use client';
import React,{useState} from 'react'

export default function Home() {
  const[formData, setFormData] = useState({prelims: '', midterm: '', prefinals: '', finals: ''});
  const[result, setResult] = useState (0);

  const handleChange = (e)=> {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    computation(formData);
  };

  const clear = () =>{
    setFormData({prelims: '', midterm: '', prefinals: '', finals: ''});
  }

  const computation = (data) =>{

    const percentage = {
      prelims: 20/100, 
      midterm: 20/100, 
      prefinals: 20/100, 
      finals: 40/100};

    const cmptn = {
      v1: data.prelims * percentage.prelims,
      v2: data.midterm * percentage.midterm,
      v3: data.prefinals * percentage.prefinals,
      v4: data.finals * percentage.finals 
    }
    const result = cmptn.v1 + cmptn.v2 + cmptn.v3 + cmptn.v4;
    setResult(result.toFixed(3));

  }
  
  return (
    <main className=" relative flex min-h-screen flex-col  p-10">
      <div className=" flex z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
      
        <div className="flex bottom-0 left-0 flex h-48 w-full items-end  bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none pb-5">
         A simple grade calculator created via Next js with Tailwind <br/>
         By Adrian Carl Vargas
        </div>
        
      </div>
      <div className="grid grid-cols-8 gap-4 w-max self-center">
        <div className="col-start-1 col-span-2 bg-gray-200 font-mono text-sm items-center justify-center rounded-lg">
          <div className='items-center p-8'>
            <p>Grading System:</p><hr className='border-t-2 border-gray-500'/><br/>
            <p>Prelims {" "}: 20%</p><br/>
            <p>Midterms {" "}: 20%</p><br/>
            <p>Pre-finals {" "}: 20%</p><br/>
            <p>Finals {" "}: 40%</p><br/>
            <p>----------------</p><br/>
            <p>Total {" "}: 100%</p>
          </div>
          
        </div>
        <div className="col-start-3 col-span-4">
          <div className="place-item-center self-center pt-5">
            <div className="flex justify-center w-full max-w-2xl ">
              <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
              <p className='text-lg mb-3'>Grade Calculator</p>
                <div className="flex flex-row justify-between space-x-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Prelims
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="prelims" type="number" placeholder="Enter your grade" value={formData.prelims} onChange={handleChange}/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Midterms
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="midterm" type="number" placeholder="Enter your grade" value={formData.midterm} onChange={handleChange}/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Pre-finals
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="prefinals" type="number" placeholder="Enter your grade" value={formData.prefinals} onChange={handleChange}/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Finals
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="finals" type="number" placeholder="Enter your grade" value={formData.finals} onChange={handleChange}/>
                </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Calculate
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={clear}>
                    Clear
                  </button>
                </div>
                <div className="flex items-center justify-center p-5">
                  <p className="text-xl">Result: {result}</p>
                </div>
              </form>
            </div>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none pb-5">
              <p className='italic'>Disclaimer: This only computes the grade of specific subject</p>  
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}
