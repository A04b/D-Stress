import React from 'react';
import { Link } from 'react-router-dom';

// import Footer from "../Footer.jsx"


function Test() {
  return (
    <div className='min-h-screen'>
      <div className=" h-screen">
        <div className='bg- bg-purple-500 absolute -z-10 h-[300px] w-full  '></div>
          <div className='z-10 pl-[200px] pr-[200px]'>
            <p className='text-white text-5xl'>Lets take a test</p>
            <ul className='list-disc '>
              <li>
                <p className='text-white text-xl'>This Questionair will help us to analyse your stress levels<br/></p>
              </li>
            </ul>
          </div>
        <div>
        <Link to="/forum">Take Test</Link>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Test;
















{/* <ul className="list-disc pl-8">
  <li>Work Stress</li>
  <li>Relationship Stress</li>
  <li>Health Stress</li>
</ul> */}