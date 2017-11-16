/*
 * Copyright (C) 2017 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { converter } from "./Converter";
import { KeywordCipher } from "./KeywordCipher";

/**
 * Keyword encoder.
 */
@converter("keyword-encoder", "keyword", "Keyword Encoder",
    "Codifica o texto criptografando-o com substituição do alfabeto com base em palavra-chave.")
export class KeywordEncoder extends KeywordCipher {
    /** @inheritDoc */
    protected convertChar(char: string): string {
        return this.getAlphabet()[char.charCodeAt(0) - 65];
    }
}
