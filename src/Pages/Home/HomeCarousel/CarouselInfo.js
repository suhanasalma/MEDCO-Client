import autism from "../../../Assests/HomeCarousel/autism.jpg";
import adhd from "../../../Assests/HomeCarousel/ADHD.jpg";
import diabetics from "../../../Assests/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../Assests/HomeCarousel/pregnancy.jpg";
import blood from "../../../Assests/HomeCarousel/blood.jpeg";
import volunter from "../../../Assests/HomeCarousel/volunter.jpg";

export const CarouselInfo = [
  {
    img: autism,
    id: 1,
    details: `<div class="absolute top-5 xl:top-32 left-20 space-y-3 lg:space-y-10 2xl:w-4/12 p-4 "><p class=" text-green font-bold  text-2xl xl:text-4xl">
        Consult a doctor <br> anytime, anywhere <br> by <span class='border-b-2 border-brown'>video call</span>
       </p>
       <p class=" hidden md:block text-brown lg:text-md">
        Talk with a doctor using out highly secured HIPAA complaint <br> end-to-end encrypted video call
       </p>
       <div class='flex gap-5 flex-col sm:flex-row'>
       <button class='bg-green w-52 md:px-6  py-2 rounded-full text-white font-medium'>Ask A Doctor Online</button>
       <button class='bg-brown w-52 md:px-6  py-2 rounded-full text-green font-medium'>Unlimited Chat</button>
       </div>
       </div>
       `,
  },
  {
    img: adhd,
    id: 2,
    details: `<div class="absolute top-10 xl:top-32 left-20 space-y-3 lg:space-y-10 2xl:w-4/12 p-4 "><p class=" text-white font-bold  text-2xl xl:text-4xl">
        Feel better about <br> finding a healthcare
       </p>
       <p class=" hidden md:block text-green lg:text-md">
        At Medco, we take the guesswork out of finding the right <br> doctors, hospitals, and care for you and your family
       </p>
       <div class='flex gap-5 flex-col sm:flex-row'>
       <button class='bg-green w-52 md:px-6 py-2 text-white font-medium rounded-md'>Profile for Every <br> Doctor in World</button>
       <button class='bg-brown  w-52 md:px-6 md:py-2 text-green font-medium rounded-md'>More Than 10 Million <br>  Patient Ratings</button>
       </div>
       </div>
       `,
  },
  {
    img: diabetics,
    id: 3,
    details: `<div class="absolute top-10 md:top-5 xl:top-32 left-20 space-y-3 lg:space-y-10 lg:w-4/12 p-4">
        <p class=" text-green font-bold  text-2xl xl:text-4xl">
        24/7 Ambulance Service 
       </p>
       <p class=" hidden md:block text-white lg:text-md">
        in times like today, your health is very important, <br> especially since the number of COVID-19 cases is <br> increasing day by day, so we are ready to help you <br> with your health consultation.
       </p>
       <div>
       <button class='lg:w-72 bg-green px-6 py-2 rounded-full text-white font-bold text-xl'>Book Ambulance</button>
       </div>
       </div>
       `,
  },
  {
    img: blood,
    id: 4,
    details: `<div class="absolute top-20 sm:top-10 xl:top-32 left-20 space-y-3 lg:space-y-10 lg:w-4/12 p-4">
        <p class=" text-green font-bold text-2xl xl:text-4xl">
        Every Blood Doner is a Hero
       </p>
       <p class=" hidden sm:block text-brown lg:text-md">
       A blood donor is equal to a lifesaver. Saving a life won't cost you anything. Go ahead and donate blood <br> Be the reason for someone’s heartbeat.
       </p>
       <div>
       <button class='lg:w-72 bg-green px-6 py-2 rounded-full text-white font-bold text-xl'>Be a Doner</button>
       </div>
       </div>
       `,
  },
  {
    img: pregnancy,
    id: 5,
    details: `<div class="absolute top-10 xl:top-32 left-20 space-y-3 lg:space-y-10  lg:w-4/12 p-4">
        <p class=" text-brown font-bold  text-2xl xl:text-4xl">
        A grand adventure is about to begin and we will be your best company
       </p>
       <p class="hidden md:block text-green lg:text-md">
       A baby is something you carry inside you for nine months, in your arms for three years, and in your heart until the day you die.
       </p>
       <div >
       <button class='lg:w-72 bg-brown px-6 py-2 rounded-full  text-green font-bold text-xl'>Book Appointment</button>
       </div>
       </div>
       `,
  },
  {
    img: volunter,
    id: 6,
    details: `<div class="absolute top-10 xl:top-32 left-20 space-y-3 lg:space-y-10 lg:w-4/12 p-4">
    <p class=" text-green font-bold  text-2xl xl:text-4xl">
        Volunteers doesn't have necessarily have the time, <br> They just have the heart
       </p>
        <p class="hidden md:block text-brown lg:text-md">
        As you grow older, you will discover that you have two hands <br> one for helping yourself, the other for helping others.
       </p>
       <div >
       <button class='lg:w-72 bg-green px-6 py-2 rounded-full text-white font-bold text-xl'>volunteer </button>
       </div>
       </div>
       `,
  },
];
