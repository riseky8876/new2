let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), 'RenBot-MDB\nJoin Grup MDB FAMILY : https://chat.whatsapp.com/KtBPMRrMAdIBjwKf3MQhkP', wm, 'NEXT', '.cecanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler