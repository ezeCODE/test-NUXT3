export default defineEventHandler((event) => {

    // const isAuth = useRuntimeConfig()
    // estos es una peticion get, enviar informacion publico con con auth,
    // para obtener datos del header auths et, antes de enviar infowmacionc...
    //retornamos  data: event.req.headers
    // return {
    //     data: event.req.headers
    // }
    return {
        "reason": "Yoga classes",
        "auto_recurring": {
            "frequency": 1,
            "frequency_type": "months",
            "repetitions": 12,
            "billing_day": 20,
            "billing_day_proportional": true,
            "free_trial": {
                "frequency": 1,
                "frequency_type": "months"
            },
            "transaction_amount": 1000,
            "currency_id": "ARS"
        },
        "payment_methods_allowed": {
            "payment_types": [
                {}
            ],
            "payment_methods": [
                {}
            ]
        },
        "back_url": "https://www.mercadolibre.com.ar/",
        "status": "active",
        "external_reference": "235466234"
    }

})