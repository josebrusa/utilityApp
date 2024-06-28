import prompt from "react-native-prompt-android";


interface Options {
    title: string;
    subTitle: string;
    buttons: PromptButton[];
    promptType?: 'plain-text' | 'secure-text';
    placeholder?: string;
    cancelable?: boolean;
    defaultValue?: string;
}

interface PromptButton {
    text: string;
    onPress: (value: string) => void;
    style?: 'default' | 'cancel' | 'destructive';
}


export const showPromt = ({ title,
    subTitle,
    buttons,
    promptType = 'plain-text',
    placeholder,
    defaultValue }: Options) => {

    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );
}
