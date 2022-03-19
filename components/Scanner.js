import * as React from 'react';
import { Text, View, StyleSheet, Button, AsyncStorageStatic} from 'react-native';
import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const ScannerScreen = () => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [list, setList] = useState([]);

      
  //this is how we create a state for a function componenet in REACT NATIVE. 'Food' would be the name of the state. 'setFood' would be the function we're gonna use to set the first's arugment's state.


    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      setList(prev => {
        return [ 
          ...prev,
          {data}
        ]
      });
      //alert(data);
      alert(JSON.stringify(list));
      };
  
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
        style={StyleSheet.absoluteFillObject}
        
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false) } />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});