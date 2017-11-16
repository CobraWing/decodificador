/*
 * Copyright (C) 2017 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { converter } from "./Converter";
import { CaesarCipher } from "./CaesarCipher";

/**
 * Converter for caesar encoding.
 */
@converter("caesar-encoder", "caesar", "Caesar Encoder", "Codifica o texto com rotação simples do alfabeto.")
export class CaesarEncoder extends CaesarCipher {
    protected readonly direction = 1;
}
