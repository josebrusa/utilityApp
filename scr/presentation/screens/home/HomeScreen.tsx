import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../../components/ui/Title';
import { MenuItem } from '../../components/ui/MenuItem';

export const animationMenuItems = [

    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
]


export const menuItems = [


    // 02-menuItems
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'CustomSectionListScreen',
    },
    {
        name: 'Modal',
        icon: 'copy-outline',
        component: 'ModalScreen',
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen',
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component: 'SlidesScreen',
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen',
    },
];

export const uiMenuItems = [
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen',
    },
    {
        name: 'TextInputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen',
    },
]
export const HomeScreen = () => {
    return (
        <View style={[ globalStyles.mainContainer ]}>
            <View style={globalStyles.globalMargin}>

                <ScrollView>
                    <Title text='Opciones de menu' safe />

                    <View style={{ marginTop: 30 }} />
                    {
                        animationMenuItems.map((item, index) => (
                            <MenuItem
                                key={item.component}
                                {...item}
                                isFirst={index === 0}
                                isLast={index === animationMenuItems.length - 1}
                            />
                        ))
                    }
                    <View style={{ marginTop: 30 }} />

                    {
                        menuItems.map((item, index) => (
                            <MenuItem
                                key={item.component}
                                {...item}
                                isFirst={index === 0}
                                isLast={index === menuItems.length - 1}
                            />
                        ))
                    }
                    <View style={{ marginTop: 30 }} />
                    {
                        uiMenuItems.map((item, index) => (
                            <MenuItem
                                key={item.component}
                                {...item}
                                isFirst={index === 0}
                                isLast={index === uiMenuItems.length - 1}
                            />
                        ))
                    }

                </ScrollView>

            </View>
        </View>
    );
}