import React from 'react'

const DirectorData = [
  {
    id: 1,
    nameD: 'श्री.विठ्ठलराव भाऊसो पाटील (काकाजी)',
    designation: 'अध्यक्ष',
    imgD: '/image/6.jpg',

  },
  {
    id: 2,
    nameD: ' श्री. सचीन संभाजीराव पाटील (आण्णा)',
    designation: 'अध्यक्ष',
    imgD: '/image/6.jpg',

  },
  {
    id: 3,
    nameD: 'सौ. मालुश्री विठ्ठलराव  पाटील (दिदी)',
    designation: 'सचिव',
    imgD: '/image/6.jpg',

  },
  {
    id: 4,
    nameD: 'श्री. प्रल्हाद भाऊसो पाटील (बाप्पा)',
    designation: 'सदस्य',
    imgD: '/image/6.jpg',

  },
  {
    id: 5,
    nameD: 'श्री. धैर्यशिल राजाराम पाटील (विकासभैय्या)',
    designation: 'सदस्य',
    imgD: '/image/6.jpg',

  },
  {
    id: 6,
    nameD: 'श्री. गगनराज विठ्ठलराव पाटील (भैय्या)',
    designation: 'सदस्य',
    imgD: '/image/9.jpg',

  },
  {
    id: 7,
    nameD: 'सौ. मयुरी उदयसिंह घोरपडे (माई)',
    designation: 'सदस्य',
    imgD: '/image/9.jpg',

  },

]

const DirectorBoard = () => {
  return (
    <div>
      <div className="flex items-center flex-col">
        <p className="text-5xl pb-2">Board of Directors</p>
        <img src="/images/5.png" alt="" className="" />
      </div>
      <div className="md:grid md:grid-cols-4 md:px-32">
        {DirectorData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 m-5 cursor-pointer rounded-2xl"
          >
            <div className="p-9"> <img src={item.imgD} alt={item.id} className="rounded-[100%] border-4 border-[#D2893F] p-1" /></div>

            <div className="flex flex-col ">
              <p className="text-xl  text-center font-bold text-[#3F2B17]">{item.nameD}</p>
              <p className="text-center text-xl text-[#3F2B17]">
                {item.designation}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default DirectorBoard
