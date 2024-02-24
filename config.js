import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285794908894', 'Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285794908894'
global.packname = 'Kιɳα Bσƚ By'
global.author = '© Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.namebot = '​GuraBotz 3 - MD'
global.wm = '© Kιɳα Bσƚ By Myuko'
global.stickpack = 'Kιɳα Bσƚ By'
global.stickauth = '© Kιɳα Bσƚ'
global.fotonya = 'https://telegra.ph/file/da3dd014f4481e4bbd089.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/@iky_alwaysgood'
global.sgh = '!'
global.sgc = 'https://chat.whatsapp.com/GbNiwLK3R9y4pOUFDW5eAQ'
// Donasi
global.psaweria = '!'
global.ptrakterr = '!'
global.povo = 'Tidak tersedia'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = '4b884384e3773477bd9166ba' //api.itsrose.life // apikey sudah prem cma ga di kustom aja
global.xyro = 'MboBZsHdYb'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "MboBZsHdYb",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
