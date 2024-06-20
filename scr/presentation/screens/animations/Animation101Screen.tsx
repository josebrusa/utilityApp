import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useRef } from 'react';

export const Animation101Screen = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;

    const fadein = () => {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()

    }
    const fadeout = () => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

    }

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.puperlBox,
                {
                    opacity: animatedOpacity
                }
            ]} />
            <Pressable onPress={fadein} style={{ marginTop: 10 }}>
                <Text>FadeIn</Text>
            </Pressable>
            <Pressable onPress={fadeout} style={{ marginTop: 10 }}>
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    puperlBox: {
        width: 150,
        height: 150,
        backgroundColor: colors.primary

    }
});


