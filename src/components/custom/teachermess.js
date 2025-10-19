import React,{ useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';
const TeacherMessage = () => {
  return (
    <View style={styles.teachermessage}>
        <Text style={styles.messageText}>keep up! good work! </Text>
    </View>
  );
}
export default TeacherMessage;
