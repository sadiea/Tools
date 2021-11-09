/**
 * run this test with command:
 * nodeunit test/RtcTokenBuilder2Test.js
 * see https://github.com/caolan/nodeunit
 */
const RtcTokenBuilder = require('../src/RtcTokenBuilder2').RtcTokenBuilder
const Role = require('../src/RtcTokenBuilder2').Role
const {AccessToken2, ServiceRtc, kRtcServiceType} = require('../src/AccessToken2')

const appId = "970CA35de60c44645bbae8a215061b33"
const appCertificate = "5CFd2fd1755d40ecb72977518be15d3b"
const channelName = "7d72365eb983485397e3e3f9d460bdda"
const uid = 2882341273
const uidStr = "2882341273"
const expire = 600

exports.buildTokenWithUid_SUBSCRIBER_Test = function (test) {
    let token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, Role.SUBSCRIBER, expire)
    let accessToken = new AccessToken2('', '', 0, 0)
    accessToken.from_string(token)

    test.equal(appId, accessToken.appId)
    test.equal(expire, accessToken.expire)
    test.equal(channelName, accessToken.services[kRtcServiceType].__channel_name)
    test.equal(uidStr, accessToken.services[kRtcServiceType].__uid)
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegeJoinChannel])
    test.done()
}

exports.buildTokenWithUid_PUBLISHER_Test = function (test) {
    let token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, Role.PUBLISHER, expire)
    let accessToken = new AccessToken2('', '', 0, 0)
    accessToken.from_string(token)

    test.equal(appId, accessToken.appId)
    test.equal(expire, accessToken.expire)
    test.equal(channelName, accessToken.services[kRtcServiceType].__channel_name)
    test.equal(uidStr, accessToken.services[kRtcServiceType].__uid)
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegeJoinChannel])
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegePublishAudioStream])
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegePublishVideoStream])
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegePublishDataStream])
    test.done()
}

exports.buildTokenWithAccount_SUBSCRIBER_Test = function (test) {
    let token = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, uidStr, Role.SUBSCRIBER, expire)
    let accessToken = new AccessToken2('', '', 0, 0)
    accessToken.from_string(token)

    test.equal(appId, accessToken.appId)
    test.equal(expire, accessToken.expire)
    test.equal(channelName, accessToken.services[kRtcServiceType].__channel_name)
    test.equal(uidStr, accessToken.services[kRtcServiceType].__uid)
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegeJoinChannel])
    test.done()
}

exports.buildTokenWithAccount_PUBLISHER_Test = function (test) {
    let token = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, uid, Role.PUBLISHER, expire)
    let accessToken = new AccessToken2('', '', 0, 0)
    accessToken.from_string(token)

    test.equal(appId, accessToken.appId)
    test.equal(expire, accessToken.expire)
    test.equal(channelName, accessToken.services[kRtcServiceType].__channel_name)
    test.equal(uidStr, accessToken.services[kRtcServiceType].__uid)
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegeJoinChannel])
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegePublishAudioStream])
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegePublishVideoStream])
    test.equal(expire, accessToken.services[kRtcServiceType].__privileges[ServiceRtc.kPrivilegePublishDataStream])
    test.done()
}