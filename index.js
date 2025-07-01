const puppeteer=require('puppeteer');

async function start(){
    const browser=await puppeteer.launch()
    const page=await browser.newPage()
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    await page.screenshot({path:"amazing2.png",fullPage:true})
    await browser.close()
}

start()