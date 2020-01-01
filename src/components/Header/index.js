import React from 'react';
import { Image } from 'react-native';

//Pass image for Header
const Header = (props) => {
    const { imagePath } = props;

    return (
        <>
            <Image
                style={{ transform: [{ scale: 0.3 }] }}
                source={imagePath}
            />
        </>
    )
}

export default Header;