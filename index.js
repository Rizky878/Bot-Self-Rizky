/* THANKS TO */
// MHANKBARBAR
//RIZKY FADILAH
/* ============ */
 
 /* Oh iya ini script bot khusus grup ya om + anti banned ,etto kalo anti banned belum
 tentu h3h3 ,punten bang silahkan pake,mau ambil casenya ? silahkan hehe
 */
 // yang ingin bertanya silahkan chat wa.me/6282387804410
 // bingung cara pasangnya? cek readme gtihub om link: github.com/Rizky878/bot-group



const {
	WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const moment = require('moment-timezone')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const fs = require('fs')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:RizkyFdlh\n' 
            + 'ORG:Bot By Rizky;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6282387804410:+62 823-8780-4410\n' // Replace your number
            + 'END:VCARD'
prefix = '.'
blocked = []
async function starts() {
	const iky = new WAConnection()
	iky.logger.level = 'warn'
	console.log(banner.string)
	iky.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	iky.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(iky.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./session.json') && iky.loadAuthInfo('./session.json')
	iky.on('connecting', () => {
		start('2', 'Connecting...')
		
	})
	iky.on('open', () => {
		success('2', 'Connected')
		console.log(' ====================================================')
  console.log("│ +  WA Version: "+iky.user.phone.wa_version)
  console.log("│ +  OS Version: "+iky.user.phone.os_version)
  console.log("│ +  Device: "+iky.user.phone.device_manufacturer)
  console.log("│ +  Model: "+iky.user.phone.device_model)
  console.log("│ +  OS Build Number: "+iky.user.phone.os_build_number)
  console.log(' ====================================================')
  console.log(color(' ===================================================='))
  console.log(color('│ + Pembuat Script : https://wa.me/6282387804410           │ '))
  console.log(color(' ===================================================='))
  //jangan diubah atuh bang sakit:v
	})
	await iky.connect({timeoutMs: 30*1000})
	
	/*iky.on('group-participants-update', async (anu) => {
		try {
			const mdata = await iky.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await iky.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpgb'
				}
				teks = `[ NEW MEMBER IN GROUP _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]} ɪɴᴛʀᴏ/ᴅɪᴋɪᴄᴋ! \nNama: \nUmur: \nAskot:\nBaca Deks kak \n *_____________*\nMoga betah Di group!`
				let buff = await getBuffer(ppimg)
				iky.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await iky.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Semoga Tenang Di Alam Sana @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				iky.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})*/  
	
	
	
/*
HAPUS /* DAN */ 
/*
JIKA INGIN MENGHIDUPKAN WELCOME/PESAN SAMBUTAN
yang dihapus diatas ya lur ntar error nangis:v
*/
	iky.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	iky.on('chat-update', async (msg) => {
	try {
  if (!msg.hasNewMessage) return
  msg = JSON.parse(JSON.stringify(msg)).messages[0]
	if (!msg.message) return
	msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
	if (msg.key && msg.key.remoteJid == 'status@broadcast') return
	if (msg.key.fromMe) return
  global.prefix
	global.blocked
	const content = JSON.stringify(msg.message)
	const from = msg.key.remoteJid
	const type = Object.keys(msg.message)[0]
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('Asia/Jakarta').format('HH:mm DD-MM') + '-2021'
  const tanggal = moment.tz('Asia/Jakarta').format('DD-MM') + '-2021'
  const jams = moment.tz('Asia/Jakarta').format('HH:mm')
  const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
  body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
	budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const isCmd = body.startsWith(prefix)
  const botNumber = iky.user.jid
  const ownerNumber = [] // Your Number Example 6282387804410@s.whatsapp.net
	const isGroup = from.endsWith('@g.us')
  number = msg.participant ? msg.participant : iky.user.jid
	const sender = isGroup ? number : msg.key.remoteJid
	const groupMetadata = isGroup ? await iky.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.jid : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(sender) || false
	const taukah = budy
const q = args.join(' ')
	const reply = (teks) => {
				iky.sendMessage(from, teks, text, {quoted:msg})
			}
	const sendMess = (hehe, teks) => {
 iky.sendMessage(hehe, teks, text)
 }
  const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? iky.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : iky.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
	}
	const undadmin = 'Bot Bukan Admin,jadikan bot admin jika ingin menggunakan bot ini'
	const khusus = 'Perintah ini hanya dapat digunakan oleh admin grup!'
	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
	if (!isGroup && !isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color(taukah), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
  if (isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m',']', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  
  if (!isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color(taukah), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  if(isCmd && !isBotGroupAdmins) return reply (undadmin)
  if(isCmd && !isGroupAdmins) return reply(khusus)
  switch(command) {
  	case 'help':
case 'menu':
case 'bantuan':
reply(`
1. ${prefix}kick
2. ${prefix}add
3. ${prefix}promote
4. ${prefix}demote
5. ${prefix}close
6. ${prefix}open
7. ${prefix}owner`)
break
case 'kick':
try {
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('*Tag Target Yang Ingin Ditendang!*')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				
						mentions(`*Sayonara @${mentioned.split('@')[0]}*👋`, mentioned, true)
						iky.groupRemove(from, [mentioned])
					
					} catch {
						reply('*Tag Target Yang Ingin Ditendang!*')
						}
					break
					case 'promote':
					try {
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('*Tag Target Yang Ingin Dijadikan Admin!*')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
					
						mentions(`Sukses Menambahkan Admin! @${mentioned.split('@')[0]}`, mentioned, true)
						iky.groupMakeAdmin(from, mentioned)
					
					} catch {
						reply('*Tag Target Yang Ingin Dijadikan Admin!*')
						}
					break	
					case 'demote':
					try {
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di demote!')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
					
						mentions(`*Sukses Menghapus Admin! @${mentioned.split('@')[0]}*`, mentioned, true)
						iky.groupDemoteAdmin(from, mentioned)
					
					} catch {
						reply('Tag Target Yang Ingin Di demote!')
						}
					break
					
case 'open':
					    reply(`Berhasil Membuka Group!`)
						iky.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'close':
						reply(`Berhasil Menutup Group!`)
						iky.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
					case 'add':
					if (args[0].startsWith('08')) return reply ('Contoh: '+prefix+'add 62728288')
					//if(q.includes('@') && q.includes('-') && q.includes('+')) return reply ('Contoh: '+prefix+'add 62728288')
					let wibu = q
					let prk = wibu.replace(/[^a-zA-Z0-9 ]/g, '').split(' ')
let chunk = []
for (let i of prk) {
(i == ' ') ? '' : chunk.push(i)
}
console.log('Add With No: '+chunk.join(' '))
p = await iky.groupAdd(from,[`${chunk.join(' ')}@s.whatsapp.net`])
for (let user of p.participants.filter(user => Object.values(user)[0].code == 403)) {
reply('Mungkin User Tersebut Private!')
}
break
case 'owner':
                  iky.sendMessage(from, {displayname: "Rizky", vcard: vcard}, MessageType.contact, { quoted: gay})
       iky.sendMessage(from, 'wa.me/'+ownerNumber[0] ? ownerNumber[0] : 'Belum Terisi'+'\nThis my owner number',MessageType.text, { quoted: gay} )
           break    
default:
}
} catch (e) {
const emror = String(e)
if (emror.includes('startsWith')){ 
return
}
if (emror.includes('this.isZero')){
return
}
console.log('Error : %s', color(e, 'red'))
console.log(e)
}
})
}
starts()