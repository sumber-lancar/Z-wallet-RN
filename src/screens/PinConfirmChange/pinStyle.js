import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  contentTextLogin: {
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 15,
  },
  contentTextLoginDesc: {
    paddingVertical: 5,
    paddingLeft: 20,
    paddingRight: 60,
  },
  cellPin: {
    borderRadius: 10,
    width: 40,
    borderColor: '#6379F4',
    borderWidth: 1,
  },
  formPin: {
    // width: 100,
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginBtn: {
    width: 380,
    height: 60,
    borderRadius: 12,
    marginTop: 295,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpBtn: {
    marginBottom: 40,
  },
});
