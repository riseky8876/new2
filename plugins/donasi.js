let handler = async m => m.reply(`
            .✵.GRUP MDB FAMILY.✵.

            https://chat.whatsapp.com/ENjB4RE4xvjGrG46np7w43
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
