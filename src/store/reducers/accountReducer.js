import { Keypair } from '@solana/web3.js';
import { accountTypes } from '../action_types';

const programSecretKeyString =
  '[108,160,10,182,6,43,229,124,244,32,175,3,67,204,210,212,141,121,159,187,104,26,109,75,74,202,71,242,47,65,185,8,51,59,185,31,4,84,206,64,87,199,168,43,7,99,162,118,167,246,148,59,248,51,199,235,198,244,99,95,95,228,205,33]';
const programSecretKey = Uint8Array.from(JSON.parse(programSecretKeyString));
const programKeypair = Keypair.fromSecretKey(programSecretKey);

const initialState = {
  loading: false,
  isError: false,
  errMsg: null,
  wallet: null,
  accountId: '',
  programId: programKeypair.publicKey,
};

export function account(state = initialState, action) {
  switch (action.type) {
    case accountTypes.CREATE_REQUEST:
      return {
        ...state,
        isError: false,
        errMsg: null,
        loading: true,
      };
    case accountTypes.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        wallet: action.payload.wallet,
        accountId: action.payload.derivedAddress,
      };
    case accountTypes.CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        isError: true,
        errMsg: action.payload.error,
      };
    default:
      return state;
  }
}
