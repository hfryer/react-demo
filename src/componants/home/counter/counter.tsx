import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

interface CounterState{
    counter: number
}

class Counter extends React.Component<any, CounterState>{

    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    private updateCounter(val: number){
        this.setState({counter:val})
    }


    private counterUpdate(val: number){
        const {counter} = this.state as {counter: number};
        if (val > 0){
            this.updateCounter(counter + 1)
        }
        else{
            this.updateCounter(counter -1)
        }
    }
    render() {
        return (
            <Card className='m-3'>
                <Card.Header>
                    <h3 className='text-center'>Counter Example</h3>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button type='button' onClick={() => this.counterUpdate(1)}>Increment</Button>
                        </Col>
                        <Col>
                            <Button type='button' onClick={() => this.counterUpdate(-1)}>Decrement</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className='text-center'>{this.state.counter}</h4>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    };
}
export default Counter
