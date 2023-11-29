const { StyleSheet } = require("react-native");

exports.ProductButtonStyles = StyleSheet.create({
    container: {
      width: 180,
      height: 200,
      marginHorizontal: 5
    },
    image: {
        width: '100%',
        height: '90%',
        borderRadius: 10,
        padding: 0,
        margin: 0
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        price: {
            free: {
                color: 'blue',
                fontWeight: '600'
            }
        }
    },
    more: {
      icon: { color: '#878787' },
      container: {
        width: '100%', 
        height: '90%', 
        borderRadius: 10, 
        padding: 0, 
        margin: 0, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#878787',
        borderStyle: 'dashed'
      }
    }
});

exports.HorizontalSelectorStyles = StyleSheet.create({
    container: { paddingHorizontal: 10 },
    scrollView: { height: 200, marginTop: 5 },
    contentContainerScroll: { justifyContent: 'space-around', alignItems: 'center' },
    empty: { minWidth: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }
});

exports.BannerStyles = StyleSheet.create({
  container: { width: '100%', height: 230 },
  image: { width: '100%', height: '100%' }
});

exports.HomeStyles = StyleSheet.create({
  bannerContainer: { justifyContent: 'center', alignItems: 'center'},
  banner: {marginVertical: 10, marginBottom: 25}
})

exports.SearchBarStyles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(52, 52, 52, 0.1)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 10,
      marginHorizontal: 5
    },
    icon: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    input: {
      width: '90%',
      paddingVertical: 5,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      color: 'black'
    }
});

exports.HeaderStyles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1.5,
    backgroundColor: 'rgba(220, 220, 220, 0.9)',
    zIndex: 10
  },
  left: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    image: { width: 40, height: 35, marginRight: 10 },
    title: { fontWeight: 'bold', fontSize: 16 }
  },
  right: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cart: { padding: 5 },
    profile: {
      container: { padding: 5 },
      image: { width: 40, height: 40 }
    }
  }
});