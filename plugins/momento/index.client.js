import moment from "moment";
moment.locale("es-mx")

export default defineNuxtPlugin((nuxtApp) => {

    console.log("momento/ index-js");
    if (process.client) {
        const timePost2 = (dat) => {

            return moment(dat).format('MMMM Do YYYY, h:mm:ss a')

        }

        console.log("timePost2", timePost2(20111031));
        return {
            provide: {
                momento: () => moment(nuxtApp).format('MMMM Do YYYY, h:mm:ss a')
            }
        }
    }

})