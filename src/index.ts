import { MatchReader } from "./MatchReader"
import { Summary } from "./Summary"

const matchReader = MatchReader.fromCSV('football.csv')
matchReader.load()

const summary = Summary.generateHtmlReport('Fulham')

summary.buildAndPrintReport(matchReader.matches)