import React from "react";
import {Card} from "react-bootstrap";
import axios from 'axios';
import {DateTime} from 'luxon'

interface BankHolidayItem {
    title: string
    date: DateTime
}

interface BankHolidaysState {
    bankHolidays: Array<BankHolidayItem>
}
interface BankHolidayItemProps{
    item: BankHolidayItem
}

export const RenderBankHolidayItem: React.FC<BankHolidayItemProps> = ({item}) => {
    let convertedDate = item.date.toLocaleString(DateTime.DATE_FULL);
    return (<li>{item.title} - {convertedDate}</li>);
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
        return <Card className='m-3'>
            <Card.Header>
                <h4>English Bank Holidays</h4>
            </Card.Header>
            <Card.Body>
                <ul>
                    {this.state.bankHolidays.map((item, index) => {
                        return <RenderBankHolidayItem key={index} item={item}/>
                    })}
                </ul>
            </Card.Body>
        </Card>
    }

}

export default BankHolidays