//Retrieving the id from url and storing in a variable called id
const id = new URLSearchParams(window.location.search).get("id");
//-----------------------------------------------------------------------------
import { getNavbar } from '../MODULES/navbarModule.js';
import { getFooter2 } from '../MODULES/footer2Module.js';
document.querySelector('.m_container').innerHTML = getNavbar();
document.querySelector('.m_footer2').innerHTML = getFooter2();

