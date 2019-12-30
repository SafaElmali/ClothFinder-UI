import React from 'react';
import { Image } from 'react-native';

//Pass image for Header
const Header = (props) => {
    return (
        <>
            <Image
                style={{ transform: [{ scale: 0.3 }] }}
                source={props.imagePath}
            />
        </>
    )
}

export default Header;