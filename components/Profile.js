import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {hook} from 'cavy';

class Profile extends React.Component {
    render() {
        return (
            <View>
                <Text ref={this.props.generateTestHook("Profile.profileName")}>Corentin André</Text>
                <Text ref={this.props.generateTestHook("Profile.age")}>23 ans</Text>
            </View>
        )
    }
}
export default hook(Profile);

const styles = StyleSheet.create({
    profile: {
        backgroundColor: "#123456",
    }
})
