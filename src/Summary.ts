import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { HtmlReport } from "./reports/HtmlReport"

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget{
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    static generateHtmlReport(teamName: string): Summary
    {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport()
        )
    }

    buildAndPrintReport(matches: MatchData[]):void
    {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}