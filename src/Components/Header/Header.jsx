import profile from '../../assets/images/img1.jpg'
const Header = () => {
    return (
        <div className='flex justify-between text-center py-4 px-4 border-b-2 mx-auto max-w-7xl'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-10 rounded-full object-cover' src={profile} alt="" />


        </div>
    );
};

export default Header;