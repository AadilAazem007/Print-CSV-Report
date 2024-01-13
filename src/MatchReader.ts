import { dateStringToDate } from './utils'
import { MatchResult } from "./MatchResult"
import { CsvFileReader } from "./CsvFileReader"
import { MatchData } from './MatchData'

interface DataReader {
    read(): void,
    data: string[][]
}

export class MatchReader
{
    matches: MatchData[] = []

    constructor(public reader: DataReader){}

    static fromCSV(filename: string): MatchReader
    {
        return new MatchReader(
            new CsvFileReader(filename)
        )
    }

    load(): void {
        this.reader.read()
        this.matches = this.reader.data.map((value:string[]):MatchData =>{
            return [
                dateStringToDate(value[0]),
                value[1],
                value[2],
                parseInt(value[3]),
                parseInt(value[4]),
                value[5] as MatchResult,
                value[6]
            ]
        })
    }

    
}