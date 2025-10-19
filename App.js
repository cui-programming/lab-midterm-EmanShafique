import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/teachermess';
import TasbihList from './src/components/custom/TasbihList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { initialAzkaar } from './src/data/azkaar';
import { STUDENT_NAME, REG_NO } from './src/config/student';

export default function App() {
  const [items, setItems] = useState(initialAzkaar);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      <TasbihList items={items} setItems={setItems} />
      <SearchAndAdd items={items} setItems={setItems} />
    </ScrollView>
  );
}


