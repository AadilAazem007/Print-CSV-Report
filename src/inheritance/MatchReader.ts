import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from './utils'
import { MatchResult } from "./MatchResult"
type MatchType = [
    Date, string, string, number, number, MatchResult, string
]

export class MatchReader extends CsvFileReader<MatchType>
{
    mapRow(value: string[]):MatchType
    {
        return [
            dateStringToDate(value[0]),
            value[1],
            value[2],
            parseInt(value[3]),
            parseInt(value[4]),
            value[5] as MatchResult,
            value[6]
        ]
    }
}