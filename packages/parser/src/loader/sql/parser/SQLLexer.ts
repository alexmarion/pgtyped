// Generated from src/loader/sql/grammar/SQLLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SQLLexer extends Lexer {
	public static readonly ID = 1;
	public static readonly LINE_COMMENT = 2;
	public static readonly OPEN_COMMENT = 3;
	public static readonly S_REQUIRED_MARK = 4;
	public static readonly PARAM_MARK_OPEN = 5;
	public static readonly PARAM_MARK_CLOSE = 6;
	public static readonly WORD = 7;
	public static readonly EOF_STATEMENT = 8;
	public static readonly WSL = 9;
	public static readonly STRING = 10;
	public static readonly DOLLAR_STRING = 11;
	public static readonly PARAM_MARK = 12;
	public static readonly WS = 13;
	public static readonly TRANSFORM_ARROW = 14;
	public static readonly SPREAD = 15;
	public static readonly NAME_TAG = 16;
	public static readonly TYPE_TAG = 17;
	public static readonly OB = 18;
	public static readonly CB = 19;
	public static readonly COMMA = 20;
	public static readonly C_REQUIRED_MARK = 21;
	public static readonly ANY = 22;
	public static readonly CLOSE_COMMENT = 23;
	public static readonly DOLLAR = 24;
	public static readonly CAST = 25;
	public static readonly COMMENT = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "COMMENT",
	];

	public static readonly ruleNames: string[] = [
		"QUOT", "ID", "LINE_COMMENT", "OPEN_COMMENT", "SID", "S_REQUIRED_MARK", 
		"PARAM_MARK_OPEN", "PARAM_MARK_CLOSE", "WORD", "SPECIAL", "DOLLAR", "EOF_STATEMENT", 
		"WSL", "STRING", "DOLLAR_STRING", "PARAM_MARK", "CAST", "CID", "WS", "TRANSFORM_ARROW", 
		"SPREAD", "NAME_TAG", "TYPE_TAG", "OB", "CB", "COMMA", "C_REQUIRED_MARK", 
		"ANY", "CLOSE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'/*'", undefined, "'${'", "'}'", undefined, 
		"';'", undefined, undefined, undefined, "':'", undefined, "'->'", "'...'", 
		"'@name'", "'@param'", "'('", "')'", "','", undefined, undefined, "'*/'", 
		"'$'", "'::'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "LINE_COMMENT", "OPEN_COMMENT", "S_REQUIRED_MARK", "PARAM_MARK_OPEN", 
		"PARAM_MARK_CLOSE", "WORD", "EOF_STATEMENT", "WSL", "STRING", "DOLLAR_STRING", 
		"PARAM_MARK", "WS", "TRANSFORM_ARROW", "SPREAD", "NAME_TAG", "TYPE_TAG", 
		"OB", "CB", "COMMA", "C_REQUIRED_MARK", "ANY", "CLOSE_COMMENT", "DOLLAR", 
		"CAST",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SQLLexer._LITERAL_NAMES, SQLLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SQLLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SQLLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SQLLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return SQLLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SQLLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SQLLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SQLLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1B\xD3\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04" +
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04" +
		"\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x07\x03C\n\x03\f\x03\x0E\x03F\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04L\n\x04\f\x04\x0E\x04O\v\x04\x03\x04\x05\x04R\n\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x06\ng\n\n\r\n\x0E" +
		"\nh\x03\v\x06\vl\n\v\r\v\x0E\vm\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x06\x0Ey\n\x0E\r\x0E\x0E\x0Ez\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\x82\n\x0F\f\x0F\x0E\x0F\x85\v\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\x89\n\x0F\x03\x10\x03\x10\x05\x10\x8D\n\x10\x03\x10\x03\x10" +
		"\x07\x10\x91\n\x10\f\x10\x0E\x10\x94\v\x10\x03\x10\x03\x10\x05\x10\x98" +
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x06\x14\xA8\n\x14\r\x14" +
		"\x0E\x14\xA9\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x06\x1D\xCB\n\x1D\r\x1D\x0E" +
		"\x1D\xCC\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x04\x83\xCC\x02\x02\x1F" +
		"\x04\x02\x02\x06\x02\x03\b\x02\x04\n\x02\x05\f\x02\x02\x0E\x02\x06\x10" +
		"\x02\x07\x12\x02\b\x14\x02\t\x16\x02\x02\x18\x02\x1A\x1A\x02\n\x1C\x02" +
		"\v\x1E\x02\f \x02\r\"\x02\x0E$\x02\x1B&\x02\x02(\x02\x0F*\x02\x10,\x02" +
		"\x11.\x02\x120\x02\x132\x02\x144\x02\x156\x02\x168\x02\x17:\x02\x18<\x02" +
		"\x19\x04\x02\x03\b\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02\f\f\x0F\x0F" +
		"\n\x02$%\'(*1>B]]_`bb}\x80\x05\x02\v\f\x0F\x0F\"\"\x03\x02^^\x02\xDC\x02" +
		"\b\x03\x02\x02\x02\x02\n\x03\x02\x02\x02\x02\f\x03\x02\x02\x02\x02\x0E" +
		"\x03\x02\x02\x02\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14" +
		"\x03\x02\x02\x02\x02\x16\x03\x02\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A" +
		"\x03\x02\x02\x02\x02\x1C\x03\x02\x02\x02\x02\x1E\x03\x02\x02\x02\x02 " +
		"\x03\x02\x02\x02\x02\"\x03\x02\x02\x02\x02$\x03\x02\x02\x02\x03&\x03\x02" +
		"\x02\x02\x03(\x03\x02\x02\x02\x03*\x03\x02\x02\x02\x03,\x03\x02\x02\x02" +
		"\x03.\x03\x02\x02\x02\x030\x03\x02\x02\x02\x032\x03\x02\x02\x02\x034\x03" +
		"\x02\x02\x02\x036\x03\x02\x02\x02\x038\x03\x02\x02\x02\x03:\x03\x02\x02" +
		"\x02\x03<\x03\x02\x02\x02\x04>\x03\x02\x02\x02\x06@\x03\x02\x02\x02\b" +
		"G\x03\x02\x02\x02\nU\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E^\x03\x02\x02" +
		"\x02\x10`\x03\x02\x02\x02\x12c\x03\x02\x02\x02\x14f\x03\x02\x02\x02\x16" +
		"k\x03\x02\x02\x02\x18q\x03\x02\x02\x02\x1Au\x03\x02\x02\x02\x1Cx\x03\x02" +
		"\x02\x02\x1E~\x03\x02\x02\x02 \x8A\x03\x02\x02\x02\"\x9B\x03\x02\x02\x02" +
		"$\x9D\x03\x02\x02\x02&\xA2\x03\x02\x02\x02(\xA7\x03\x02\x02\x02*\xAD\x03" +
		"\x02\x02\x02,\xB0\x03\x02\x02\x02.\xB4\x03\x02\x02\x020\xBA\x03\x02\x02" +
		"\x022\xC1\x03\x02\x02\x024\xC3\x03\x02\x02\x026\xC5\x03\x02\x02\x028\xC7" +
		"\x03\x02\x02\x02:\xCA\x03\x02\x02\x02<\xCE\x03\x02\x02\x02>?\x07)\x02" +
		"\x02?\x05\x03\x02\x02\x02@D\t\x02\x02\x02AC\t\x03\x02\x02BA\x03\x02\x02" +
		"\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02E\x07\x03\x02" +
		"\x02\x02FD\x03\x02\x02\x02GH\x07/\x02\x02HI\x07/\x02\x02IM\x03\x02\x02" +
		"\x02JL\n\x04\x02\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02PR\x07\x0F\x02" +
		"\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\f\x02" +
		"\x02T\t\x03\x02\x02\x02UV\x071\x02\x02VW\x07,\x02\x02WX\x03\x02\x02\x02" +
		"XY\b\x05\x02\x02Y\v\x03\x02\x02\x02Z[\x05\x06\x03\x02[\\\x03\x02\x02\x02" +
		"\\]\b\x06\x03\x02]\r\x03\x02\x02\x02^_\x07#\x02\x02_\x0F\x03\x02\x02\x02" +
		"`a\x07&\x02\x02ab\x07}\x02\x02b\x11\x03\x02\x02\x02cd\x07\x7F\x02\x02" +
		"d\x13\x03\x02\x02\x02eg\t\x03\x02\x02fe\x03\x02\x02\x02gh\x03\x02\x02" +
		"\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\x15\x03\x02\x02\x02jl\t\x05" +
		"\x02\x02kj\x03\x02\x02\x02lm\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02" +
		"\x02\x02no\x03\x02\x02\x02op\b\v\x04\x02p\x17\x03\x02\x02\x02qr\x07&\x02" +
		"\x02rs\x03\x02\x02\x02st\b\f\x04\x02t\x19\x03\x02\x02\x02uv\x07=\x02\x02" +
		"v\x1B\x03\x02\x02\x02wy\t\x06\x02\x02xw\x03\x02\x02\x02yz\x03\x02\x02" +
		"\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|}\b\x0E\x05" +
		"\x02}\x1D\x03\x02\x02\x02~\x88\x05\x04\x02\x02\x7F\x89\x05\x04\x02\x02" +
		"\x80\x82\v\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02" +
		"\x83\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02" +
		"\x85\x83\x03\x02\x02\x02\x86\x87\n\x07\x02\x02\x87\x89\x05\x04\x02\x02" +
		"\x88\x7F\x03\x02\x02\x02\x88\x83\x03\x02\x02\x02\x89\x1F\x03\x02\x02\x02" +
		"\x8A\x8C\x05\x18\f\x02\x8B\x8D\x05\x14\n\x02\x8C\x8B\x03\x02\x02\x02\x8C" +
		"\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x92\x05\x18\f\x02\x8F" +
		"\x91\v\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92" +
		"\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02\x94" +
		"\x92\x03\x02\x02\x02\x95\x97\x05\x18\f\x02\x96\x98\x05\x14\n\x02\x97\x96" +
		"\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A" +
		"\x05\x18\f\x02\x9A!\x03\x02\x02\x02\x9B\x9C\x07<\x02\x02\x9C#\x03\x02" +
		"\x02\x02\x9D\x9E\x07<\x02\x02\x9E\x9F\x07<\x02\x02\x9F\xA0\x03\x02\x02" +
		"\x02\xA0\xA1\b\x12\x04\x02\xA1%\x03\x02\x02\x02\xA2\xA3\x05\x06\x03\x02" +
		"\xA3\xA4\x03\x02\x02\x02\xA4\xA5\b\x13\x03\x02\xA5\'\x03\x02\x02\x02\xA6" +
		"\xA8\t\x06\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9" +
		"\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB" +
		"\xAC\b\x14\x05\x02\xAC)\x03\x02\x02\x02\xAD\xAE\x07/\x02\x02\xAE\xAF\x07" +
		"@\x02\x02\xAF+\x03\x02\x02\x02\xB0\xB1\x070\x02\x02\xB1\xB2\x070\x02\x02" +
		"\xB2\xB3\x070\x02\x02\xB3-\x03\x02\x02\x02\xB4\xB5\x07B\x02\x02\xB5\xB6" +
		"\x07p\x02\x02\xB6\xB7\x07c\x02\x02\xB7\xB8\x07o\x02\x02\xB8\xB9\x07g\x02" +
		"\x02\xB9/\x03\x02\x02\x02\xBA\xBB\x07B\x02\x02\xBB\xBC\x07r\x02\x02\xBC" +
		"\xBD\x07c\x02\x02\xBD\xBE\x07t\x02\x02\xBE\xBF\x07c\x02\x02\xBF\xC0\x07" +
		"o\x02\x02\xC01\x03\x02\x02\x02\xC1\xC2\x07*\x02\x02\xC23\x03\x02\x02\x02" +
		"\xC3\xC4\x07+\x02\x02\xC45\x03\x02\x02\x02\xC5\xC6\x07.\x02\x02\xC67\x03" +
		"\x02\x02\x02\xC7\xC8\x07#\x02\x02\xC89\x03\x02\x02\x02\xC9\xCB\v\x02\x02" +
		"\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03\x02\x02" +
		"\x02\xCC\xCA\x03\x02\x02\x02\xCD;\x03\x02\x02\x02\xCE\xCF\x07,\x02\x02" +
		"\xCF\xD0\x071\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\b\x1E\x06\x02\xD2" +
		"=\x03\x02\x02\x02\x11\x02\x03DMQhmz\x83\x88\x8C\x92\x97\xA9\xCC\x07\x04" +
		"\x03\x02\t\x03\x02\t\t\x02\b\x02\x02\x04\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLLexer.__ATN) {
			SQLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SQLLexer._serializedATN));
		}

		return SQLLexer.__ATN;
	}

}

