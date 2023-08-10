import { View } from 'react-native';
import Text from "@kaloraat/react-native-text";
import UserInput from '../components/UserInput';
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import CircleLogo from '../components/CircleLogo';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOnSubmit = async () => {
        setLoading(true);
        if(!name || !email || !password) {
            alert('Please fill all the fields');
            setLoading(false);
            return;
        }
        console.log("Signup Requested => ", {name, email, password});
        try {
            const {response} = await axios.post('http://localhost:3000/api/signup', {
                name,
                email,
                password,
            });
            setLoading(false);
            console.log("Signup Response => ", response);
            alert("Signup Successfull");
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return (
        <View>
            <CircleLogo />
            <Text title center color="#7a4947">Sign Up</Text>
            <UserInput
                name="NAME" 
                value={name} 
                setValue={setName} 
                autoCapitalize= "words"
                autoCorrect={false} />
            <UserInput 
                name="EMAIL" 
                value={email} 
                setValue={setEmail}
                autoComplete= "email" 
                autoCorrect={false}
                keyboardType= "email-address" />
            <UserInput 
                name="PASSWORD" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
                autoComplete="new-password" />
            <SubmitButton title="Sign Up" handleSubmit={handleOnSubmit} loading={loading} />
                
            {/* <Text>{JSON.stringify({name, email, password}, null, 4)}</Text> */}
        </View>
    );
}

export default Signup;