export default {
    port: 3365,
    dbUri: "mongodb://127.0.0.1:27017/web-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeRpRVi/dXLPtkcYMeDYSv6PVM
    rvg/ly3ZfVuMbYJQvB+ly37O7eOhUUel/womTF/4XatUpTyOZoOQ9AtYYVgx/FdC
    doou9Px1KwPl8pR5TAwuitEcaVEchk09+beH8sO1DwIGjPSCHMy5Coy4Z7px6pln
    zHwB3qE/M2AypG/zVQIDAQAB
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICWwIBAAKBgQCeRpRVi/dXLPtkcYMeDYSv6PVMrvg/ly3ZfVuMbYJQvB+ly37O
    7eOhUUel/womTF/4XatUpTyOZoOQ9AtYYVgx/FdCdoou9Px1KwPl8pR5TAwuitEc
    aVEchk09+beH8sO1DwIGjPSCHMy5Coy4Z7px6plnzHwB3qE/M2AypG/zVQIDAQAB
    AoGAdmN6vsZ0G1wFKquRlOAtuNr66QITpJUzcXRIDzE2gadF0OD3GFduphLDEhJE
    CEOmoYOHDUiPlEBv9vPkrJYbvhLBVzuuAJTSVz5EdqoyzI2vQJv+iJXhtn4jpQDy
    enUvY6INXomq8d2sQHq0Q9MYgJBGLzlisn06C0QCgAxTamECQQDM07ExqCmKrY4r
    gw+aPuaBJ3so2jYg0N53igaKZI/TmH/cZv57uN3PhoZy0C1BCFGTVCDbHuAInaUz
    YgEfwVHNAkEAxdGRK3Rbk/9zXndaobWvXb586yRN0pdlWxsfOK5gnZRT1D/703+L
    QLF057TH0PCDXHZ9MEgqXUSBoKAak+2/qQJAZEYutTSyQaX9t+eNt+GbTxdZAAL0
    BNS8VKFJ2m6oytoZnnj9lOxICtS89XBc9z1vUkUZYKyY2R70RVdxXW5y8QJAWRUz
    47bFmtNZ1/u1w8b2zyd+R8IUjbaB/VIscDEO70ehrJ6XwDnasup3M/UUWsJE1bnC
    TKDi+xdjrLsM3Pse6QJAcMllkw3UbuvjJrOkBU6LI1saAUGoIQQLskUrnBCoEo28
    c2p1TVweyFj8d+jMTRkCW0mMaSAHediTpGd+hkRSKg==
    -----END RSA PRIVATE KEY-----`
}