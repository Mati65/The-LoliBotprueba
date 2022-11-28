import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
try{
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
      
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista2'](), rowId: `${usedPrefix}creadora`},
{title: lenguajeGB['smsLista4'](), rowId: `${usedPrefix}ping`},
{title: lenguajeGB['smsLista5'](), rowId: `${usedPrefix}infomenu`},
{title: lenguajeGB['smsLista6'](), rowId: `${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista7'](), rowId: `${usedPrefix}instalarbot`},
{title: lenguajeGB['smsLista8'](), rowId: `${usedPrefix}serbot`},
{title: lenguajeGB['smsLista9'](), rowId: `${usedPrefix}términos`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista10']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista11'](), rowId: `${usedPrefix}lb`},
{title: lenguajeGB['smsLista12'](), rowId: `${usedPrefix}listavip`},
{title: lenguajeGB['smsLista13'](), rowId: `${usedPrefix}pase premium`},
{title: lenguajeGB['smsLista15'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeGB['smsLista16'](), rowId: `${usedPrefix}buy`},
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista18']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista19'](), rowId: `${usedPrefix}descargasmenu`},
{title: lenguajeGB['smsLista20'](), rowId: `${usedPrefix}buscarmenu`},
{title: lenguajeGB['smsLista21'](), rowId: `${usedPrefix}convertidormenu`},
{title: lenguajeGB['smsLista22'](), rowId: `${usedPrefix}audioefectomenu`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista23']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista24'](), rowId: `${usedPrefix}juegosmenu`},
{title: lenguajeGB['smsLista25'](), rowId: `${usedPrefix}audios`},
{title: lenguajeGB['smsLista26'](), rowId: `${usedPrefix}stickermenu`},
{title: lenguajeGB['smsLista27'](), rowId: `${usedPrefix}makermenu`},
{title: lenguajeGB['smsLista29'](), rowId: `${usedPrefix}randommenu`},
{title: lenguajeGB['smsLista30'](), rowId: `${usedPrefix}hornymenu`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista31']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista32'](), rowId: `${usedPrefix}grupomenu`},
{title: lenguajeGB['smsLista33'](), rowId: `${usedPrefix}listas`},
{title: lenguajeGB['smsLista34'](), rowId: `${usedPrefix}enable`},
{title: lenguajeGB['smsLista35'](), rowId: `${usedPrefix}ownermenu`}
]}]


const listMessage = {
text: `*╭─────────────────────❊*
┃ *𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➤ *𝙃𝙤𝙡𝙖 𝙘𝙤́𝙢𝙤 𝙚𝙨𝙩𝙖́ ✨ ${name}!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┏━━━━━━━━━━━━━━━━━━━┓
         **Menu del bot**
┗━━━━━━━━━━━━━━━━━━━┛
┃ *< 𝙄𝙣𝙛𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ℹ️️ _.infobot_
┣ ඬ⃟ℹ️️ _.grupos_
┣ ඬ⃟ℹ️ _.instalarbot_
┣ ඬ⃟ℹ️ _.menusimple_
┣ ඬ⃟ℹ️️ _.menuaudios_
┣ ඬ⃟ℹ️️ _.menu2_
┣ ඬ⃟ℹ️ _.estado_
┣ ඬ⃟ℹ️️ _.sc_
┣ ඬ⃟ℹ️ _.ping_
┣ ඬ⃟ℹ️ _.infomenu
┣ ඬ⃟ℹ️ _.juegosmenu
┣ ඬ⃟ℹ️ _.grupomenu
┣ ඬ⃟ℹ️ _.descargasmenu
┣ ඬ⃟ℹ️ _.búsquedarmenu
┣ ඬ⃟ℹ️ _.ownermenu
┣ ඬ⃟ℹ️ _Bot_
┣ ඬ⃟ℹ️ _¿Qué es un Bot?_
┣ ඬ⃟ℹ️ _Términos y condiciones_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙐𝙣𝙚 𝙖𝙡 𝙗𝙤𝙩 𝙖 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🤖 _.join *link del grupo*_ 
┣ ඬ⃟🤖 _.botemporal *link de grupo*
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙎𝙚𝙧𝙗𝙤𝙩 - 𝙟𝙖𝙙𝙞𝙗𝙤𝙩 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 _.serbot_
┣ ඬ⃟ 🤖 _.stop_
┣ ඬ⃟ 🤖 _.bots_
┗━━━━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙅𝙪𝙚𝙜𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🕹 _.mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🕹️ _.ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ ️🕹 _.prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🕹 _.pajero *<nombre / @tag>*_
┣ ඬ⃟ 🕹 _.pajera *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.puto *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.puta *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.manco *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.manca *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.rata *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.love *<nombre / @tag>*_
┣ ඬ⃟ 🕹️ _.doxear *<nombre / @tag>*_
┣ ඬ⃟ 🕹 _.pregunta *<texto>*_
┣ ඬ⃟ 🕹️ _.suitpvp *<@tag>*_
┣ ඬ⃟ 🕹️ _.slot *<apuesta>*_
┣ ඬ⃟ 🕹️ _.ttt *<nombre sala>*_
┣ ඬ⃟ 🕹️ _.delttt_
┣ ඬ⃟ 🕹️ _.simi *<texto>*_
┣ ඬ⃟ 🕹️ _.top *<texto>*_
┣ ඬ⃟ 🕹️ _.topotakus_
┣ ඬ⃟🕹️️ _.top10gays_
┣ ඬ⃟🕹️️ _.toplind@s_
┣ ඬ⃟🕹️️ _.topput@s_
┣ ඬ⃟🕹️️ _.toppajer@s_
┣ ඬ⃟🕹️️ _.topotakus_
┣ ඬ⃟🕹️️ _.topintegrantes_
┣ ඬ⃟🕹️️ _.toplagrasa_
┣ ඬ⃟🕹️️ _.toppanafrescos_
┣ ඬ⃟🕹️ _.topshiposters_
┣ ඬ⃟🕹️️ _.toppajeros_
┣ ඬ⃟🕹️️ _.toplind@s_
┣ ඬ⃟🕹️️ _.topfamosos_
┣ ඬ⃟🕹️️ _.topsoltero
┣ ඬ⃟🕹️️ _.topparejas_
┣ ඬ⃟ 🕹️ _.formarpareja_
┣ ඬ⃟ 🕹️ _.verdad_
┣ ඬ⃟ 🕹️ _.reto_
┣ ඬ⃟ 🕹️ _.cancion_
┣ ඬ⃟ 🕹️ _.pista_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< 𝙋𝙖𝙧𝙚𝙟𝙖𝙨 💞  />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *Declarate con alguien*
┃ *para que sean Parejas!!*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ ❤️➺ _.listaparejas_
┣ ඬ⃟ ❤️➺ _.mipareja_
┣ ඬ⃟ ❤️➺ _.pareja *@tag*_
┣ ඬ⃟ ❤️➺ _.aceptar *@tag*_
┣ ඬ⃟ ❤️➺ _.rechazar *@tag*_
┣ ඬ⃟ ❤️➺ _.terminar *@tag*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓
┃ *<𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _.owner_
┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _.enable
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣ *< 𝙍𝙚𝙥𝙤𝙧𝙩𝙖𝙧 𝙛𝙖𝙡𝙡𝙤𝙨 𝙚𝙣 𝙖𝙡𝙜𝙪́𝙣 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Reporta cualquier comando que falle para poder solucionarlo
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _.reporte *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣ *< 𝙎𝙚𝙧 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *Convierte en un(a)*
┃ *Usuario(a) Premium!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🎟️ _.listapremium_
┣ ඬ⃟ 🎟️ _.pase premium_
┣ ඬ⃟ 🎟️ _.pass premium_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _.instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.mediafire *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.gitclone *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.gdrive *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.xnxxdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.xvideosdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.twitter *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb5 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.play *<texto>*_
┣ ඬ⃟ 📥 _.play.1 *<texto>*_
┣ ඬ⃟ 📥 _.play.2 *<texto>*_
┣ ඬ⃟ 📥 _.playdoc *<texto>*_
┣ ඬ⃟ 📥 _.playlist *<texto>*_
┣ ඬ⃟ 📥 _.playlist2 *<texto>*_
┣ ඬ⃟ 📥 _.spotify *<texto>*_
┣ ඬ⃟ 📥 _.stickerly *<texto>*_
┣ ඬ⃟ 📥 _.ringtone *<texto>*_
┣ ඬ⃟ 📥 _.soundcloud *<texto>*_
┣ ඬ⃟ 📥 _.imagen *<texto>*_
┣ ඬ⃟ 📥 _.pinteret *<texto>*_
┣ ඬ⃟ 📥 _.wallpaper *<texto>*_
┣ ඬ⃟ 📥 _.wallpaper2 *<texto>*_
┣ ඬ⃟ 📥 _.pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.igstalk *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.igstory *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙜𝙧𝙪𝙥𝙤𝙨 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _.add *<numero>*_
┣ ඬ⃟ 💎 _.kick *<@tag>*_
┣ ඬ⃟ 💎 _.grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _.grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _.promote *<@tag>*_
┣ ඬ⃟ 💎 _.demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _.demote *<@tag>*_
┣ ඬ⃟ 💎 _.infogroup_
┣ ඬ⃟ 💎 _.resetlink_
┣ ඬ⃟ 💎 _.link_
┣ ඬ⃟ 💎 _.setname *<texto>*_
┣ ඬ⃟ 💎 _.setdesc *<texto>*_
┣ ඬ⃟ 💎 _.invocar *<texto>*_
┣ ඬ⃟ 💎 _.setwelcome *<texto>*_
┣ ඬ⃟ 💎 _.setbye *<texto>*_
┣ ඬ⃟ 💎 _.hidetag *<texto>*_
┣ ඬ⃟ 💎 _.warn *<@tag>*_
┣ ඬ⃟ 💎 _.unwarn *<@tag>*_
┣ ඬ⃟ 💎 _.listwarn_
┣ ඬ⃟ 💎 _.fantasmas_
┣ ඬ⃟ 💎 _.destraba_
┣ ඬ⃟ 💎 _.setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤𝙧𝙚𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _.togifaud *<video>*_
┣ ඬ⃟ 🧧 _.robar *texto*
┣ ඬ⃟ 🧧 _.wm *texto*
┣ ඬ⃟ 🧧 _.toimg *<sticker>*_
┣ ඬ⃟ 🧧 _.tomp3 *<video>*_
┣ ඬ⃟ 🧧 _.tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _.toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _.tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _.tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _.tts es *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙀𝙛𝙚𝙘𝙩𝙤𝙨 𝙮 𝙡𝙤𝙜𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _.mensajefalso *<nombre|mensaje>*_
┣ ඬ⃟ 🖍️ _.phmaker *<opcion> <imagen>*_
┣ ඬ⃟ 🖍️ _.logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _.logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _.logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _.ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _.hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _.simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _.lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _.itssostupid_
┣ ඬ⃟ 🖍️ _.pixelar_
┣ ඬ⃟ 🖍️ _.blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙁𝙧𝙖𝙨𝙚𝙨 𝙮 𝙩𝙚𝙭𝙩𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _.piropo_
┣ ඬ⃟ 🥀 _.consejo_
┣ ඬ⃟ 🥀 _.fraseromantica_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙍𝙖𝙣𝙙𝙤𝙬 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _.kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _.cristianoronaldo_
┣ ඬ⃟ 👾 _.messi_
┣ ඬ⃟ 👾 _.meme_
┣ ඬ⃟ 👾 _.itzy_
┣ ඬ⃟ 👾 _.blackpink_
┣ ඬ⃟ 👾 _.lolivid_
┣ ඬ⃟ 👾 _.loli_
┣ ඬ⃟ 👾 _.navidad_
┣ ඬ⃟ 👾 _.ppcouple_
┣ ඬ⃟ 👾 _.wpmontaña_
┣ ඬ⃟ 👾 _.pubg_
┣ ඬ⃟ 👾 _.wpgaming_
┣ ඬ⃟ 👾 _.wpaesthetic_
┣ ඬ⃟ 👾 _.wpaesthetic2_
┣ ඬ⃟ 👾 _.wprandom_
┣ ඬ⃟ 👾 _.wallhp_
┣ ඬ⃟ 👾 _.wpvehiculo_
┣ ඬ⃟ 👾 _.wpmoto_
┣ ඬ⃟ 👾 _.coffee_
┣ ඬ⃟ 👾 _.pentol_
┣ ඬ⃟ 👾 _.caricatura_
┣ ඬ⃟ 👾 _.ciberespacio_
┣ ඬ⃟ 👾 _.technology_
┣ ඬ⃟ 👾 _.doraemon_
┣ ඬ⃟ 👾 _.hacker_
┣ ඬ⃟ 👾 _.planeta_
┣ ඬ⃟ 👾 _.randomprofile_
┣ ඬ⃟ 👾 _.neko_
┣ ඬ⃟ 👾 _.waifu_
┣ ඬ⃟ 👾 _.akira_
┣ ඬ⃟ 👾 _.akiyama_
┣ ඬ⃟ 👾 _.anna_
┣ ඬ⃟ 👾 _.asuna_
┣ ඬ⃟ 👾 _.ayuzawa_
┣ ඬ⃟ 👾 _.boruto_
┣ ඬ⃟ 👾 _.chiho_
┣ ඬ⃟ 👾 _.chitoge_
┣ ඬ⃟ 👾 _.deidara_
┣ ඬ⃟ 👾 _.erza_
┣ ඬ⃟ 👾 _.elaina_
┣ ඬ⃟ 👾 _.eba_
┣ ඬ⃟ 👾 _.emilia_
┣ ඬ⃟ 👾 _.hestia_
┣ ඬ⃟ 👾 _.hinata_
┣ ඬ⃟ 👾 _.inori_
┣ ඬ⃟ 👾 _.isuzu_
┣ ඬ⃟ 👾 _.itachi_
┣ ඬ⃟ 👾 _.itori_
┣ ඬ⃟ 👾 _.kaga_
┣ ඬ⃟ 👾 _.kagura_
┣ ඬ⃟ 👾 _.kaori_
┣ ඬ⃟ 👾 _.keneki_
┣ ඬ⃟ 👾 _.kotori_
┣ ඬ⃟ 👾 _.kurumi_
┣ ඬ⃟ 👾 _.madara_
┣ ඬ⃟ 👾 _.mikasa_
┣ ඬ⃟ 👾 _.miku_
┣ ඬ⃟ 👾 _.minato_
┣ ඬ⃟ 👾 _.naruto_
┣ ඬ⃟ 👾 _.nezuko_
┣ ඬ⃟ 👾 _.sagiri_
┣ ඬ⃟ 👾 _.sasuke_
┣ ඬ⃟ 👾 _.sakura_
┣ ඬ⃟ 👾 _.cosplay_
┗━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 +18/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃*Usar bajo su responsabilidad*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *nota: no sea pajero*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔞 _.hornymenu_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙀𝙛𝙚𝙘𝙩𝙤𝙨 𝙥𝙖𝙧𝙖 𝙣𝙤𝙩𝙖𝙨 𝙙𝙚 𝙫𝙤𝙯 𝙤 𝙖𝙪𝙙𝙞𝙤𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Responde a un audio o nota de voz
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎤 _.audioefectomenu_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓
┃ *<𝘼𝙪𝙙𝙞𝙤𝙨/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔊 _.menu2_
┣ ඬ⃟🔊 _.audios_
┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘾𝙝𝙖𝙩 𝙖𝙣𝙤́𝙣𝙞𝙢𝙤 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _.start_
┣ ඬ⃟ 📳 _.next_
┣ ඬ⃟ 📳 _.leave_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧𝙚𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _.stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _.stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _.xnxxsearch *<texto>*_
┣ ඬ⃟ 🔍 _.animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _.google *<texto>*_
┣ ඬ⃟ 🔍 _.letra *<texto>*_
┣ ඬ⃟ 🔍 _.wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _.ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _.apkdone *<texto>*_
┣ ඬ⃟ 🔍 _.apkgoogle *<texto>*_
┣ ඬ⃟ 🔍 _.apkmody *<texto>*_
┣ ඬ⃟ 🔍 _.apkshub *<texto>*_
┣ ඬ⃟ 🔍 _.happymod *<texto>*_
┣ ඬ⃟ 🔍 _.hostapk *<texto>*_
┣ ඬ⃟ 🔍 _.revdl *<texto>*_
┣ ඬ⃟ 🔍 _.toraccino *<texto>*_
┣ ඬ⃟ 🔍 _.uapkpro *<texto>*_
┣ ඬ⃟ 🔍 _.playstore *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙃𝙚𝙧𝙧𝙖𝙢𝙞𝙚𝙣𝙩𝙖𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _.spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _.tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _.clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _.encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _.afk *<motivo>*_
┣ ඬ⃟ 🛠️ _.ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _.acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _.calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _.del *<mensaje>*_
┣ ඬ⃟ 🛠️ _.whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _.readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _.qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _.readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _.styletext *<texto>*_
┣ ඬ⃟ 🛠️ _.traducir *<texto>*_
┣ ඬ⃟ 🛠️ _.zoom *<texto>*_
┣ ඬ⃟ 🛠️ _.nowa *<numero>*_
┣ ඬ⃟ 🛠️ _.horario_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙍𝙋𝙂 - 𝙡𝙞𝙢𝙞𝙩𝙚𝙨 - 𝙚𝙘𝙤𝙣𝙤𝙢𝙞𝙖𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _.verificar_
┣ ඬ⃟ 💵 _.unreg *<numero de serie>*_
┣ ඬ⃟ 💵 _.claim_
┣ ඬ⃟ 💵 _.lb_
┣ ඬ⃟ 💵 _.levelup_
┣ ඬ⃟ 💵 _.perfil_
┣ ඬ⃟ 💵 _.minar_
┣ ඬ⃟ 💵 _.buy_
┣ ඬ⃟ 💵 _.balance_
┣ ඬ⃟ 💵 _.myns_
┣ ඬ⃟ 💵 _.work_
┣ ඬ⃟ 💵 _.buyall_
┣ ඬ⃟ 💵 _.transfer *<tipo> <cantidad> <@tag>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _.sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.sfull *<imagen o video>*_
┣ ඬ⃟ 👽 _.emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _.scircle *<imagen>*_
┣ ඬ⃟ 👽 _.sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _.semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _.attp *<texto>*_
┣ ඬ⃟ 👽 _.attp2 *<texto>*_
┣ ඬ⃟ 👽 _.attp3 *<texto>*_
┣ ඬ⃟ 👽 _.ttp *<texto>*_
┣ ඬ⃟ 👽 _.ttp2 *<texto>*_
┣ ඬ⃟ 👽 _.ttp3 *<texto>*_
┣ ඬ⃟ 👽 _.ttp4 *<texto>*_
┣ ඬ⃟ 👽 _.ttp5 *<texto>*_
┣ ඬ⃟ 👽 _.pat *<@tag>*_
┣ ඬ⃟ 👽 _.slap *<@tag>*_
┣ ඬ⃟ 👽 _.kiss *<@tag>*_
┣ ඬ⃟ 👽 _.dado_
┣ ඬ⃟ 👽 _.wm *<packname> <author>*_
┣ ඬ⃟ 👽 _.stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _.stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _.setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _.resetprefix_
┣ ඬ⃟ 👑 _.autoadmin_
┣ ඬ⃟ 👑 _.leavegc_
┣ ඬ⃟ 👑 _.cajafuerte_
┣ ඬ⃟ 👑 _.blocklist_
┣ ඬ⃟ 👑 _.block *<@tag / numero>*_
┣ ඬ⃟ 👑 _.unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _.enable *restrict*_
┣ ඬ⃟ 👑 _.disable *restrict*_
┣ ඬ⃟ 👑 _.enable *autoread*_
┣ ඬ⃟ 👑 _.disable *autoread*_
┣ ඬ⃟ 👑 _.enable *public*_
┣ ඬ⃟ 👑 _.disable *public*_
┣ ඬ⃟ 👑 _.enable *pconly*_
┣ ඬ⃟ 👑 _.disable *pconly*_
┣ ඬ⃟ 👑 _.enable *gconly*_
┣ ඬ⃟ 👑 _.disable *gconly*_
┣ ඬ⃟ 👑 _.enable *anticall*_
┣ ඬ⃟ 👑 _.disable *anticall*_
┣ ඬ⃟ 👑 _.enable *antiprivado*_
┣ ඬ⃟ 👑 _.disable *antiprivado*_
┣ ඬ⃟ 👑 _.msg *<texto>*_
┣ ඬ⃟ 👑 _.banchat_
┣ ඬ⃟ 👑 _.unbanchat_
┣ ඬ⃟ 👑 _.banuser *<@tag>*_
┣ ඬ⃟ 👑 _.unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _.dardiamantes *<@tag>*_
┣ ඬ⃟ 👑 _.añadirxp *<@tag>*_
┣ ඬ⃟ 👑 _.banuser *<@tag>*_
┣ ඬ⃟ 👑 _.bc *<texto>*_
┣ ඬ⃟ 👑 _.bcchats *<texto>*_
┣ ඬ⃟ 👑 _.bcgc *<texto>*_
┣ ඬ⃟ 👑 _.bcbot *<texto>*_
┣ ඬ⃟ 👑 _.cleartpm_
┣ ඬ⃟ 👑 _.restart_
┣ ඬ⃟ 👑 _.update_
┣ ඬ⃟ 👑 _.banlist_
┣ ඬ⃟ 👑 _.addprem *<@tag>*_
┣ ඬ⃟ 👑 _.delprem *<@tag>*_
┣ ඬ⃟ 👑 _.listprem_
┣ ඬ⃟ 👑 _.listcmd_
┣ ඬ⃟ 👑 _.setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _.addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _.delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━━━━┛
`, footer: `*${lenguajeGB['smsPareja']()} ➺ ${pareja ? `${name} 💞 ${conn.getName(pareja)}` : `😺 ${lenguajeGB['smsResultPareja']()}`}*`, //${name} ${ucapan()} //lenguajeGB['smsMenu']()
title: null,
buttonText: `${lenguajeGB['smsListaMenu']()}`, 
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	
      
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `${lenguajeGB['smsSaludo']()}`
  if (time >= 4) {
    res = `${lenguajeGB['smsDia']()}`
  }
  if (time >= 11) {
    res = `${lenguajeGB['smsTarde']()}`
  }
  if (time >= 15) {
    res = `${lenguajeGB['smsTarde2']()}`
  }
  if (time >= 17) {
    res = `${lenguajeGB['smsNoche']()}`
  }
  return res
} 
