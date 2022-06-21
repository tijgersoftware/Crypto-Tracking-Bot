//import fetch from 'node-fetch';
import * as nf from 'node-fetch';
 delete nf['fetch'];
//  node-fetch['fetch'];

nf.fetch = function(str){
    console.log("The functionality node-fetch has been overridden.");
    console.log(str);
    // //let response = {status:200,statusText:"OK"};
    // var blob = new Blob();
    // var init = `{
    //     [Symbol(realm)]: null,
    //     [Symbol(state)]: {
    //       aborted: false,
    //       rangeRequested: false,
    //       timingAllowPassed: true,
    //       requestIncludesCredentials: true,
    //       type: 'default',
    //       status: 200,
    //       timingInfo: {
    //         startTime: 1335.8301859945059,
    //         redirectStartTime: 0,
    //         redirectEndTime: 0,
    //         postRedirectStartTime: 1335.8301859945059,
    //         finalServiceWorkerStartTime: 0,
    //         finalNetworkResponseStartTime: 0,
    //         finalNetworkRequestStartTime: 0,
    //         endTime: 0,
    //         encodedBodySize: 68,
    //         decodedBodySize: 0,
    //         finalConnectionTimingInfo: null
    //       },
    //       cacheState: '',
    //       statusText: 'OK',
    //       headersList: HeadersList {
    //         [Symbol(headers map)]: [Map],
    //         [Symbol(headers map sorted)]: null
    //       },
    //       urlList: [ [URL] ],
    //       body: { stream: undefined }
    //     },
    //     [Symbol(headers)]: HeadersList {
    //       [Symbol(headers map)]: Map(24) {
    //         'date' => 'Sun, 19 Jun 2022 21:30:21 GMT',
    //         'content-type' => 'application/json; charset=utf-8',
    //         'transfer-encoding' => 'chunked',
    //         'connection' => 'keep-alive',
    //         'content-security-policy' => 'default-src "none"',
    //         'x-content-security-policy' => 'default-src "none"',
    //         'x-webkit-csp' => 'default-src "none"',
    //         'strict-transport-security' => 'max-age=15724800; includeSubDomains',
    //         'x-xss-protection' => '1; mode=block',
    //         'x-content-type-options' => 'nosniff',
    //         'x-frame-options' => 'DENY',
    //         'expect-ct' => 'max-age=0, report-uri="https://uphold.report-uri.com/r/d/ct/reportOnly"',
    //         'expect-staple' => 'max-age=0; report-uri="https://uphold.report-uri.com/r/d/staple/reportOnly"',
    //         'request-id' => '71df5d8d2b8f2dd6-BRU',
    //         'vary' => 'Origin',
    //         'rate-limit-remaining' => '499',
    //         'rate-limit-reset' => '1655674521',
    //         'rate-limit-total' => '500',
    //         'cf-cache-status' => 'DYNAMIC',
    //         'set-cookie' => '__cf_bm=reYP1WPZ4Z_.gvPMj9Od96i3h3oxezYI6JHVxy8zsB0-1655674221-0-Afz62gukUlOW26D4MndAcxCypEai+b+SImjDVEGFjYIABBxbzrwmbpj8QwiVoc5ojAFj4kjCmT1MExHncNshy1E=; path=/; expires=Sun, 19-Jun-22 22:00:21 GMT; domain=.uphold.com; HttpOnly; Secure; SameSite=None',
    //         'server' => 'cloudflare',
    //         'cf-ray' => '71df5d8d2b8f2dd6-BRU',
    //         'content-encoding' => 'br',
    //         'alt-svc' => 'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
    //       },
    //       [Symbol(headers map sorted)]: null
    //     }
    //   }`
    // var respone = new Response(blob, init);
    // return response
    
}

export default nf;