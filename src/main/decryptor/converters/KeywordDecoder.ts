/*
 * Copyright (C) 2017 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { converter } from "./Converter";
import { KeywordCipher } from "./KeywordCipher";

/**
 * Keyword decoder.
 */
@converter("keyword-decoder", "keyword", "Keyword Decoder",
    "Decodifica texto criptografado com substituição de alfabeto com base em palavra-chave.")
export class KeywordDecoder extends KeywordCipher {
    /** @inheritDoc */
    protected convertChar(char: string): string {
        return String.fromCharCode(65 + this.getAlphabet().indexOf(char));
    }
}
