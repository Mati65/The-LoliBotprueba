let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/simpcard', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*𝑾𝒕𝒇 𝒆𝒓𝒆𝒔 𝒖𝒏 𝒔𝒊𝒎𝒑* ', m)
}
handler.help = ['simpcard']
handler.tags = ['maker']  
handler.command = /^(simpcard)$/i  
export default handler
