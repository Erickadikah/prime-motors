import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const footerItems = [
   [
        {
            title: "Services",
            services: [
            "Car Rental System",
            "Car services",
            "Car Sales",
            "Tata Spare Parts",
            ]
        },
    ],
    [
        {
            title: "Social Media Links",
            links: [
                "Facebook",
                "Twitter",
                "Instagram",
            ],
            icons: [
                <FaFacebook fontSize={"18px"} />, 
                <FaTwitter fontSize={"18px"} />, 
                <FaInstagram fontSize={"18px"} />, 
            ]
        }
    ],

    [
        {
            title: "More",
            links: [
                "FAQs",
                "Our Learning",
                "Careers",
                "About Us",
                "Our team",
                "Join Us",
            ]
        }
    ]
]




export const contactDetails = [
  {
    title: 'Contact Us',
    links: [
      {
        title: 'Call us',
        val: ['+254792873157', '+254792650720', '+254768403263'],
        icon: <FaPhone fontSize={"15px"} />, 
      },
      {
        title: 'Email Us',
        val: ['devdynamos@info.com', 'devdynamos@support.com'],
        icon: <FaEnvelope fontSize={"15px"} />, 
      },
      {
        title: 'Visit Us',
        val: ['Mamlaka Road Nairobi'],
        icon: <FaMapMarkerAlt fontSize={"15px"} />, 
      },
    ],
  },
];

