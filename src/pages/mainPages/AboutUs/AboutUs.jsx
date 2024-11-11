import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { MdPeopleAlt } from 'react-icons/md';
import { RiGlobalLine } from 'react-icons/ri';
import { SlSocialFacebook, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    const teamMembers = [
        { name: "Dr. Sarah Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=200&width=200" },
        { name: "Michael Chen", role: "Chief Operations Officer", image: "/placeholder.svg?height=200&width=200" },
        { name: "Dr. Emily Rodriguez", role: "Medical Director", image: "/placeholder.svg?height=200&width=200" },
        { name: "David Nkosi", role: "Community Outreach Manager", image: "/placeholder.svg?height=200&width=200" },
    ]

    return (
        <div>
            <main className="container mx-auto px-4 py-8">
                <section className="mb-16">
                    <h1 className="text-4xl font-bold text-red-600 mb-4 text-center">About DonateLife</h1>
                    <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                        DonateLife is a non-profit organization dedicated to connecting blood donors with those in need. Our mission is to save lives by making blood donation accessible, efficient, and community-driven.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card bg-white shadow-lg">
                            <div className="card-body text-center">
                                <FaRegHeart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                                <p className="text-gray-600">To ensure that every patient in need has access to safe, life-saving blood when they need it most.</p>
                            </div>
                        </div>
                        <div className="card bg-white shadow-lg">
                            <div className="card-body text-center">
                                <MdPeopleAlt className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                                <p className="text-gray-600">Building a network of dedicated donors and volunteers committed to making a difference in their communities.</p>
                            </div>
                        </div>
                        <div className="card bg-white shadow-lg">
                            <div className="card-body text-center">
                                <RiGlobalLine className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
                                <p className="text-gray-600">Since our founding, we've facilitated over 100,000 successful blood donations across the country.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="card bg-white shadow-lg">
                                <div className="card-body text-center">
                                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-gray-600 mb-4">{member.role}</p>
                                    <div className="flex justify-center space-x-2">
                                        <button variant="outline" size="icon" className="w-8 h-8">
                                            <SlSocialFacebook className="h-4 w-4" />
                                        </button>
                                        <button variant="outline" size="icon" className="w-8 h-8">
                                            <SlSocialTwitter className="h-4 w-4" />
                                        </button>
                                        <button variant="outline" size="icon" className="w-8 h-8">
                                            <SlSocialLinkedin className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-red-50 rounded-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Our Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <FiAward className="h-12 w-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">100,000+</h3>
                            <p className="text-gray-600">Successful Donations</p>
                        </div>
                        <div className="text-center">
                            <MdPeopleAlt className="h-12 w-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">50,000+</h3>
                            <p className="text-gray-600">Registered Donors</p>
                        </div>
                        <div className="text-center">
                            <RiGlobalLine className="h-12 w-12 text-red-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">100+</h3>
                            <p className="text-gray-600">Cities Covered</p>
                        </div>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Join Our Mission</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Whether you're a donor, volunteer, or supporter, there's a place for you in our community. Together, we can make a difference.
                    </p>
                    <Link to="/login">
                        <button className="btn bg-red-600 hover:bg-red-700 text-white">Get Involved</button>
                    </Link>
                </section>
            </main>

        </div>
    );
};

export default AboutUs;