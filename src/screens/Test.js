import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Test extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ height: 200, width: 300, alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Test;
