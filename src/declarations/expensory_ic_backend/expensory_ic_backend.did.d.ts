import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'registerUser' : ActorMethod<[string, string], boolean>,
  'verifyuser' : ActorMethod<[string, string], string>,
}
