import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { globalStyles } from '../../../config/theme/theme';

const TextInputScreen = () => {

    const [ form, setForm ] = useState({
        name: '',
        email: '',
        phone: '',
    });
    return (
        <ScrollView>
            <CustomView margin>
                <Title text='Text Inputs' safe />

                <Card>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Ingrese su nombre'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={value => setForm({ ...form, name: value })}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Ingrese su Correo'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={value => setForm({ ...form, email: value })}
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Ingrese Telefono'
                        keyboardType='phone-pad'
                        onChangeText={value => setForm({ ...form, phone: value })}
                    />
                </Card>
                <Card>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>
                <View style={{ height: 20 }} />
                <Card>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Ingrese Telefono'
                        keyboardType='phone-pad'
                        onChangeText={value => setForm({ ...form, name: value })}
                    />
                </Card>
            </CustomView>
            <View style={{ height: 20 }} />

        </ScrollView>

    );
}

const styles = StyleSheet.create({})

export default TextInputScreen;
