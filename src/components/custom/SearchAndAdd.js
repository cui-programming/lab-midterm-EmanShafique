import { View,FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import { Button, Text, TextInput } from '../../components/ui';
import React, { useState } from 'react';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd() {
  const [search, setSearch] = useState('');
  const [newZikr, setNewZikr] = useState('');
  const [azkaar, setAzkaar] = useState(initialAzkaar);

  // Add new zikr (only if unique)
  const handleAdd = () => {
    const exists = azkaar.some(
      item => item.phrase.toLowerCase() === newZikr.toLowerCase()
    );
    if (newZikr.trim() !== '' && !exists) {
      const newItem = {
        id: (azkaar.length + 1).toString(),
        phrase: newZikr,
        count: 0,
      };
      setAzkaar([...azkaar, newItem]);
      setNewZikr('');
    }
  };

  // Filter by search (case-insensitive)
  const filteredAzkaar = azkaar.filter(item =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>

      {/* Search box */}
      <TextInput
        style={styles.input}
        placeholder="Search Zikr..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Add new zikr */}
      <TextInput
        style={styles.input}
        placeholder="Add new Zikr..."
        value={newZikr}
        onChangeText={setNewZikr}
      />

      <Button onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </Button>

      {/* Display list */}
      {filteredAzkaar.map(item => (
        <Text key={item.id} style={styles.listItem}>
          {item.phrase} ({item.count})
        </Text>
      ))}
    </View>
  );
}