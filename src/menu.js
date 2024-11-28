import musubiImg from "./imgs/musubi.jpg";
import ramenImg from "./imgs/noodles.jpg";
import onigiriImg from "./imgs/onigiri2.jpg";
import prawnImg from "./imgs/prawn.jpg";
import samosaImg from "./imgs/Samosa.jpg";
import scampiImg from "./imgs/scampi.jpg";
import snapperImg from "./imgs/Snapper.jpg";
import steakImg from "./imgs/steak.jpg";

export const menu = `
  <div class="menu">
        <div class="menu-text">
          <h1>Our Menu</h1>
          <p>Bold flavors of the seas, crafted to satisfy every craving!</p>
        </div>
        <div class="menu-grid">
          <div class="menu-item">
            <img class="item-pic" src="${musubiImg}" alt="" />
            <p class="price">$9.99</p>
            <p class="item-name">East Musubi</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${ramenImg}" alt="" />
            <p class="price">$5.59</p>
            <p class="item-name">Japanes Ramen</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${onigiriImg}" alt="" />
            <p class="price">$15.69</p>
            <p class="item-name">Zoro's Onigiri</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${prawnImg}" alt="" />
            <p class="price">$10.99</p>
            <p class="item-name">Desi Prawn</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${samosaImg}" alt="" />
            <p class="price">$6.99</p>
            <p class="item-name">Nepali Samosa</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${scampiImg}" alt="" />
            <p class="price">$7.02</p>
            <p class="item-name">Scampi</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${snapperImg}" alt="" />
            <p class="price">$8.29</p>
            <p class="item-name">North Snapper</p>
          </div>
          <div class="menu-item">
            <img class="item-pic" src="${steakImg}" alt="" />
            <p class="price">$20.00</p>
            <p class="item-name">North Steak</p>
          </div>
        </div>
      </div>
`;
