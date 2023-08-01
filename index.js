const Automation = require('./automation')
const Mail = require('./mail')
const Database = require('./db')

const db = new Database()
const mail = new Mail()
const auto = new Automation()
const url = ''

// Run the script
async function main() {
    await db.connect()
    async function bot() {
        const price = await auto.getPrice(url);
        const msg = await db.addPrice(url, price)
        if (msg.length > 0) {
            await mail.sendPriceToMail(process.env.EMAIL, msg)
        } else {
            console.log('no change found!')
        }
    }
    await bot()
    setInterval(async () => {
        await bot()
    }, process.env.INTERVAL || 60000)
}
main()


