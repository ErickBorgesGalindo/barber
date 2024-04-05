import { StyleSheet } from "react-native";

export default StyleSheet.create({
    //------ General Dark Styles ---------
    DarkContainer: {
        flex: 1,
        backgroundColor: '#1C1C1E'
    },

    WhiteText: {
        fontFamily: 'Light',
        color: '#FEFFFA',
    },

    WhiteSubtitle: {
        fontFamily: 'Light',
        color: '#FEFFFA',
        fontSize: 20
    },

    WhiteTitle: {
        fontFamily: 'SemiBold',
        color: '#FEFFFA',
        fontSize: 40
    },

    //------ General White Styles ---------
    WhiteContainer: {
        flex: 1,
        backgroundColor: '#FEFFFA'
    },

    DarkText: {
        fontFamily: 'Light',
        color: '#1C1C1E'
    },

    DarkSubtitle: {
        fontFamily: 'Light',
        color: '#1C1C1E',
        fontSize: 20
    },

    DarkTitle: {
        fontFamily: 'SemiBold',
        color: '#1C1C1E',
        fontSize: 40
    },

    //------ Login Background ---------
    LoginBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },

    LoginTextBox: {
        marginTop: '20%',
        alignItems: 'center'
    },

    //------- Login Input -----------
    LoginData: {
        marginTop: '50%',
        alignItems: 'center',
    },

    LoginInput: {
        padding: 10,
        paddingStart: 30,
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.95)',
    },

    LoginOptions: {
        // marginTop: '25%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '10%',
        flexDirection: 'row',

    },

    LoginError: {
        fontFamily: 'Normal',
        color: '#FF0000',
        fontSize: 15,
        marginTop:8
    }

    //------- Components Styles -----------
})