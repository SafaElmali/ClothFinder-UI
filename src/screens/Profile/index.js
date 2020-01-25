import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import LogoutButton from './components/LogoutButton/index';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.userIconContainer}>
                    <Icon name="user" size={128}/>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.logoutContainer}>
                            <Icon name="pie-chart" size={24} color="#F8530D" style={{ marginRight: 16 }} />
                            <Text style={styles.menuItem}>Success Rate</Text>
                        </View>
                    </View>
                    <View style={styles.itemDivier}></View>
                    <View style={styles.itemContainer}>
                        <View style={styles.logoutContainer}>
                            <Icon name="user" size={32} style={{ marginRight: 16 }} />
                            <Text style={styles.menuItem}>recep</Text>
                        </View>
                    </View>
                    <View style={styles.itemDivier}></View>
                    <View style={styles.itemContainer}>
                        <View style={styles.logoutContainer}>
                            <Icon name="envelope" size={24} style={{ marginRight: 16 }} />
                            <Text style={styles.menuItem}>recepinancc@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.itemDivier}></View>
                    <View style={styles.itemContainer}>
                        <View style={styles.logoutContainer}><Icon name="send" size={24} style={{ marginRight: 16 }} />
                            <Text style={styles.menuItem}>Send Feedback</Text>
                        </View>
                    </View>
                    <View style={styles.itemDivier}></View>
                    <View style={styles.itemContainer}>
                        <View style={styles.logoutContainer}>
                            <Icon name="sign-out" size={32} style={{ marginRight: 16 }} />
                            <Text style={styles.menuItem}>Logout</Text>
                        </View>
                    </View>
                </View>
                <LogoutButton onClick={navigation} />
            </View>
        )
    }
}