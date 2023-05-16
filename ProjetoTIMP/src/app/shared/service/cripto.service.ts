import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  private iv: string = '@qwertyuiop12344';
  private key: string = '妻愛してる';
  constructor() { }

  aesKey(): string {
    this.key = this.randomKey(16);
    return this.key;
  }

  encrypt(valueToEncrypt: string): string {
    var key = CryptoJS.enc.Utf8.parse(this.key);
    var iv = CryptoJS.enc.Utf8.parse(this.iv);

    var encryptedValue = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(valueToEncrypt),
      key,

      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Iso10126,
      }
    );

    return encryptedValue.toString();
  }

  randomKey(length: number) {
    var result = '';
    var characters = '@abcdefghijklmnopqrstuvwxyz123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  descript(val: string) {
    let aux = CryptoJS.AES.decrypt(
      val,
      CryptoJS.enc.Utf8.parse(this.key),
      {
        keySize: 128 / 8,
        iv: CryptoJS.enc.Utf8.parse(this.iv),
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Iso10126,
      }
    );
    return aux.toString(CryptoJS.enc.Utf8);
  }
}
