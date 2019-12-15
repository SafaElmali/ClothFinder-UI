import React from 'react';
import { Image } from 'react-native';

const Header = () => {
    return (
        <>
            <Image
                style={{ transform: [{ scale: 0.3 }] }}
                source={require('../../../../images/standing-6.png')}
            />
        </>
    )
}

export default Header;