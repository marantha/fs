import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const barcodeScannedItems = (props) => {
    return(
        <View>
            <Text>
                {props.data}
            </Text>
        </View>
    )
}

export default barcodeScannedItems;