import { useMediaQuery } from '@material-ui/core';
import React, {
    useState
} from 'react';
import { useDataProvider, useVersion } from 'react-admin';
import Welcome from './Welcome';






const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

export const Dashboard = () => {
    const [state, setState] = useState({});
    const version = useVersion();
    const dataProvider = useDataProvider();
    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('xs')
    );
    const isSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('md')
    );


    // const { } = state;
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn}>
                <Welcome />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn}>
            <div style={styles.singleCol}>
                <Welcome />
            </div>
        </div>
    ) : (
        <>
            <Welcome />
            
        </>
    );
};

