import moment from "moment";
moment.locale("es-mx")


export default defineNuxtPlugin((nuxtApp) => {
    // now available on `nuxtApp.$injected`
    const timePost = (dat) => {

        return moment(dat).format('MMMM Do YYYY, h:mm:ss a')

    }

    console.log(timePost(20111031));
    return {
        provide: {
            times: () => moment(nuxtApp).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
})



console.log("pluginssss");