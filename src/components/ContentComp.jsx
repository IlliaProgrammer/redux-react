import React from 'react';
import {GoVerified} from 'react-icons/go'
import  Reactions from '../components/UI/Reactions';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa'
import { RiRepeatLine } from 'react-icons/ri'
import { BsUpload } from 'react-icons/bs'
 
const ContentComp = ({publication}) => {
    console.log(publication)
    return (
        <div className="bg-gray-800 p-4 text-white max-w-max rounded-lg mt-5 m-auto max-w-600">
        <div className="flex flex-row items-center space-x-4 align-middle">
            <img className="h-10 w-10 rounded-full" src={publication.authorImage} alt="Profile"/>
            <div className='flex flex-row'>
                <p className="text-base font-bold">{publication.author}</p>
                <GoVerified className='h-25px m-1'/>
                <p className="text-gray-600 text-sm m-1">{publication.authorNickname}</p>
                <p className="text-gray-600 text-sm m-1">{publication.publicationDate}</p>
            </div>
        </div>
        <div className="pl-10">
            <p className='pl-3 pb-2 font-semibold'>{publication.text}</p>
            <img className="rounded-md" src={publication.publicationImage} alt="art"/>
        </div>
        <div className='flex flex-row justify-between'>
            <Reactions><FaRegComment className='h-6px'/>{publication.comments}</Reactions>
            <Reactions><RiRepeatLine className='h-6px'/>{publication.reposts}</Reactions>
            <Reactions><AiOutlineHeart className='h-6px'/>{publication.likes}</Reactions>
            <Reactions><BsUpload/></Reactions>
        </div>
      </div>
    );
};

export default ContentComp;