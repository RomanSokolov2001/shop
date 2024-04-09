import React from "react"
import { Home } from "@mui/icons-material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import shoesIcon from '../../assets/shoesIcon.svg';
import hoodieIcon from '../../assets/hoodieIcon.svg';
import homeIcon from '../../assets/homeIcon.svg';
import threedotsIcon from '../../assets/threedotsIcon.svg';




export const sidebarData = [
    {
        title: 'Home',
        icon: <img src={homeIcon}/>,
        link: '/home'
    },
    {
        title: 'Hoodie',
        icon: <img className='icon'src={hoodieIcon}/>,
        link: '/hoodie'
    },
    {
        title: 'Shoes',
        icon: <img className='icon' src={shoesIcon}/>,
        link: '/shoes'
    },
    {
        title: 'Else',
        icon: <img src={threedotsIcon}/>,
        link: '/else'
    },
    


]