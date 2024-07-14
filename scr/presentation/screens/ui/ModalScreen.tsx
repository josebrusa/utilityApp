import { Modal, Platform, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

export const ModalScreen = () => {


    const [ isVisible, setIsVisible ] = useState(false)

    return (
        <CustomView
            margin
        >
            <Title
                text='Modal'
                safe
            />

            <Button
                text='Open Modal'
                onPress={() => setIsVisible(true)}
            />



            <Modal visible={isVisible}
                animationType='slide'
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        // justifyContent: 'center',
                        // alignItems: 'center'

                    }}
                >
                    <View style={{ paddingHorizontal: 10 }}>

                        <Title text='Modal Content' safe />
                    </View>

                    <View style={{ flex: 1 }} />

                    <Button
                        text='Close Modal'
                        onPress={() => setIsVisible(false)}
                        styles={{
                            height: Platform.OS === 'android' ? 40 : 60,
                            borderRadius: 0,
                        }}
                    />
                </View>
            </Modal>

        </CustomView>
    );
}



