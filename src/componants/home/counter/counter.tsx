import React from "react";
import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core";

interface CounterState {
    counter: number
}

class Counter extends React.Component<any, CounterState> {

    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    private updateCounter(val: number) {
        this.setState({counter: val})
    }


    private counterUpdate(val: number) {
        const {counter} = this.state as { counter: number };
        if (val > 0) {
            this.updateCounter(counter + 1)
        } else {
            this.updateCounter(counter - 1)
        }
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant='h4' component='h3' gutterBottom align='center'>
                        Counter Example
                    </Typography>
                    <Grid spacing={4}>
                        <Grid container xs={12} style={{textAlign: 'center'}}>
                            <Grid item xs={4}/>
                            <Grid item xs={4}>
                                <Typography variant='h6' component='h4' gutterBottom align='center'>
                                    {this.state.counter}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}/>
                        </Grid>
                        <Grid container xs={12} style={{textAlign: 'center'}} spacing={2}>
                            <Grid item xs={6}>
                                <Button variant='contained' color='primary'
                                        onClick={() => this.counterUpdate(1)}>Increment</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant='contained' color='primary'
                                        onClick={() => this.counterUpdate(-1)}>Decrement</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            // <Card className='m-3'>
            //     <Card.Header>
            //         <h3 className='text-center'>Counter Example</h3>
            //     </Card.Header>
            //     <Card.Body>
            //         <Row>
            //             <Col>
            //                 <Button type='button' onClick={() => this.counterUpdate(1)}>Increment</Button>
            //             </Col>
            //             <Col>
            //                 <Button type='button' onClick={() => this.counterUpdate(-1)}>Decrement</Button>
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <h4 className='text-center'>{this.state.counter}</h4>
            //             </Col>
            //         </Row>
            //     </Card.Body>
            // </Card>
        );
    };
}

export default Counter
