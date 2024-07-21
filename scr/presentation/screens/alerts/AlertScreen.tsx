import { CustomView } from "../../components/ui/CustomView";
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { Alert, View } from 'react-native';
import { globalStyles } from "../../../config/theme/theme";


import { showPromt } from "../../../config/adapters/propmt.adapter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const AlertScreen = () => {

    const { isDark } = useContext(ThemeContext)

    const createTwoButtonAlert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );
    }
    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
        ],
            {
                cancelable: true,
                onDismiss() {
                    console.log('onDismiss');
                },
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );


    const onShowPrompt = () => {


        showPromt({
            title: 'Enter your name',
            subTitle: 'Please enter your name to continue',
            buttons: [
                { text: 'OK', onPress: () => console.log('OK') }
            ],
            placeholder: 'Jose Brusa'
        },

        );

        //Native Code
        // Alert.prompt(
        //     'Enter your name',
        //     'Please enter your name to continue',
        //     (valor: string) => console.log({ valor }),
        //     'secure-text',
        //     'Hola',
        //     'number-pad'
        // );
    };


    return (
        <CustomView style={globalStyles.globalMargin} margin={false}>
            <Title safe text="Alertas" />

            <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
            <View style={{ height: 10 }} />
            <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
            <View style={{ height: 10 }} />
            <Button text="Prompt - input" onPress={onShowPrompt} />
        </CustomView>
    );
}
