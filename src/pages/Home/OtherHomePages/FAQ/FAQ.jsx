import { useState } from "react";
import image from '../../../../assets/faq_img.jpg'

const FAQ = () => {

    const [bgAccording, setBgAccording] = useState(null);

    // according data
    const accordingData = [
        {
            title: "Who can register as a blood donor?",
            description:
                "Anyone who meets the eligibility criteria for blood donation, including age, weight, and health requirements, can register as a donor on our platform.",
        },
        {
            title: "How can I search for a blood donor by blood group?",
            description:
                "Simply use our search feature to filter donors by blood group. You can also see the location and contact information of the matched donors for easy access.",
        },
        {
            title: "Is there a cost for using this service?",
            description:
                "No, our blood donation platform is entirely free to use for both donors and those in need of blood.",
        },
        {
            title: "How can I ensure the privacy of my information?",
            description:
                "We prioritize privacy and security. Only essential details, such as your name, blood group, and location, are visible to those searching for donors in emergencies.",
        },
        {
            title: "How often can I donate blood?",
            description:
                "Generally, you can donate blood every 8 weeks. However, we recommend checking with a healthcare professional for specific advice.",
        },
        {
            title: "What should I do if I need blood urgently?",
            description:
                "If you need blood urgently, use our platform to search for nearby donors. Contact them directly through the provided information to arrange for assistance as soon as possible.",
        },
    ];

    const handlebgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="bg-red-50 p-2 lg:p-8">
            <div className="lg:mb-8 text-center">
                <h2 className="text-3xl lg:text-6xl font-semibold text-red-700">FAQ</h2>
            </div>

            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
                <div className="lg:w-1/2">
                    <img src={image} alt="FAQ Image" />
                </div>

                <div className="flex gap-3 flex-col lg:w-1/2">
                    {accordingData?.map((according, index) => (
                        <article key={index} className="bg-[#e5eaf2] rounded">
                            <div
                                className="flex gap-2 cursor-pointer items-center justify-between w-full bg-red-600 p-3 rounded"
                                onClick={() => handlebgAccording(index)}
                            >
                                <h2 className={`text-[#ffffff] font-[600] text-base lg:text-[1.2rem]`}>
                                    {according.title}
                                </h2>
                                <svg
                                    className="fill-[#ffffff] shrink-0 ml-8"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center transition duration-200 ease-out ${bgAccording === index && "!rotate-180"
                                            }`}
                                    />
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${bgAccording === index && "!rotate-180"
                                            }`}
                                    />
                                </svg>
                            </div>
                            <div
                                className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${bgAccording === index
                                    ? "grid-rows-[1fr] opacity-100 p-3"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="text-black text-sm lg:text-base font-semibold overflow-hidden">
                                    {according.description}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default FAQ;
