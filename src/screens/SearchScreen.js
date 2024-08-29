import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, ScrollView, } from 'react-native';
import { Button, Searchbar, List, Portal, Icon } from 'react-native-paper';
import { CourseCardComponent } from './CoursesScreen';

const SearchScreen = ({ setSearchEnable }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchFocus, setSearchFocus] = useState(false)

    const buttons = ['python', 'java', 'javascript', 'c#', 'react', 'wordpress', 'php', 'excel', 'photoshop', 'illustrator']
    const listData = ['Software Development', 'Marketing', 'Office Productivity', 'Data Analysis & Data Science', 'AI and Machine Learning', 'Personal Development', 'Business', 'Academics', 'Lifestyle, Hobbies & DIY', 'IT, Engineering and Technology', 'Design']

    const onBackClick = () => {
        setSearchEnable(false)
    }

    useEffect(() => {
        if (searchQuery?.length > 5) {
            setSearchData([...Array(8)])
            setSearchFocus(false)
        } else {
            setSearchData([])
        }
    }, [searchQuery])

    return (
        <Portal>
            <ScrollView backgroundColor={searchFocus ? "#ccc" : '#fff'}>
                <View style={styles.container}>
                    <View style={{ marginVertical: 10, marginBottom: 30 }}>
                        <Searchbar
                            placeholder="Search for courses"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            onFocus={() => { setSearchFocus(true) }}
                            onBlur={() => { setSearchFocus(false) }}
                            onIconPress={onBackClick}
                            icon='arrow-left-thin'
                            style={styles.searchInput}
                        />
                    </View>
                    {
                        searchData?.length !== 0 && (
                            <>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={[styles.titles, { fontSize: 20 }]}> Search result for "{searchQuery}" </Text>
                                    <Button
                                        title='Sort By'
                                        mode="outlined"
                                        textColor='#000'
                                        onPress={(value) => {
                                            console.log('click here ')
                                        }}
                                        style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#B3C5CC', borderRadius: 9, }}
                                    >Sort By
                                        {' '}
                                        <Icon
                                            source="sort"
                                            size={23}
                                        />
                                    </Button>
                                    <View style={styles.cardsContainer}>
                                        <CourseCardComponent styleCard={{ opacity: searchFocus ? 0.5 : 1 }} />
                                    </View>
                                </View>
                            </>
                        )
                    }
                    {
                        searchData?.length == 0 && (
                            <>
                                <View style={{ marginBottom: 5 }}>
                                    <Text style={styles.titles}>Top Searches</Text>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 5, gap: 10, marginVertical: 10 }}>
                                        {buttons.map((item, index) => {
                                            return (
                                                <Button
                                                    title={item}
                                                    mode="outlined"
                                                    textColor='#000'
                                                    key={index}
                                                    onPress={(value) => {
                                                        console.log('click here ')
                                                    }}
                                                    style={{ flexDirection: 'column', borderColor: '#B3C5CC', borderRadius: 0 }}
                                                >{item}</Button>
                                            )
                                        })}
                                    </View>
                                </View>
                                <View>
                                    <List.Section style={styles.subTitleView}>
                                        <List.Subheader style={styles.titles}>Browse Categories</List.Subheader>
                                        {listData && listData.map((item, index) => {
                                            return (
                                                <List.Item style={styles.subTitle} title={item} key={index} />
                                            )
                                        })}
                                    </List.Section>
                                </View>
                            </>
                        )
                    }
                </View>
            </ScrollView>
        </Portal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        marginBottom: 16,
    },
    searchInput: {
        fontSize: 14,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    titles: {
        color: '#0E2254',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 22,
        marginBottom: 10
    },
    subTitle: {
        color: '#0E2254',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 19,
    },
    subTitleView: {
        paddingVertical: 15,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 20
    },
});

export default SearchScreen;
