import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileButton = props => {
  const { navigate } = props.onClick;
  return <Button
    icon={
      <Icon
        name="user-o"
        size={30}
        color='black'
      />
    }
    onPress={() => navigate('Profile')}
    buttonStyle={{ backgroundColor: '#fff', marginRight: 16 }}
  />
}

export default ProfileButton;