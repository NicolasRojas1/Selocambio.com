const fgp_wa = document.createElement('fgp_wa');

fgp_wa.innerHTML = `
    <Style>
      fgp_wa img{
        width: 6rem;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        filter: drop-shadow(.6rem .6rem .6rem #0008);
        transition: all .3s ease;
      }

      fgp_wa img:hover{
        width: 10rem;
      }

    </Style>

    <a href="http://wa.me/573184706394?text=Bienvenido selocambio.com" target="_blank" rel="noopener noreferrer">

    <img src="/img/whatsapp-social-media-svgrepo-com.svg" alt="Icono Whatsapp">
    </a>
`;

document.body.appendChild(fgp_wa);