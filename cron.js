import cron from 'node-cron'




cron.schedule('* * * * *', ()=>console.log('funxia', new Date().toDateString))








