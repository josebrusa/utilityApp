import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { set } from 'mongoose';
import { colors } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {

    const [ isRefreshing, setIsRefreshing ] = useState(false)

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 5000)
    }

    return (

        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    colors={[ colors.primary, 'red', 'green', 'orange' ]}
                    onRefresh={onRefresh}
                />
            }
        >
            <CustomView margin>
                <Title text='Pull to refresh' safe />
            </CustomView>
        </ScrollView>
    );
}


