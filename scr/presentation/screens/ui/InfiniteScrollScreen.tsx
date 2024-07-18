import { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/theme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {


    const [ number, setNumber ] = useState([ 0, 1, 2, 3, 4, 5 ])

    const loadMore = () => {
        //Todo: añadir numero a nuestro arreglo
        const newArray = Array.from({ length: 5 }, (_, i) => number.length + i)

        setTimeout(() => {
            setNumber([ ...number, ...newArray ])
            // setNumber([ ...number, ...newArray ])
        }, 1000)
    }

    return (
        <View style={{ backgroundColor: 'black' }}>
            <FlatList
                data={number}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => <ListItem number={item} />}

                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    );
}

interface ListItemProps {
    number: number
}

const ListItem = ({ number }: ListItemProps) => {
    return (


        <FadeInImage
            uri={`https://picsum.photos/id/${number}/200/300`}
            style={{
                width: '100%',
                height: 300,
                marginBottom: 10
            }}
        />

        // <Image
        //     source={{ uri: `https://picsum.photos/id/${number}/200/300` }}
        //     style={{
        //         width: '100%',
        //         height: 300,
        //         marginBottom: 10
        //     }}
        // />

    )
}
