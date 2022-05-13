import React from 'react';
import { 
    Paper, 
    Button,
    Card 
} from '@material-ui/core';

const MaterialTest = props => {
    return (
        <div>
            <Paper className="mb-5" elevation={24}>
                <h1 className="mb-3">Testing Paper!</h1>
                <Button variant="contained" color="primary" className="mb-3">Button</Button>
            </Paper>
            <Card className="p-3 mb-5">
                <h1>This content is in my card</h1>
            </Card>
        </div>
    );
}

export default MaterialTest;