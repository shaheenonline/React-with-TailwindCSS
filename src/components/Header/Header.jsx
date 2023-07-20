import React, {useRef, useEffect} from "react";

function Header() {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header');
            }
            else{
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener('scroll', stickyHeaderFunc);
    },[]);

    const handleClick = e=> {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left : 0,

        });
    };

    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

    return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
        <div className="container">
            <div className="flex items-center justify-between">
                {/* --------logo-------- */}
                <div className="flex items-center gap-[18px]">
                    <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
                    rounded-full flex items-center justify-center">S</span>
                    <div className="leading-[28px]">
                        <h2 className="text-xl text-smallTextColor font-[700]">Shaheen</h2>
                        <p className="text-smallTextColor text-[14px] font-[500]">Personal</p>
                    </div>
                </div>
                {/* --------logo end-------- */}
                {/* --------menu start-------- */}
                <div className="menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className="flex items-center gap-[15px]">
                        <li>
                            <a onClick={handleClick} className="tex-smallTextColor font-[600]" href="#about">About</a>
                        </li>
                        <li>
                            <a onClick={handleClick} className="tex-smallTextColor font-[600]" href="#services">Services</a>
                        </li>
                        <li>
                            <a onClick={handleClick} className="tex-smallTextColor font-[600]" href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a onClick={handleClick} className="tex-smallTextColor font-[600]" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* --------menu end-------- */}
                {/* --------menu right start-------- */}
                <div className="flex text-center gap-4">
                    <button className="flex gap-2 items-center text-smallTextColor font-[600] border-[2px] border-solid
                    border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
                        <i class="ri-send-plane-line"></i> let's talk
                    </button>

                    <span onClick={toggleMenu} className="text-2xl text-smallTextColor cursor-pointer md:hidden">
                    <i class="ri-menu-line"></i>
                    </span>
                </div>
                {/* --------menu right end-------- */}
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;