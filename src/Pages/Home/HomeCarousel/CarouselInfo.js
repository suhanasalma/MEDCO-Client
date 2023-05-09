import autism from "../../../Assests/HomeCarousel/autism1.jpg";
import adhd from "../../../Assests/HomeCarousel/ADHD.jpg";
import diabetics from "../../../Assests/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../Assests/HomeCarousel/pregnancy.jpg";
import blood from "../../../Assests/HomeCarousel/blood.jpg";
import volunter from "../../../Assests/HomeCarousel/volunter.jpg";

export const CarouselInfo = [
  {
    img: autism,
    id: 1,
    prev: 6,
    next: 2,
    details: `<div class="absolute top-10 left-20 space-y-10 w-4/12 p-4"><p class=" text-green font-bold text-4xl">
        Consult a doctor <br> anytime, anywhere <br> by <span class='border-b-2 border-brown'>video call</span>
       </p>
       <p class=" text-brown text-md">
        Talk with a doctor using out highly secured HIPAA complaint <br> end-to-end encrypted video call
       </p>
       <div>
       <button class='bg-green px-6 py-2 rounded-full text-white font-medium'>Ask A Doctor Online</button>
       <button class='bg-brown px-6 py-2 rounded-full text-green font-medium'>Unlimited Chat</button>
       </div>
       </div>
       `,
  },
  {
    img: adhd,
    id: 2,
    prev: 1,
    next: 3,
    details: `<div class="absolute top-10 left-20 space-y-10 w-4/12 p-4"><p class=" text-green font-bold text-4xl">
        Feel better about <br> finding a healthcare
       </p>
       <p class=" text-green text-md">
        At Medco, we take the guesswork out of finding the right <br> doctors, hospitals, and care for you and your family
       </p>
       <div class='flex gap-5'>
       <button class='bg-green px-6 py-2 text-white font-medium rounded-md'>Profile for Every <br> Doctor in World</button>
       <button class='bg-brown px-6 py-2  text-green font-medium rounded-md'>More Than 10 Million <br>  Patient Ratings</button>
       </div>
       </div>
       `,
  },
  {
    img: diabetics,
    id: 3,
    prev: 2,
    next: 4,
    details: `<div class="absolute top-10 left-20 space-y-10 w-4/12 p-4">
        <p class=" text-green font-bold text-4xl">
        We Are Ready to <br> Help Your Health <br> Problem 
       </p>
       <p class=" text-brown text-md">
        in times like today, your health is very important, <br> especially since the number of COVID-19 cases is <br> increasing day by day, so we are ready to help you <br> with your health consultation.
       </p>
       <div>
       <button class='bg-green px-6 py-2 rounded-full text-white font-medium'>Try Free Consultation</button>
       </div>
       </div>
       `,
  },
  {
    img: blood,
    id: 4,
    prev: 3,
    next: 5,
    details: `<div class="absolute top-10 left-20 space-y-10 w-4/12 p-4">
        <p class=" text-green font-bold text-4xl">
        Once a blood donor <br> always a lifesaver 
       </p>
       <p class=" text-green text-md">
       A blood donor is equal to a lifesaver. Saving a life won't cost you anything. Go ahead and donate blood <br> Be the reason for someone’s heartbeat.
       </p>
       <div>
       <button class='bg-brown px-6 py-2 rounded-full text-green font-bold text-xl'>Be a Doner</button>
       </div>
       </div>
       `,
  },
  {
    img: pregnancy,
    id: 5,
    prev: 4,
    next: 6,
    details: `<div class="absolute top-10 left-20 space-y-10 w-4/12 p-4">
        <p class=" text-green font-bold text-4xl">
        A grand adventure is about to begin and we will be your best company
       </p>
       <p class=" text-green text-md">
       A baby is something you carry inside you for nine months, in your arms for three years, and in your heart until the day you die.
       </p>
       <div>
       <button class='bg-brown px-6 py-2 rounded-full text-green font-bold text-xl'>Take an Appointment</button>
       </div>
       </div>
       `,
  },
  {
    img: volunter,
    id: 6,
    prev: 5,
    next: 1,
    details: `<div class="absolute top-10 left-20 space-y-10 w-4/12 p-4">
        <p class=" text-green font-bold text-4xl">
        As you grow older, you will discover that you have two hands <br> one for helping yourself, the other for helping others.
       </p>
       <div>
       <button class='bg-green px-6 py-2 rounded-full text-brown font-bold text-xl'>volunteer </button>
       </div>
       </div>
       `,
  },
];
