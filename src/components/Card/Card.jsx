import React, { useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import hexToRgba from 'hex-to-rgba';
import rgbHex from 'rgb-hex';
import { getDominantColor } from "@rtcoder/dominant-color";
import { lightness } from 'simpler-color'

import { CardStyled, Favoritos, Player, Stats, Time } from './CardStyled';

import { FaUser } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';
import { GiChewedSkull, GiStarMedal, GiAk47, GiUnlitBomb } from 'react-icons/gi';
import { ImTrophy } from 'react-icons/im';

const Card = (props) => {

  const [colorBg, setColorBg] = useState('');
  const [colorPrimary, setColorPrimary] = useState('');
  const [colorSecondary, setColorSecondary] = useState('');

  useEffect(() => {
    setPallet();
    initTilt();
  }, [])

  function setPallet() {
    const img = document.querySelector('#team');

    getDominantColor(img, {
      downScaleFactor: 1,
      skipPixels: 0,
      colorsPaletteLength: 5,
      paletteWithCountOfOccurrences: false,
      colorFormat: 'hex',
      callback: (color, pallet) => {

        let r = 0, g = 0, b = 0;

        pallet.forEach((color) => {
          let rgb = color.split(',')
          r += parseInt(rgb[0])
          g += parseInt(rgb[1])
          b += parseInt(rgb[2])
        })

        r = Math.round(r / pallet.length)
        g = Math.round(g / pallet.length)
        b = Math.round(b / pallet.length)

        color = '#' + rgbHex(r, g, b)

        pallet = []
        pallet.push(lightness(color, 20))
        pallet.push(lightness(color, 30))
        pallet.push(lightness(color, 40))
        pallet.push(lightness(color, 50))
        pallet.push(lightness(color, 60))
        pallet.push(lightness(color, 85))
        pallet.push(lightness(color, 5))

        setColors(pallet);
      }
    });
  };

  function setColors(pallete) {
    let gradient = "linear-gradient(-110deg, "
    let colors = []

    for (let i = 0; i < 5; i++) {
      colors.push(hexToRgba(pallete[i], 0.5))
    }

    gradient += colors.join(', ')
    gradient += ")"

    setColorBg(gradient)
    setColorPrimary(pallete[6]);
    setColorSecondary(pallete[5]);
  }

  function initTilt() {
    VanillaTilt.init(document.querySelector(".card"), {
      reverse: true,
      max: 15,
      scale: 1.1,
      transition: true,
      glare: true,
      "max-glare": 0.5,
      gyroscope: true,
    });
  }

  return (

    <CardStyled className='card' bg={colorBg} primary={colorPrimary} secundary={colorSecondary}>
      <div className='imagemPerfil'>
        <img src={props?.infos?.user?.url} alt="arma" className='foto' />
      </div>

      <div className='names'>
        <h5 className='nick'>{props?.infos?.user?.nick}</h5>
        <h6 className='name'>{props?.infos?.user?.name}</h6>
      </div>

      <Stats primary={colorPrimary} secundary={colorSecondary}>
        <div className="stat">
          <IoStatsChartSharp className='stat-icon' />
          <span>KD:</span>
          {props?.infos?.user?.stats?.kd}
        </div>
        <div className="stat">
          <GiChewedSkull className='stat-icon' />
          <span>Kills:</span>
          {props?.infos?.user?.stats?.kills}
        </div>
        <div className="stat">
          <GiStarMedal className='stat-icon' />
          <span>MVPs:</span>
          {props?.infos?.user?.stats?.mvps}
        </div>
        <div className="stat">
          <ImTrophy className='stat-icon' />
          <span>Wins:</span>
          {props?.infos?.user?.stats?.wins}
        </div>
        <div className="stat">
          <GiAk47 className='stat-icon' />
          <span>Arma Favorita:</span>
          {props?.infos?.user?.stats?.favoriteWeapon}
        </div>
        <div className="stat">
          <GiUnlitBomb className='stat-icon' />
          <span>Bombas Plantadas:</span>
          {props?.infos?.user?.stats?.bombsPlanted}
        </div>
      </Stats>

      <Favoritos>
        <Time id='team' src={props?.infos?.team?.url} alt="logo do time favorito" />

        <Player src={props?.infos?.player?.url} alt="jogador favorito" />
      </Favoritos>
    </CardStyled>
  )
}

export default Card;