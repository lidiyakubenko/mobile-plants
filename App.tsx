import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import {AppNavigator} from "./src/components/Navigation";


function App(): JSX.Element {

    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator/>
            </ApplicationProvider>
        </>
    );
}

export default App;
