import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';// You may switch Text to ui/Text later
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const increment = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button style={styles.button} onPress={() => decrement(item.id)}>-</Button>
        <Text style={styles.counter}>{item.count}</Text>
        <Button style={styles.button} onPress={() => increment(item.id)}>+</Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}