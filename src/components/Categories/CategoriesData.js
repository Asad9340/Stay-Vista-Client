import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import {
  GiBoatFishing,
  GiCampfire,
  GiCastle,
  GiForestCamp,
  GiIsland,
  GiMountainClimbing,
  GiPalmTree,
  GiTeapot,
} from 'react-icons/gi'

import { IoDiamond } from 'react-icons/io5'
import { MdOutlineApartment } from 'react-icons/md';
import { FaHotel, FaPlaneDeparture } from 'react-icons/fa';

export const categories = [
  {
    label: 'Beachfront',
    icon: TbBeach,
    description: 'This motel is located near a beautiful beach!',
  },
  {
    label: 'Hill View',
    icon: GiMountainClimbing,
    description: 'This motel offers stunning hill views!',
  },
  {
    label: 'Riverfront',
    icon: GiBoatFishing,
    description: 'This motel is located beside a scenic river!',
  },
  {
    label: 'Tea Garden Retreat',
    icon: GiTeapot,
    description: 'Stay in a peaceful motel surrounded by lush tea gardens!',
  },
  {
    label: 'City Stay',
    icon: MdOutlineApartment,
    description: 'A modern motel in the heart of the city!',
  },
  {
    label: 'Heritage Inn',
    icon: GiCastle,
    description: 'A historic motel inspired by Bangladesh’s heritage!',
  },
  {
    label: 'Eco Lodge',
    icon: GiForestCamp,
    description: 'An eco-friendly motel amidst nature!',
  },
  {
    label: 'Island Getaway',
    icon: GiIsland,
    description: 'This motel is on a beautiful island!',
  },
  {
    label: 'Resort Style',
    icon: TbPool,
    description: 'A luxurious motel with resort-style amenities!',
  },
  {
    label: 'Countryside Escape',
    icon: TbMountain,
    description: 'Enjoy a peaceful stay in the countryside!',
  },
  {
    label: 'Mangrove Retreat',
    icon: GiPalmTree,
    description: 'Stay close to the stunning Sundarbans mangrove forest!',
  },
  {
    label: 'Luxury Stay',
    icon: IoDiamond,
    description: 'Experience high-end luxury in this motel!',
  },
  {
    label: 'Budget Friendly',
    icon: FaHotel,
    description: 'Affordable yet comfortable motel stays!',
  },
  {
    label: 'Cultural Village Stay',
    icon: GiCampfire,
    description: 'Stay in a traditional village setting!',
  },
  {
    label: 'Airport Transit',
    icon: FaPlaneDeparture,
    description: 'Convenient motel stays near the airport!',
  },
];
