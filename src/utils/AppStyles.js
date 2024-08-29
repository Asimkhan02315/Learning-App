/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";

export const AppStyles = {
    color: {
        main: "#5ea23a",
        text: "#696969",
        title: "#464646",
        subtitle: "#545454",
        categoryTitle: "#161616",
        primaryColor: '#f0443c',
        // tint: "#ff5a66",
        tint: "#0E2254",
        secondaryColor: '#201f2b',
        error: "#ff0000",
        description: "#bbbbbb",
        filterTitle: "#8a8a8a",
        starRating: "#2bdf85",
        location: "#a9a9a9",
        // white: "#fff",
        logTextbtn: "#fff",
        white: "#0E2254",
        black: '#000',
        facebook: "#4267b2",
        grey: "grey",
        greenBlue: "#00aea8",
        placeholder: "#a0a0a0",
        background: "#f2f2f2",
        blue: "#3293fe"
    },
    fontSize: {
        title: 30,
        content: 20,
        normal: 16
    },
    buttonWidth: {
        main: "70%"
    },
    textInputWidth: {
        main: "80%",
        full: "100%"
    },
    borderRadius: {
        main: 25,
        small: 5
    }
};

export const AppIcon = {
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 8,
        marginRight: 10
    },
    style: {
        tintColor: AppStyles.color.tint,
        width: 25,
        height: 25
    },
    images: {
        logo: require("../assests/icons/profile.jpg"),
        logoRibbons: require("../assests/icons/ribbons.png"),
        crownLogo: require("../assests/icons/crown.png"),
        rectangleLogo: require("../assests/icons/rectangle.png"),
        downloadLogo: require("../assests/icons/downloadLogo.png"),
        timeLogo: require("../assests/icons/timeLogo.png"),
        clockLogo: require("../assests/icons/clockLogo.png"),
        arrowLogo: require("../assests/icons/arrowLogo.png"),
        editLogo: require("../assests/icons/editLogo.png"),
        editIcon: require("../assests/icons/editIcon.png"),
        lens: require("../assests/icons/lens.png"),
        folder: require("../assests/icons/folder.png"),
        photoGallery: require("../assests/icons/photoGallery.png"),
        empty1: require("../assests/icons/empty1.png"),
        empty2: require("../assests/icons/empty2.png"),
        empty3: require("../assests/icons/empty3.png"),
        empty4: require("../assests/icons/empty4.png"),
        imageAssign: require("../assests/icons/imageAssign.png"),
        imageAssign1: require("../assests/icons/imageAssign1.png"),
        image2: require("../assests/icons/image2.png"),
    }
};

export const HeaderButtonStyle = StyleSheet.create({
    multi: {
        flexDirection: "row"
    },
    container: {
        padding: 10
    },
    image: {
        justifyContent: "center",
        width: 35,
        height: 35,
        margin: 6
    },
    rightButton: {
        color: AppStyles.color.tint,
        marginRight: 10,
        fontWeight: "normal",
    }
});

export const ListStyle = StyleSheet.create({
    title: {
        fontSize: 16,
        color: AppStyles.color.subtitle,
        fontWeight: "bold"
    },
    subtitleView: {
        minHeight: 55,
        flexDirection: "row",
        paddingTop: 5,
        marginLeft: 10
    },
    leftSubtitle: {
        flex: 2
    },
    avatarStyle: {
        height: 80,
        width: 80
    }
});
