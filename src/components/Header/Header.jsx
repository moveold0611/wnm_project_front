import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import logo from '../../images/Logo/Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";
import { useQueryClient } from 'react-query';


function Header(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ isSubMenu, setIsSubMenu ] = useState(false);
    
    const menus = [
        { name: 'Dog', subMenus: ['HomeLiving', 'Fashion', 'Toy', 'Walk'] },
        { name: 'Customer Service', subMenus: ['Notice', 'FAQ'] },
        { name: 'Cat', subMenus: ['HomeLiving', 'Movement', 'Toy', 'Accessories'] }
    ];
    
    const handleLogoOnClick = () => {
        navigate("")
    }

    const handleLogoutOnClick = () => {
        localStorage.removeItem("accessToken");
        window.location.replace("/")
    }

    const handleGoToCartOnClick = () => {
        
        navigate(`/product/cart/${principal?.data?.data?.userId}`)
    }

    const handleSubMenuMouseEnter = () => {
        setIsSubMenu(true);
    };

    const handleSubMenuMouseLeave = () => {
        setIsSubMenu(false);
    };

    const handleMenuClick = (menuName) => {
        const pathMap = {
            Dog: '/products/dog',
            Cat: '/products/cat'
        }

        const path = pathMap[menuName];
            navigate(path);
    }

    const handleSubMenuClick = (menuName, subMenu) => {
        const pathMap = {
            Dog: {
                HomeLiving: '/products/dog/home-living',
                Fashion: '/products/dog/fashion',
                Toy: '/products/dog/toy',
                Walk: '/products/dog/walk',
            },
            Cat: {
                HomeLiving: '/products/cat/home-living',
                Movement: '/products/cat/movement',
                Toy: '/products/cat/toy',
                Accessories: '/products/cat/fashion',
            },
            CustomerService: {
                Notice: '/notice',
                FAQ: '/faq',
            },
        };
        
            const path = pathMap[menuName]?.[subMenu];
            navigate(path);
        };
    
    return (
        <div css={S.SLayout}>
            <div css={S.STopContainer}>
                <div>
                    <div css={S.SLogo}>
                        <img src={logo} onClick={handleLogoOnClick}/>
                    </div>
                </div>
            </div>
            <div css={S.SUserRelatedBox}>
                {!!principal?.data?.data ? (
                    <Link>
                        <h3 onClick={handleLogoutOnClick}>LOGOUT</h3>
                    </Link>
                ) : (
                    <Link to="/auth/signin">
                        <h3>LOGIN</h3>
                    </Link>
                )}
                    <Link to={`/orders`}>
                        <h3>MYPAGE</h3>
                    </Link>
                        <div css={S.SCartIcon} onClick={handleGoToCartOnClick}>
                            <TbShoppingBag />
                        </div>
                </div>
            <div css={S.SBottomContainer}>
                <ul css={S.SMenuBox} onMouseEnter={handleSubMenuMouseEnter} onMouseLeave={handleSubMenuMouseLeave}>
                    {menus.map((menu, index) => (
                        <li key={index}>
                            <div css={S.SFullMenuBox}>
                                <h3 onClick={() => handleMenuClick(menu.name)}>{menu.name}</h3>
                                <ul css={S.SSubMenuBox(isSubMenu)}>
                                    {menu.subMenus.map((subMenu, subIndex) => (
                                        <li key={subIndex}>
                                            <h3 onClick={() => handleSubMenuClick(menu.name, subMenu)}>{subMenu}</h3>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>
    );
}

export default Header;