import { useState } from "react";

const FAQ = () => {

    return (
        <div>
            <div className="my-8 text-center">
                <h2 className="text-5xl lg:text-6xl font-semibold text-red-700">FAQ</h2>
            </div>
            <div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-large lg:text-xl font-medium">Who can register as a blood donor?</div>
                        <div className="collapse-content">
                            <p className="text-sm lg:text-base">Anyone who meets the eligibility criteria for blood donation, including age, weight, and health requirements, can register as a donor on our platform.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-large lg:text-xl font-medium">How can I search for a blood donor by blood group?</div>
                        <div className="collapse-content">
                            <p className="text-sm lg:text-base">Simply use our search feature to filter donors by blood group. You can also see the location and contact information of the matched donors for easy access.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-large lg:text-xl font-medium">Is there a cost for using this service?</div>
                        <div className="collapse-content">
                            <p className="text-sm lg:text-base">No, our blood donation platform is entirely free to use for both donors and those in need of blood.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-large lg:text-xl font-medium">How can I ensure the privacy of my information?</div>
                        <div className="collapse-content">
                            <p className="text-sm lg:text-base">We prioritize privacy and security. Only essential details, such as your name, blood group, and location, are visible to those searching for donors in emergencies.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-large lg:text-xl font-medium">How often can I donate blood?</div>
                        <div className="collapse-content">
                            <p className="text-sm lg:text-base">Generally, you can donate blood every 8 weeks. However, we recommend checking with a healthcare professional for specific advice.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-large lg:text-xl font-medium">What should I do if I need blood urgently?</div>
                        <div className="collapse-content">
                            <p className="text-sm lg:text-base">If you need blood urgently, use our platform to search for nearby donors. Contact them directly through the provided information to arrange for assistance as soon as possible.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FAQ;