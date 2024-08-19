import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.avatar}
          source={{ uri: `./assets/avatar.gif` }}
        />
        <Text style={styles.username}>Khosi Machake</Text>
        <Text style={styles.email}>khosimachake53@gmail.com</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved places</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Home</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Work</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add work</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other options</Text>
          <TouchableOpacity style={styles.signOutButton}>
            <Text style={styles.signOutText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 18,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  section: {
    width: '100%',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  signOutButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff0000',
    borderRadius: 10,
  },
  signOutText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconButton: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  iconLabel: {
    fontSize: 12,
    color: '#333',
  },
});

export default Profile;
