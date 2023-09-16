'use strict';

module.exports = {
    meta: {
        cmd: 'save_order',
        prev_cmd: 'select_payment',
        templates: {
            "savedOrder": {
                "text": `🛍 سفارش تون با موفقیت ثبت شد.
بعد از تایید، کانفیگ براتون توسط ربات ارسال میشه 🙏`,
            },
            "reviewInvoice": {
                "text": "〽️ نام پلن: ${this.sPlan?.name}\n➖➖➖➖➖➖➖\n💎 قیمت پنل : ${this.sPlan?.totalPrice} \n➖➖➖➖➖➖➖\n\n♻️ عزیزم یه تصویر از فیش واریزی یا شماره پیگیری -  ساعت پرداخت - نام پرداخت کننده رو در یک پیام برام ارسال کن :\n\n🔰  ${this.sPayment?.appKey} - ${this.sPayment?.appSecret} \n\n✅ بعد از اینکه پرداختت تایید شد ( لینک سرور ) به صورت خودکار از طریق همین ربات برات ارسال میشه!"
            },
            "adminNewOrder": {
                "text": "💳 خرید جدید ( کارت به کارت )\n\n▫️آیدی کاربر: ${this.tUser.id}\n⚡️ نام کاربری: ${this.tUser.username}\n💰مبلغ پرداختی: ${this.sPlan.totalPrice} تومان\n✏️ نام سرویس: ${this.sPlan.name}\n\n    \nاطلاعات واریز: ${this.message.text}"
            }
        },
    },

    reviewInvoice(sPlan, sPayment) {
        let msg = `〽️ نام پلن: ${sPlan?.name}\n➖➖➖➖➖➖➖\n💎 قیمت پنل : ${sPlan?.totalPrice} \n➖➖➖➖➖➖➖\n\n♻️ عزیزم یه تصویر از فیش واریزی یا شماره پیگیری -  ساعت پرداخت - نام پرداخت کننده رو در یک پیام برام ارسال کن :\n\n🔰  ${sPayment?.appKey} - ${sPayment?.appSecret} \n\n✅ بعد از اینکه پرداختت تایید شد ( لینک سرور ) به صورت خودکار از طریق همین ربات برات ارسال میشه!`

        return msg;
    }
}




