export type AnyRecord = Record<string, any>;

export type CardType =
  | "VISA"
  | "Mastercard"
  | "AmericanExpress"
  | "JCB"
  | "Mir"
  | "UnionPay"
  | "DinersClub"
  | "Unknown";

export type Currency =
  | "AFN"
  | "EUR"
  | "ALL"
  | "DZD"
  | "USD"
  | "EUR"
  | "AOA"
  | "XCD"
  | "XCD"
  | "ARS"
  | "AMD"
  | "AWG"
  | "AUD"
  | "EUR"
  | "AZN"
  | "BSD"
  | "BHD"
  | "BDT"
  | "BBD"
  | "BYN"
  | "EUR"
  | "BZD"
  | "XOF"
  | "BMD"
  | "INR"
  | "BTN"
  | "BOB"
  | "BOV"
  | "USD"
  | "BAM"
  | "BWP"
  | "NOK"
  | "BRL"
  | "USD"
  | "BND"
  | "BGN"
  | "XOF"
  | "BIF"
  | "CVE"
  | "KHR"
  | "XAF"
  | "CAD"
  | "KYD"
  | "XAF"
  | "XAF"
  | "CLP"
  | "CLF"
  | "CNY"
  | "AUD"
  | "AUD"
  | "COP"
  | "COU"
  | "KMF"
  | "CDF"
  | "XAF"
  | "NZD"
  | "CRC"
  | "XOF"
  | "HRK"
  | "CUP"
  | "CUC"
  | "ANG"
  | "EUR"
  | "CZK"
  | "DKK"
  | "DJF"
  | "XCD"
  | "DOP"
  | "USD"
  | "EGP"
  | "SVC"
  | "USD"
  | "XAF"
  | "ERN"
  | "EUR"
  | "SZL"
  | "ETB"
  | "EUR"
  | "FKP"
  | "DKK"
  | "FJD"
  | "EUR"
  | "EUR"
  | "EUR"
  | "XPF"
  | "EUR"
  | "XAF"
  | "GMD"
  | "GEL"
  | "EUR"
  | "GHS"
  | "GIP"
  | "EUR"
  | "DKK"
  | "XCD"
  | "EUR"
  | "USD"
  | "GTQ"
  | "GBP"
  | "GNF"
  | "XOF"
  | "GYD"
  | "HTG"
  | "USD"
  | "AUD"
  | "EUR"
  | "HNL"
  | "HKD"
  | "HUF"
  | "ISK"
  | "INR"
  | "IDR"
  | "XDR"
  | "IRR"
  | "IQD"
  | "EUR"
  | "GBP"
  | "ILS"
  | "EUR"
  | "JMD"
  | "JPY"
  | "GBP"
  | "JOD"
  | "KZT"
  | "KES"
  | "AUD"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KGS"
  | "LAK"
  | "EUR"
  | "LBP"
  | "LSL"
  | "ZAR"
  | "LRD"
  | "LYD"
  | "CHF"
  | "EUR"
  | "EUR"
  | "MOP"
  | "MKD"
  | "MGA"
  | "MWK"
  | "MYR"
  | "MVR"
  | "XOF"
  | "EUR"
  | "USD"
  | "EUR"
  | "MRU"
  | "MUR"
  | "EUR"
  | "XUA"
  | "MXN"
  | "MXV"
  | "USD"
  | "MDL"
  | "EUR"
  | "MNT"
  | "EUR"
  | "XCD"
  | "MAD"
  | "MZN"
  | "MMK"
  | "NAD"
  | "ZAR"
  | "AUD"
  | "NPR"
  | "EUR"
  | "XPF"
  | "NZD"
  | "NIO"
  | "XOF"
  | "NGN"
  | "NZD"
  | "AUD"
  | "USD"
  | "NOK"
  | "OMR"
  | "PKR"
  | "USD"
  | "PAB"
  | "USD"
  | "PGK"
  | "PYG"
  | "PEN"
  | "PHP"
  | "NZD"
  | "PLN"
  | "EUR"
  | "USD"
  | "QAR"
  | "EUR"
  | "RON"
  | "RUB"
  | "RWF"
  | "EUR"
  | "SHP"
  | "XCD"
  | "XCD"
  | "EUR"
  | "EUR"
  | "XCD"
  | "WST"
  | "EUR"
  | "STN"
  | "SAR"
  | "XOF"
  | "RSD"
  | "SCR"
  | "SLL"
  | "SGD"
  | "ANG"
  | "XSU"
  | "EUR"
  | "EUR"
  | "SBD"
  | "SOS"
  | "ZAR"
  | "SSP"
  | "EUR"
  | "LKR"
  | "SDG"
  | "SRD"
  | "NOK"
  | "SEK"
  | "CHF"
  | "CHE"
  | "CHW"
  | "SYP"
  | "TWD"
  | "TJS"
  | "TZS"
  | "THB"
  | "USD"
  | "XOF"
  | "NZD"
  | "TOP"
  | "TTD"
  | "TND"
  | "TRY"
  | "TMT"
  | "USD"
  | "AUD"
  | "UGX"
  | "UAH"
  | "AED"
  | "GBP"
  | "USD"
  | "USD"
  | "USN"
  | "UYU"
  | "UYI"
  | "UYW"
  | "UZS"
  | "VUV"
  | "VES"
  | "VND"
  | "USD"
  | "USD"
  | "XPF"
  | "MAD"
  | "YER"
  | "ZMW"
  | "ZWL"
  | "XBA"
  | "XBB"
  | "XBC"
  | "XBD"
  | "XTS"
  | "XXX"
  | "XAU"
  | "XPD"
  | "XPT"
  | "XAG";

