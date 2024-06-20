import { StyleSheet, Text, View, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../../config/theme/theme';
import useAnimation from '../../hooks/useAnimation';

export const Animation101Screen = () => {

    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.puperlBox,
                {
                    opacity: animatedOpacity,
                    transform: [ { translateY: animatedTop } ]
                }
            ]} />
            <Pressable
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({ initialPosition: -100, easing: Easing.bounce, duration: 600 })

                }}
                style={{ marginTop: 10 }}>
                <Text>FadeIn</Text>
            </Pressable>
            <Pressable onPress={() => fadeOut({

            })} style={{ marginTop: 10 }}>
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


