import { expect } from 'chai'

import 'mocha'
import { hex2ua, jwk2pkcs8, jwk2spki, pkcs8ToJwk, spkiToJwk, truncateTrailingNulls, ua2hex } from '../../../index'
import { crypto } from '../../../node-compat'
import { RSAUtils } from '../../../icc-x-api/crypto/RSA'
import { b64Url2ua } from '../../../icc-x-api'
import { parseAsn1 } from '../../../icc-x-api/utils/asn1-parser'

describe('ArrayBuffer methods', () => {
  let rsa: RSAUtils

  before(() => {
    rsa = new RSAUtils(crypto)
  })

  describe('truncateTrailingNulls', () => {
    it('should truncate trailing nulls out of an Uint8Array without copying', () => {
      const bytes = [72, 101, 108, 108, 111, 33]
      const originalArray = Uint8Array.from([...bytes, 0, 0])
      const truncatedArray = truncateTrailingNulls(originalArray)
      expect(truncatedArray.buffer).to.equal(originalArray.buffer)
      expect(Array.from(truncatedArray)).to.eql(bytes)
    })

    it('should preserve the offset into the buffer', () => {
      const bytes = [72, 101, 108, 108, 111, 33]
      const originalBuffer = new Uint8Array([0, 0, ...bytes, 0, 0]).buffer
      const originalArray = new Uint8Array(originalBuffer, 2, bytes.length)
      const truncatedArray = truncateTrailingNulls(originalArray)
      expect(truncatedArray.buffer).to.equal(originalArray.buffer)
      expect(truncatedArray.byteOffset).to.equal(originalArray.byteOffset)
      expect(Array.from(truncatedArray)).to.eql(bytes)
    })
  })

  describe('convertKeysFormat', () => {
    it('should manage jwk conversions for private keys gracefully', async () => {
      const privKey =
        '308204bd020100300d06092a864886f70d0101010500048204a7308204a302010002820101009ad2f63357da7bb9b67b235b50f66c4968b391ba3340c4c4a697d0495512bff35f3692ffdcc867fa0602819d9fe9353f049b6c69e2dbf4a987e4d1b88b9475307c41427b33af8c0a6779a8347122f032cb801b54e2ce54e2edef2b1ae1f440a797945a4d0ab541711866ea32d096fe2da943bdd8251345fd8f50b0481e88f52e326a2cc9446d125c9643650182dbebf0272da6004a954acc21f8f47236fa7d3bbb256fb932aceb9b0fe081af27a3b476d0885905526b0e5faaa7d712536b77b05ff29a36b617a17ef611b8876346cc9ff864a295cc9ec2d5fe0efb0d94d99e5db96ea36a96d95ec63de639d243c74c773a4c350236265f71260de0fcd5fbb94b02030100010282010100878dd589b68dd06e155b52e58cc9749e0151d77193964db16fbad3dea0e1bdb633d2f0799cb0ca7899f26fd1b644d51dcbc6d8f10c73508f6e2fe57f129674d472b620a305e9d94ef2b20d977cc6fe4f3ae57b08a35bcbeeb42c072d8e4ff09bcb975448c7eb52d4d66ca4f8c0b0b2f2ff94140fbec6552d5fe161b683259ea3e95278ac83826f0674a4b0b5b6c717087abce79c73c9f6bf7832ef7337d8b07912244c30e3dc59512b8d2ab0fec288d8e561e29985e7eaaaa1e010a52ed025f5fa201c893214a42d9b17eff87752902063a1accc4eb169cd408aec4ee95e588e0bf5fccb6e945e67b965c6fb5d936c1b8cbf5e6dd6f7a9b8b4dd25f68ffcb68102818100ddc101d385681b81f527edb6dce5cb7ca9e2e7cb28fa1187933628bfbc38e9c153cd3783453a7e0ffbd2ad28ef67e879e08744d7148e83b3cb3fb7282ac03feed5d44cb7e70d014b1aef213d0c057d3d6c75653739ee22ba794c0a5f6194db84c6df3e0dddbdf57b1cc114881015f49c26eda572470dc708d2a1abc4c541671b02818100b2bbe5ab2f5d41323c8c9a6b65daf0771f416abc6c8c6b08a2bcd632e6ebba0d9efb6d99b435a3ae5b1b2b3ef450648e361bc6c480902d25b459ad120c05286ab7f91e24ecc8516ba9db086e8dabf5bb4ba97ef1c4c20a751841e472a41132145623eca0ca4fbb3025b4fb7430e0e5258afedb5017c2a0dd66cb8bcf0d172991028180345bc8049b71335d81f70587b1ac88594cfb88634daf8dc807183892dcec4b351c864ddf2ecf5ac8875afd0bb74b3f76d76ed8f037a856ac7306fe45fba21cf65582a5029f09510edcb32d93ee6cb55f75665a99a991f29d38da9d705be7fbd4e3e7fe0ce4186007cb884342c5198a01fca70bf3699775313e1a722629b5019502818006e5ab5234ccb3745dd3cb2db3cb841604b5c089aee2a84ab804f37b19602558db36b69f04ce4117bc5a4b0beddfa051c092c7d3d3663ce7c492e553d9f4e4ff614412beb8086ee3e9b51319390c56ba388c3ce2d585eb6363613f9090f63ce97dfd7ae725877820be83c264547289452e9cf117a123189412a06e2fba40979102818070faf47286b59425cb7c2f617f2b7b1b280b932f131a86b82e63c4fb240525ab40323ab902c507a4aee337f9f95b89aa9151d1ae2882bff497396e680407f5407ca154f20047017022eda8fe0438a473fb38123d36bc51bffc69e3c13fab4ecf16057529265e2c0993ca8886cc019c65e9460fe549b553fa48bb0f3ca0975e78'
      const parsed = parseAsn1(new Uint8Array(hex2ua(privKey)))

      const jwk1 = pkcs8ToJwk(hex2ua(privKey))
      const pkcs8 = jwk2pkcs8(jwk1)
      const jwk2 = pkcs8ToJwk(hex2ua(pkcs8))

      expect(jwk1.n).to.equal(jwk2.n)

      const pubKey =
        '30820122300d06092a864886f70d01010105000382010f003082010a0282010100d862a7597d21da6f8972c02fc4e71d456d3b4fdfff7beffd1759d81fdeabf63c00af6cc15a634bc3a537d7c666d648c93951a496eaeb07c58f8bbe840c4b0375201f3f6cd9ac631150d412111c9d85bf1012dc88188464c07335481af8285aa595078433563b40503ecb2db8ff50836db9fd0a14f4473eee5538766471ae4151a6ee94eeaaa2ee16d4655dff71f7b25958359894e18d535450aa0e8aa8ca72e3f6046c1bc75792748560148bedc5af3f8525465384ad2020dcf28eba45e2aab8fcfde0a79c1fcc1fbd4778cdebd3eb0af62d6e8ef845dc0251d1e0a7e6d2e358f8b4d39db5ffa4021e8a351a8d768308ddacacc2a22814301da64931c477ef410203010001'
      const jwk3 = spkiToJwk(hex2ua(pubKey))
      const spki = jwk2spki(jwk3)
      const jwk4 = spkiToJwk(hex2ua(spki))

      expect(jwk3.n).to.equal(jwk4.n)
    })

    it('should convert spki to jwk in a coherent way', async () => {
      const pubKey =
        '30820122300d06092a864886f70d01010105000382010f003082010a0282010100d862a7597d21da6f8972c02fc4e71d456d3b4fdfff7beffd1759d81fdeabf63c00af6cc15a634bc3a537d7c666d648c93951a496eaeb07c58f8bbe840c4b0375201f3f6cd9ac631150d412111c9d85bf1012dc88188464c07335481af8285aa595078433563b40503ecb2db8ff50836db9fd0a14f4473eee5538766471ae4151a6ee94eeaaa2ee16d4655dff71f7b25958359894e18d535450aa0e8aa8ca72e3f6046c1bc75792748560148bedc5af3f8525465384ad2020dcf28eba45e2aab8fcfde0a79c1fcc1fbd4778cdebd3eb0af62d6e8ef845dc0251d1e0a7e6d2e358f8b4d39db5ffa4021e8a351a8d768308ddacacc2a22814301da64931c477ef410203010001'
      const jwk1 = spkiToJwk(hex2ua(pubKey))
      const rsaKey1 = await rsa.importKey('jwk', jwk1, ['encrypt'])
      const rsaKey2 = await rsa.importKey('spki', hex2ua(pubKey), ['encrypt'])
      const jwk2 = await rsa.exportKey(rsaKey2, 'jwk')
      const rsaKey3 = await rsa.importKey('jwk', jwk2, ['encrypt'])

      const n1 = ua2hex(b64Url2ua(jwk1.n))
      const n2 = ua2hex(b64Url2ua(jwk2.n!))

      expect(jwk1.n).to.equal(jwk2.n)
    })
  })
})
