import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './style'
const ListAlarm = (props) => {
  return (
    <View style={styles.item}>
            <View style={styles.content}>
                <Text style={styles.contentTime}>{props.title1}</Text>
                <Text style={styles.contentDay}>{props.title}</Text>
            </View>
            <Button
                title='Remove'
                color='red'
                onPress={props.onDeleteTask}
            />
        </View>
  )
}

export default ListAlarm