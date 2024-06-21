import { Switch, Text } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

export const SwitchScreen = () => {

    const [ isEnabled, setIsEnabled ] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

        </CustomView>
    );
}
