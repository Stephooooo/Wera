import React from 'react';
import Buttons from '../common/buttons';
import Inputs from '../common/inputs';
import { useEffect, useRef, useState } from "react";

let County = [
  "Nairobi",
  "Mombasa",
  "Kilifi",
  "Nakuru",
  "Kisumu",
  "Kajiado",
  "Machakos",
  "Kwale",
  "Tana River",
  "Lamu",
  "Taita Taveta",
  "Garissa",
  "Wajir",
  "Mandera",
  "Marsabit",
  "Isiolo",
  "Meru",
  "Tharaka-nithi",
  "Embu",
  "Kitui",
  "Makueni",
  "Nyandarua",
  "Nyeri",
  "Kirinyaga",
  "Murang'a",
  "Kiambu",
  "Turkana",
  "West Pokot",
  "Samburu",
  "Trans Nzoia",
  "Uasin Gishu",
  "Elgeyo Marakwet",
  "Nandi",
  "Baringo",
  "Laikipia",
  "Narok",
  "Kericho",
  "Bomet",
  "Kakamega",
  "Vihiga",
  "Bungoma",
  "Busia",
  "Siaya",
  "Homa Bay",
  "Migori",
  "Kisii",
  "Nyamira",
];

let Industry = [
  "Accountancy,banking andfinance",
  "Business,consulting and management",
  "Charity and Social work",
  "Creative arts and design",
  "Energy and utilities",
  "Engineering and manufacturing",
  "Environment and agriculture",
  "Healthcare",
  "Hospitality and events mahagement",
  "Information technology",
  "Law, enforcement and security",
  "Leisure,sport and tourism",
  "Marketing, advertising and PR",
  "Media and Internet",
  "Property and construction",
  "Pubic services and admnistration",
  "Recruitment and HR",
  "Retail",
  "Sales",
  "Science and pharmaceuticals",
  "Teacher training and education",
  "Transport and Logistics",
];

let Type= [
    "Entry-level",
    "Internship",
    "Apprenticeship",
    "Mid-Level",
    "Senior-level"

];

function FindJobs() {
  return (
    <div>
    <div className='ml-20'>
    <Inputs 
    placeholder= "Job or Keyword"
    label="search"
    size= "lg"
    />
    </div>

    </div>
  )
}

export default FindJobs
