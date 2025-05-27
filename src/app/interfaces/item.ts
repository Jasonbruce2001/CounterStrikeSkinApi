import {crate} from './crate';

export interface item {
  image: string;
  name: string;
  description: string;
  crates: crate[];
}
