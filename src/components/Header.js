import { MdToggleOn, MdToggleOff } from 'react-icons/md'

const Header = ({ dark, setDark }) => {
    // const [dark, setDark] = useState(false);
    const handelDarkMode = () => {
        setDark(!dark)
    }
    return (
        <div className='p-8 bg-light_header pb-40 dark:bg-darkbg-dark'>
            <div className='container flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold dark:text-white '>Social Media Dashboard</h1>
                    <h5 className=' text-gray-700 text-sm font-medium dark:text-gray-500 '>Total Followers: 23,004</h5>
                </div>
                <div className=' flex items-center'> <span className='text-gray-500 font-semibold mr-2 text-sm'>Dark Mode</span>
                    <span onClick={handelDarkMode}>
                        {
                            dark ?
                                < MdToggleOn size={40} className=' cursor-pointer text-cyan-500' />
                                : < MdToggleOff size={40} className=' cursor-pointer text-gray-700' />
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header