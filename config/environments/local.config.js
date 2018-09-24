module.exports = {
    services: {
        // ccd_data_api: 'https://ccd-data-store-api-aat.service.core-compute-aat.internal',
        // idam_web: 'https://idam-web-public.aat.platform.hmcts.net',
        // idam_api: 'https://idam-api.aat.platform.hmcts.net',
        idam_api: 'https://preprod-idamapi.reform.hmcts.net:3511',
        idam_web: 'http://idam.preprod.ccidam.reform.hmcts.net',
        s2s: 'http://localhost:4502',
        dm_store_api: 'http://dm-store-aat.service.core-compute-aat.internal',
        em_anno_api: 'http://localhost:8080',
    },
    useProxy: false,
    protocol: 'http'
};
