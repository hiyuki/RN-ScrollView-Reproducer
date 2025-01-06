import { ScrollView, View, Text, StyleSheet } from 'react-native'

// You can import supported modules from npm
export default function App () {
  return (
    <ScrollView
      style={styles.scrollView}
      snapToInterval={40}
      decelerationRate='fast'
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        return (<View style={styles.item} key={i}><Text style={styles.text}>{i}</Text></View>)
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 200,
    flexGrow: 0,
    height: 40,
    width: 100.3
  },
  item: {
    height: 40,
    width: '100%'
  },
  text: {
    fontSize: 30,
  }
})