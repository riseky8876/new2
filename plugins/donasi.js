let handler = async m => m.reply(`
            .✵.GRUP RenBot-MDB.✵.

            https://chat.whatsapp.com/EJq4QQY6PyV8yU7U1gsQMi
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
