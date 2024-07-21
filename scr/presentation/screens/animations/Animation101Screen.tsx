import { StyleSheet, Animated, Easing } from 'react-native';
import useAnimation from '../../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {

    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()
    const { colors } = useContext(ThemeContext)
    return (
        <CustomView style={styles.container}>
            <Animated.View style={[
                styles.puperlBox,
                {
                    backgroundColor: colors.primary,
                },
                {
                    opacity: animatedOpacity,
                    transform: [ { translateY: animatedTop } ]
                }
            ]} />
            <Button
                styles={{ marginTop: 10 }}
                text='FadeIn'
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({ initialPosition: -100, easing: Easing.bounce, duration: 600 })
                }} />
            <Button
                styles={{ marginTop: 10 }}
                text='FadeOut'
                onPress={() => fadeOut({})}
            />
        </CustomView>
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
    }
});


