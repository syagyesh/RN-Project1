import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

const SubmitButton = ({title, handleSubmit, loading}) => {
    return (
        <TouchableOpacity
            onPress={handleSubmit}
            style={{
                backgroundColor: '#ff9900',
                height: 25,
                marginBottom: 30,
                justifyContent: 'center',
                marginHorizontal: 40,
                borderRadius: 15,
            }}>
            <Text bold center medium>
                {loading ? 'Please Wait' : title}
            </Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;