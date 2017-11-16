/*
 * Copyright (C) 2017 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { converter } from "./Converter";
import { VigenereCipher } from "./VigenereCipher";

/**
 * Vigènere decoder.
 */
@converter("vigenere-decoder", "vigenere", "Vigènere Decoder",
    "Decodifica o texto criptografado com o quadrado Vigènere.")
export class VigenereDecoder extends VigenereCipher {
    /** @inheritDoc */
    protected convertChar(char: number, key: number): number {
        return (char - key + 26) % 26;
    }
}
