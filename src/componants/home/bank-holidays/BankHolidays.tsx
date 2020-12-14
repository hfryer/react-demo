import React from "react";
import {Card} from "react-bootstrap";

interface BankHolidayItem {
    date: string
}

interface BankHolidaysState {
    bankHolidays: Array<BankHolidayItem>
}

export const RenderBankHolidayItem: React.FC<BankHolidayItem> = (item) => {
    return (<li>{item.date}</li>);
}

class BankHolidays extends React.Component<any, BankHolidaysState> {
    constructor(props: any) {
        super(props);
        this.state = {
            bankHolidays: [
                {date: '2020-10-11'},
                {date: '2020-10-11'},
                {date: '2020-10-11'},
                {date: '2020-10-11'}
            ]
        }
    }

    render() {
        return <Card className='m-3'>
            <Card.Header>
                <h4>Bank Holidays</h4>
            </Card.Header>
            <Card.Body>
                <ul>
                    {this.state.bankHolidays.map((item, index) => {
                        return <RenderBankHolidayItem {...item}/>
                    })}
                </ul>
            </Card.Body>
        </Card>
    }

}

export default BankHolidays