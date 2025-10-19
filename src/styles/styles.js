import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF5F7',
    alignItems: 'center',
  },

  // Header (for AboutMe)
  header: {
    backgroundColor: '#C2185B', 
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Section containers (TasbihList, SearchAndAdd)
  section: {
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    padding: 15,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#FBC02D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D81B60', 
  },

  // Tasbih list items
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    borderBottomWidth: 0.5,
    borderColor: '#FFCDD2',
    paddingVertical: 8,
  },
  itemName: {
    fontSize: 16,
    color: '#4A148C',
  },
  counterBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },

  // Search & Add section
  input: {
    borderWidth: 1,
    borderColor: '#FF80AB', 
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    width: '100%',
    backgroundColor: '#FFF0F6',
  },

  // Buttons (general)
  button: {
    backgroundColor: '#FFCA28', 
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 6,
    shadowColor: '#F57C00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#6A1B9A',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // List item text
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#7B1FA2',
  },

  // Teacher message box
  teachermessage: {
    backgroundColor: '#FFE0F0', 
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#F8BBD0',
  },
  messageText: {
    color: '#C2185B',
    fontSize: 16,
    fontWeight: '600',
  },
});

