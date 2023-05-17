import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createContAct } from '../store/actions/create.actions';


const CreateCont = () => {
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [message, setMessage] = useState("")
    const [pfp, setPfp] = useState("")
    const [postPic, setPostPic] = useState("")

    const dispath = useDispatch()

    function getTodaysDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = (today.getMonth() + 1).toString().padStart(2, '0');
        let day = today.getDate().toString().padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }

    const resetData = () => {
        setName(null)
        setNickname(null)
        setMessage(null)
        setPfp(null)
        setPostPic(null)
    }

    const onFormSub =() => {
        dispath(createContAct(
            {
                author: name,
                authorNickname: nickname,
                text: message,
                authorImage: pfp ? pfp : "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
                publicationImage: postPic ? postPic : "https://as1.ftcdn.net/v2/jpg/02/76/05/30/1000_F_276053042_i5mqIMdMKGf4pykMKwjoGI7XS6v93H9c.jpg",
                likes: 0,
                comments: 0,
                reposts: 0,
                publicationDate: getTodaysDate(),
            }
        ))

        resetData();
    }
    
    return (
        <div className='dark:bg-gray-900  flex flex-col justify-center p-1 rounded-xl w-fit'>
            <h2 className='text-white text-center text-2xl font-bold mt-30'>Create Post</h2>
            <form className='mx-auto p-8 pt-2 px-8 w-96'>
                
    
                    <div class="relative">
                        <input type="text" value={name} id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" onChange={({ target: { value }})=>{setName(value)}} required/>
                        <label htmlFor="name"  className="absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name *</label>
                    </div>
                    <div className="relative">
                        <input type="text" value={nickname} id="nickname" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  autoComplete="off" onChange={({ target: { value }})=>{setNickname(value)}} required/>
                        <label for="nickname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Nickname *</label>
                    </div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-999 dark:text-white">Your message</label>
                        <textarea id="message" value={message} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Leave a comment..." onChange={({ target: { value }})=>{setMessage(value)}} required></textarea>
                    <div class="relative">
                        <input type="text" value={pfp} id="pfp"  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" onChange={({ target: { value }})=>{setPfp(value)}}/>
                        <label htmlFor="pfp" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Profile URL *</label>
                    </div>
                    <div className="relative">
                        <input type="text" value={postPic} id="postPic" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  autoComplete="off" onChange={({ target: { value }})=>{setPostPic(value)}}/>
                        <label for="postPic" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Post URL *</label>
                    </div>
                    <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full flex w-fit" type='submit' onClick={(e) => {e.preventDefault(); onFormSub()}}>Create</button>
                    </div>
                   
            </form>
          
        </div>
    );
};

export default CreateCont;