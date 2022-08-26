export class Stock {
    id!: number;
    stockTicker!: string;
    price!: DoubleRange;
    volume!: number;
    buyOrSell!: string;
    statusCode!: number;
    totalInvestment!: any;
}
