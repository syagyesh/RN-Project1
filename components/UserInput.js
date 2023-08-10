import { View, TextInput } from 'react-native';
import Text from "@kaloraat/react-native-text";

const UerInput = ({name, value, setValue, autoCapitalize="none", keyboardType="default", autoComplete, secureTextEntry=false}) => {
    return (
        <View style={{
            marginHorizontal: 40,
        }}>
            <Text semi>{name}: </Text>
            <TextInput
            autoCorrect={false}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            autoCompleteType={autoComplete}
            secureTextEntry={secureTextEntry}
            style={{
                borderBottomWidth: .5,
                height: 40,
                borderBottomColor: '#8e93a1',
                marginBottom: 30,
            }}
            value={value}
            onChangeText={(text) => {
                setValue(text);
            }}
            />
        </View>
    );
}

export default UerInput;