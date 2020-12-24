import React from "react";
import axios from 'axios';
import {DateTime} from 'luxon'
import {
    Card,
    CardContent,
    Grid,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableRow,
    Typography
} from "@material-ui/core";

interface BankHolidayItem {
    title: string
    date: DateTime
}

interface BankHolidaysState {
    bankHolidays: Array<BankHolidayItem>
}

interface BankHolidayItemProps {
    item: BankHolidayItem
}

export const RenderBankHolidayItem: React.FC<BankHolidayItemProps> = ({item}) => {
    let convertedDate = item.date.toLocaleString(DateTime.DATE_FULL);
    return (
        <TableRow>
            <TableCell>{item.title}</TableCell>
            <TableCell>{convertedDate}</TableCell>
        </TableRow>);
}

class BankHolidays extends React.Component<any, BankHolidaysState> {

    private now = DateTime.local();

    constructor(props: any) {
        super(props);
        this.state = {
            bankHolidays: []
        }
    }

    componentDidMount() {
        axios.get('https://www.gov.uk/bank-holidays.json').then(
            res => {
                const data = res.data
                let events = data['england-and-wales'].events

                const convertedEvents: Array<BankHolidayItem> = events.map((item: any, index: any) => {
                    return {
                        title: item.title,
                        date: DateTime.fromISO(item.date, {locale: 'gb'})
                    }
                })

                const filteredEvents: Array<BankHolidayItem> = convertedEvents.filter((item: any) => {
                        return item.date > this.now;
                    }
                )
                this.setState({bankHolidays: filteredEvents})
            }
        )
    }

    render() {
        return <Card>
            <CardContent>
                <Grid spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant={'h4'} align={"center"}>
                            English Bank Holidays
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableCell> Holiday Name</TableCell>
                                <TableCell> Date</TableCell>
                            </TableHead>
                            <TableBody>
                                {this.state.bankHolidays.map((item, index) => {
                                    return <RenderBankHolidayItem key={index} item={item}/>
                                })}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    }

}

export default BankHolidays