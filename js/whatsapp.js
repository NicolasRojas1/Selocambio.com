const fgp_wa = document.createElement('fgp_wa');

fgp_wa.innerHTML = 
    `
    <Style>
      fgp_wa img{
        width: 4.8rem;
        position: fixed;
        bottom: 13rem;
        right: 5rem;
        filter: drop-shadow(.6rem .6rem .6rem #0008);
        transition: all .3s ease;
      }

      fgp_wa img:hover{
        width: 6.7rem;
      }

      @media (max-width: 900px){
      fgp_wa img{
          width: 4.8rem;
          position: fixed;
          bottom: 7.3rem;
          right: 3rem;
          filter: drop-shadow(.6rem .6rem .6rem #0008);
          transition: all .3s ease;
        }
  
        fgp_wa img:hover{
          width: 6.7rem;
        }
      }

    </Style>

    <a href="http://wa.me/573184706394?text=Bienvenido Selocambio.com" target="_blank" rel="noopener noreferrer">

    <img src="/img/whatsapp-social-media-svgrepo-com.svg" alt="Icono Whatsapp">
    </a>
`;

document.body.appendChild(fgp_wa);