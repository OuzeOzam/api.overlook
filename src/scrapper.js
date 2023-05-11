const puppeteer = require('puppeteer');

async function fetchOverData() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://overwatch.fandom.com/wiki/Baptiste');
  await page.waitForSelector('.ability_details_main', {
    visible: true,
  });
  let tab = [];
  const data = await page.evaluate(() => {
    const heroPageContent = document.querySelector('#mw-content-text');
    const heroName = document.querySelector('#firstHeading').innerText;
    const abilities = document.querySelectorAll('.ability_details_main');
    const abilityImage = document.querySelector('.summaryInfoAndImage');
    return {
      name: heroName,
      ability_image: abilityImage,
      abilities: Array.prototype.map.call(abilities, (ability) => {
        return {
          title: ability.querySelector('.abilityHeader').firstChild.data,
          img: ability.querySelector('.abilityImage div:nth-child(2) img').dataset.src,
        };
      }),
      
    };
  });
  tab.push(data);
  await browser.close();
  return data;
}

module.exports = fetchOverData;
