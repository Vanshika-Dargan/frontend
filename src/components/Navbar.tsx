import logo from '../assets/logo.svg'
export const Navbar = () =>{
    return (
        <div className="container py-5 flex items-center justify-between max-w-full sticky top-0 z-10 bg-white">
            <img className="w-[8rem]" src={logo}/>
            <div className='text-lg text-cuvetteGray'>Contact</div>
            </div>
    )
}