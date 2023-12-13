// import React, { useState } from 'react'
import React, { useState } from 'react'
import { ScrollView, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu'

const CarItem = () => {
    const [ locked, setLocked ] = useState( true )

    // Funkcija
    const clicklock = () => {
        if(locked) {
            setLocked(false);
        }
        else {
            setLocked(true);
        }
    }

  return (
    <View style={styles.carContainer}>
        <ImageBackground 
            source={require("../../assets/background.png")}
            style={styles.backgroundImage}
        />
        {/* HEADER */}
        <View style={styles.header}>
            <TouchableOpacity>
                <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>NazMobile</Text>
            <TouchableOpacity>
                <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={24} />
            </TouchableOpacity>
            
        </View>
        {/* Mileage */}
        <View style={styles.batterySection}>
            <Image 
                source={require("../../assets/battery.png")}
                style={styles.batteryImage}
            />
            <Text style={styles.batteryText} >150ml</Text>
        </View>
        {/* Status */}
        <View style={styles.status}>
            <Text style={styles.statusText}>Parked</Text>
        </View>

        <ScrollView>
            {/* ControlIcons */}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ faKey } size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={ clicklock }
                >
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ locked ? faLock : faUnlockAlt } size={24} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Menu */}
            <Menu />
        </ScrollView>
    </View>
  )
}

export default CarItem;