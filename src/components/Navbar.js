import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'




const Navbar = () => {
    return(
        <NavbarDiv>
            <NavLink className='logo' to='/'>
                <img className='logo_img' src='./images/logo1.png' alt='' />
            </NavLink>


            <NavLink className='location' to='/login'>
                <div className='location_icon'>
                    <LocationOnIcon/>
                </div>
                <span className='location_span1'>Hello</span>
                <span className='location_span2'>Select your address</span>
            </NavLink>


            <div className='search'>
                <div className='search_container'>
                    <div className='search_option'>
                        <span>All</span>
                        <ArrowDropDownIcon />
                    </div>
                    <input type='text' className='search_textField'/>
                    <SearchIcon className='search_Icon'/>
                </div>
            </div>


            <div className='menu'>
                <NavLink className='menu1' to='/'>
                    <div className='menu1_1'>
                        <img className='menu1_1_img1' src='./images/image1.png' alt='' />
                        <ArrowDropDownIcon className='menu1_1_icon2'/>
                    </div>
                </NavLink>

                <NavLink className='menu2' to='/'>
                    <div className='menu2_1'>
                        <span className='menu2_1_span1'>Hello, Sign in</span>
                        <br/>
                        <span className='menu2_1_span2'>Account & Lists</span>
                    </div>
                </NavLink>

                <NavLink className='menu3' to='/'>
                    <div className='menu3_1'>
                        <span className='menu3_1_span1'>Returns</span>
                        <br/>
                        <span className='menu3_1_span2'>& Orders</span>
                    </div>
                </NavLink>

                <NavLink className='menu4' to='/'>
                    <div className='menu4_1'>
                        <AddShoppingCartIcon className='menu4_1_icon1' fontSize='large'/>
                        <span className='menu4_1_span1'>Cart</span>
                    </div>
                </NavLink>
            </div>
        </NavbarDiv>
    )
}



export default Navbar



const NavbarDiv = styled.div`
    /* border: 1px solid red; */
    background: rgba(0,0,0);
    color: #fff;
    display: flex;
    align-items: center;


    /* logo */
    .logo{
        /* border: 1px solid red; */
        height: 70px;
        flex: 0.45;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;

        &_img{
            /* border: 1px solid red; */
            width: 130px;
            height: 40px;
        }
    }


    /* location */
    .location{
        /* border: 1px solid red; */
        color: #fff;
        height: 70px;
        flex: 0.5;
        display: grid;
        grid-template-columns: 0.5fr 2fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'icon span1 span1'
                             'icon span2 span2';

        &_icon{
            /* border: 1px solid red; */
            grid-area: icon;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &_span1{
            /* border: 1px solid red; */
            grid-area: span1;
            display: flex;
            align-items: flex-end;
            font-size: 13px;
        }

        &_span2{
            /* border: 1px solid red; */
            grid-area: span2;
            display: flex;
            align-items: flex-start;
            font-size: 15px;
            font-weight: bold;
        }
    }


    /* search */
    .search{
        /* border: 1px solid red; */
        height: 70px;
        display: flex;
        align-items: center;
        flex: 1.9;

        &_container{
            /* border: 1px solid red; */
            margin-left: 20px;
            width: 700px;
            display: flex;
        }

        &_option{
            /* border: 1px solid red; */
            border-radius: 5px 0px 0px 5px;
            background: rgba(200,200,200,1);
            color: #000;
            padding-left: 7px;
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &_textField{
            width: 630px;
            height: 40px;
        }

        &_Icon{
            border-radius: 0px 5px 5px 0px;
            background: rgba(255,195,0,0.9);
            color: #000;
            width: 45px;
            height: 40px;
        }
    }


    /* menu */
    .menu{
        /* border: 1px solid red; */
        height: 70px;
        flex: 1;
        display: flex;
        margin-right: 10px;

        &1{
            /* border: 1px solid red; */
            width: 10px;
            color: #fff;
            flex: 0.5;
            display: flex;
            justify-content: center;
            align-items: center;

            &_1{
                /* border: 1px solid red; */
                display: flex;
                margin-top: 20px;

                &_img1{
                    /* border: 1px solid red; */
                    height: 22px;
                    width: 30px;
                }

                &_icon2{
                    /* border: 1px solid red; */
                    height: 32px;
                    width: 24px;
                }
            }
        }

        &2{
            /* border: 1px solid red; */
            color: #fff;
            flex: 1.3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &_1{
                /* border: 1px solid red; */

                &_span1{
                    /* border: 1px solid red; */
                    font-size: 13px;
                }

                &_span2{
                    /* border: 1px solid red; */
                    font-size: 15px;
                    font-weight: bold;
                }
            }            
        }

        &3{
            /* border: 1px solid red; */
            color: #fff;
            flex: 0.8;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &_1{
                /* border: 1px solid red; */

                &_span1{
                    font-size: 13px;
                }

                &_span2{
                    font-size: 15px;
                    font-weight: bold;
                }
            } 
        }

        &4{
            /* border: 1px solid red; */
            color: #fff;
            flex: 0.6;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;

            &_1{
                /* border: 1px solid red; */
                margin-top: 13px;

                &_icon1{
                    /* border: 1px solid red; */
            }

                &_span1{
                    font-weight: bold;
                }
            }
        }
    }
`;