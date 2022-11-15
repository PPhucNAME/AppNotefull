import { View, Text, Button, Alert } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';

const TaskTimePicker = (props) => {
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    }
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }

    const handleDatePicker = (datetime) => {
        var currentTime = Date.now();
        let tempDate = datetime;
        if (currentTime > datetime.getTime()) {
            Alert.alert('Vui lòng nhập lai');
            hideDateTimePicker();
            return;
        }
        var tgMonth = tempDate.getMonth() + 1;
        let tgMonth1 = tgMonth;
        let fTime = tempDate.getHours()  + ' giờ ' + ' : ' + tempDate.getMinutes() + ' phút ' ;
        let fDate = tempDate.getDate() + '/' + tgMonth1 + '/' + tempDate.getFullYear();
        props.onAddTask(fDate, fTime);
        hideDateTimePicker();
    }
    return (
    <View>
        <Button 
            title='Add alarms'
            color='red'
            onPress={() => {
                showDateTimePicker();
            }}
        />
        <DateTimePicker
            mode="datetime"
            isVisible={isDateTimePickerVisible}
            onConfirm={handleDatePicker}
            onCancel={hideDateTimePicker}
        />
    </View>
    )
}

export default TaskTimePicker