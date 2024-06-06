import {View, Button} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '933623203578-860s0fsh86j4tqt72uu718artof11c7f.apps.googleusercontent.com',
});

const App = () => {
  const handleLoginWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = userInfo.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Button title="Login with gooolge" onPress={handleLoginWithGoogle} />
    </View>
  );
};

export default App;
