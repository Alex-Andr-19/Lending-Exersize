import React, {useEffect, useCallback} from 'react';
import './NavBar.css';

export default function NavBar() {
  
  const getScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    return (winScroll / height) * document.documentElement.scrollHeight;
  }
  
  const handleScroll = useCallback(() => {
    let nav = document.getElementById('nav');
    // console.log(Math.round(getScroll()));
    if (Math.round(getScroll()) >= 280) {
      if (!nav.classList.contains('hidden')) {
        nav.classList.add('hidden');
      }
    } else {
      if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, [])
  

  return (
    <nav id='nav'>
    <div className="navbar-container">
      <div className="menu-elem openable">
        <div className="title">Demons</div>
        <div className="list">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
      <div className="menu-elem openable">
        <div className="title">Post</div>
        <div className="list">
          <ul>
            <li>Post Header</li>
            <li>Post Layout</li>
            <li className='disabled'>Share Buttons</li>
            <li>Gallry Post</li>
            <li>Video Post</li>
          </ul>
        </div>
      </div>
      <div className="menu-elem openable">
        <div className="title">Features</div>
        <div className="list">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
      <div className="menu-elem openable">
        <div className="title">Categories</div>
        <div className="list">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
      <div className="menu-elem openable">
        <div className="title">Shop</div>
        <div className="list">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
      <div className="menu-elem">
        <div className="title">Buy Now</div>
      </div>
    </div>
    </nav>  
  )
}