export type CountryCode =
  | "AA"
  | "AB"
  | "AC"
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AH"
  | "AI"
  | "AJ"
  | "AK"
  | "AL"
  | "AM"
  | "AN"
  | "AO"
  | "AP"
  | "AQ"
  | "AR"
  | "AS"
  | "AT"
  | "AU"
  | "AV"
  | "AW"
  | "AX"
  | "AY"
  | "AZ."
  | "BA"
  | "BB"
  | "BC"
  | "BD"
  | "BE"
  | "BF"
  | "BG"
  | "BH"
  | "BI"
  | "BJ"
  | "BK"
  | "BL"
  | "BM"
  | "BN"
  | "BO"
  | "BP"
  | "BQ"
  | "BR"
  | "BS"
  | "BT"
  | "BU"
  | "BV"
  | "BW"
  | "BX"
  | "BY"
  | "BZ"
  | "CA"
  | "CB"
  | "CC"
  | "CD"
  | "CE"
  | "CF"
  | "CG"
  | "CH"
  | "CI"
  | "CJ"
  | "CK"
  | "CL"
  | "CM"
  | "CN"
  | "CO"
  | "CP"
  | "CQ"
  | "CR"
  | "CS"
  | "CT"
  | "CU"
  | "CV"
  | "CW"
  | "CX"
  | "CY"
  | "CZ"
  | "DA"
  | "DB"
  | "DC"
  | "DD"
  | "DE"
  | "DF"
  | "DG"
  | "DH"
  | "DI"
  | "DJ"
  | "DK"
  | "DL"
  | "DM"
  | "DN"
  | "DO"
  | "DP"
  | "DQ"
  | "DR"
  | "DS"
  | "DT"
  | "DU"
  | "DV"
  | "DW"
  | "DX"
  | "DY"
  | "DZ"
  | "EA"
  | "EB"
  | "EC"
  | "ED"
  | "EE"
  | "EF"
  | "EG"
  | "EH"
  | "EI"
  | "EJ"
  | "EK"
  | "EL"
  | "EM"
  | "EN"
  | "EO"
  | "EP"
  | "EQ"
  | "ER"
  | "ES"
  | "ET"
  | "EU"
  | "EV"
  | "EW"
  | "EX"
  | "EY"
  | "EZ"
  | "FA"
  | "FB"
  | "FC"
  | "FD"
  | "FE"
  | "FF"
  | "FG"
  | "FH"
  | "FI"
  | "FJ"
  | "FK"
  | "FL"
  | "FM"
  | "FN"
  | "FO"
  | "FP"
  | "FQ"
  | "FR"
  | "FS"
  | "FT"
  | "FU"
  | "FV"
  | "FW"
  | "FX"
  | "FY"
  | "FZ"
  | "GA"
  | "GB"
  | "GC"
  | "GD"
  | "GE"
  | "GF"
  | "GG"
  | "GH"
  | "GI"
  | "GJ"
  | "GK"
  | "GL"
  | "GM"
  | "GN"
  | "GO"
  | "GP"
  | "GQ"
  | "GR"
  | "GS"
  | "GT"
  | "GU"
  | "GV"
  | "GW"
  | "GX"
  | "GY"
  | "GZ"
  | "HA"
  | "HB"
  | "HC"
  | "HD"
  | "HE"
  | "HF"
  | "HG"
  | "HH"
  | "HI"
  | "HJ"
  | "HK"
  | "HL"
  | "HM"
  | "HN"
  | "HO"
  | "HP"
  | "HQ"
  | "HR"
  | "HS"
  | "HT"
  | "HU"
  | "HV"
  | "HW"
  | "HX"
  | "HY"
  | "HZ"
  | "IA"
  | "IB"
  | "IC"
  | "ID"
  | "IE"
  | "IF"
  | "IG"
  | "IH"
  | "II"
  | "IJ"
  | "IK"
  | "IL"
  | "IM"
  | "IN"
  | "IO"
  | "IP"
  | "IQ"
  | "IR"
  | "IS"
  | "IT"
  | "IU"
  | "IV"
  | "IW"
  | "IX"
  | "IY"
  | "IZ"
  | "JA"
  | "JB"
  | "JC"
  | "JD"
  | "JE"
  | "JF"
  | "JG"
  | "JH"
  | "JI"
  | "JJ"
  | "JK"
  | "JL"
  | "JM"
  | "JN"
  | "JO"
  | "JP"
  | "JQ"
  | "JR"
  | "JS"
  | "JT"
  | "JU"
  | "JV"
  | "JW"
  | "JX"
  | "JY"
  | "JZ"
  | "KA"
  | "KB"
  | "KC"
  | "KD"
  | "KE"
  | "KF"
  | "KG"
  | "KH"
  | "KI"
  | "KJ"
  | "KK"
  | "KL"
  | "KM"
  | "KN"
  | "KO"
  | "KP"
  | "KQ"
  | "KR"
  | "KS"
  | "KT"
  | "KU"
  | "KV"
  | "KW"
  | "KX"
  | "KY"
  | "KZ"
  | "LA"
  | "LB"
  | "LC"
  | "LD"
  | "LE"
  | "LF"
  | "LG"
  | "LH"
  | "LI"
  | "LJ"
  | "LK"
  | "LL"
  | "LM"
  | "LN"
  | "LO"
  | "LP"
  | "LQ"
  | "LR"
  | "LS"
  | "LT"
  | "LU"
  | "LV"
  | "LW"
  | "LX"
  | "LY"
  | "LZ"
  | "MA"
  | "MB"
  | "MC"
  | "MD"
  | "ME"
  | "MF"
  | "MG"
  | "MH"
  | "MI"
  | "MJ"
  | "MK"
  | "ML"
  | "MM"
  | "MN"
  | "MO"
  | "MP"
  | "MQ"
  | "MR"
  | "MS"
  | "MT"
  | "MU"
  | "MV"
  | "MW"
  | "MX"
  | "MY"
  | "MZ"
  | "NA"
  | "NB"
  | "NC"
  | "ND"
  | "NE"
  | "NF"
  | "NG"
  | "NH"
  | "NI"
  | "NJ"
  | "NK"
  | "NL"
  | "NM"
  | "NN"
  | "NO"
  | "NP"
  | "NQ"
  | "NR"
  | "NS"
  | "NT"
  | "NU"
  | "NV"
  | "NW"
  | "NX"
  | "NY"
  | "NZ"
  | "OA"
  | "OB"
  | "OC"
  | "OD"
  | "OE"
  | "OF"
  | "OG"
  | "OH"
  | "OI"
  | "OJ"
  | "OK"
  | "OL"
  | "OM"
  | "ON"
  | "OO"
  | "OP"
  | "OQ"
  | "OR"
  | "OS"
  | "OT"
  | "OU"
  | "OV"
  | "OW"
  | "OX"
  | "OY"
  | "OZ"
  | "PA"
  | "PB"
  | "PC"
  | "PD"
  | "PE"
  | "PF"
  | "PG"
  | "PH"
  | "PI"
  | "PJ"
  | "PK"
  | "PL"
  | "PM"
  | "PN"
  | "PO"
  | "PP"
  | "PQ"
  | "PR"
  | "PS"
  | "PT"
  | "PU"
  | "PV"
  | "PW"
  | "PX"
  | "PY"
  | "PZ"
  | "QA"
  | "QB"
  | "QC"
  | "QD"
  | "QE"
  | "QF"
  | "QG"
  | "QH"
  | "QI"
  | "QJ"
  | "QK"
  | "QL"
  | "QM"
  | "QN"
  | "QO"
  | "QP"
  | "QQ"
  | "QR"
  | "QS"
  | "QT"
  | "QU"
  | "QV"
  | "QW"
  | "QX"
  | "QY"
  | "QZ"
  | "RA"
  | "RB"
  | "RC"
  | "RD"
  | "RE"
  | "RF"
  | "RG"
  | "RH"
  | "RI"
  | "RJ"
  | "RK"
  | "RL"
  | "RM"
  | "RN"
  | "RO"
  | "RP"
  | "RQ"
  | "RR"
  | "RS"
  | "RT"
  | "RU"
  | "RV"
  | "RW"
  | "RX"
  | "RY"
  | "RZ"
  | "SA"
  | "SB"
  | "SC"
  | "SD"
  | "SE"
  | "SF"
  | "SG"
  | "SH"
  | "SI"
  | "SJ"
  | "SK"
  | "SL"
  | "SM"
  | "SN"
  | "SO"
  | "SP"
  | "SQ"
  | "SR"
  | "SS"
  | "ST"
  | "SU"
  | "SV"
  | "SW"
  | "SX"
  | "SY"
  | "SZ"
  | "TA"
  | "TB"
  | "TC"
  | "TD"
  | "TE"
  | "TF"
  | "TG"
  | "TH"
  | "TI"
  | "TJ"
  | "TK"
  | "TL"
  | "TM"
  | "TN"
  | "TO"
  | "TP"
  | "TQ"
  | "TR"
  | "TS"
  | "TT"
  | "TU"
  | "TV"
  | "TW"
  | "TX"
  | "TY"
  | "TZ"
  | "UA"
  | "UB"
  | "UC"
  | "UD"
  | "UE"
  | "UF"
  | "UG"
  | "UH"
  | "UI"
  | "UJ"
  | "UK"
  | "UL"
  | "UM"
  | "UN"
  | "UO"
  | "UP"
  | "UQ"
  | "UR"
  | "US"
  | "UT"
  | "UU"
  | "UV"
  | "UW"
  | "UX"
  | "UY"
  | "UZ"
  | "VA"
  | "VB"
  | "VC"
  | "VD"
  | "VE"
  | "VF"
  | "VG"
  | "VH"
  | "VI"
  | "VJ"
  | "VK"
  | "VL"
  | "VM"
  | "VN"
  | "VO"
  | "VP"
  | "VQ"
  | "VR"
  | "VS"
  | "VT"
  | "VU"
  | "VV"
  | "VW"
  | "VX"
  | "VY"
  | "VZ"
  | "WA"
  | "WB"
  | "WC"
  | "WD"
  | "WE"
  | "WF"
  | "WG"
  | "WH"
  | "WI"
  | "WJ"
  | "WK"
  | "WL"
  | "WM"
  | "WN"
  | "WO"
  | "WP"
  | "WQ"
  | "WR"
  | "WS"
  | "WT"
  | "WU"
  | "WV"
  | "WW"
  | "WX"
  | "WY"
  | "WZ"
  | "XA"
  | "XB"
  | "XC"
  | "XD"
  | "XE"
  | "XF"
  | "XG"
  | "XH"
  | "XI"
  | "XJ"
  | "XK"
  | "XL"
  | "XM"
  | "XN"
  | "XO"
  | "XP"
  | "XQ"
  | "XR"
  | "XS"
  | "XT"
  | "XU"
  | "XV"
  | "XW"
  | "XX"
  | "XY"
  | "XZ"
  | "YA"
  | "YB"
  | "YC"
  | "YD"
  | "YE"
  | "YF"
  | "YG"
  | "YH"
  | "YI"
  | "YJ"
  | "YK"
  | "YL"
  | "YM"
  | "YN"
  | "YO"
  | "YP"
  | "YQ"
  | "YR"
  | "YS"
  | "YT"
  | "YU"
  | "YV"
  | "YW"
  | "YX"
  | "YY"
  | "YZ"
  | "ZA"
  | "ZB"
  | "ZC"
  | "ZD"
  | "ZE"
  | "ZF"
  | "ZG"
  | "ZH"
  | "ZI"
  | "ZJ"
  | "ZK"
  | "ZL"
  | "ZM"
  | "ZN"
  | "ZO"
  | "ZP"
  | "ZQ"
  | "ZR"
  | "ZS"
  | "ZT"
  | "ZU"
  | "ZV"
  | "ZW"
  | "ZX"
  | "ZY"
  | "ZZ";
