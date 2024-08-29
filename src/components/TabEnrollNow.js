// import { Tab, Text, TabView, Button } from '@rneui/themed';
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon, List, Checkbox, IconButton } from 'react-native-paper';
import { CourseCardComponent } from '../screens/CoursesScreen';
import { Tab, Text, TabView, Button } from 'react-native-elements';
const TabEnrollNow = () => {

    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={{ backgroundColor: "#D7EEFD", marginVertical: 20 }}>
            <View>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: '#00A2FE',
                        height: 3,
                    }}
                    variant='default'
                >
                    <Tab.Item
                        title="Content"
                        titleStyle={{ fontSize: 15, color: index == 0 ? '#0E2254' : '#6476A7' }}
                        buttonStyle={{backgroundColor:"#fff" }}
                    />
                    <Tab.Item
                        title="Overview"
                        titleStyle={{ fontSize: 15, color: index == 1 ? '#0E2254' : '#6476A7' }}
                        buttonStyle={{backgroundColor:"#fff" }}
                    />
                </Tab>
            </View>
            {index == 0 && (
                <ScrollView>
                    <View style={{ backgroundColor: "#D7EEFD", }}>
                        <View style={{ marginVertical: 5, paddingHorizontal: 20, backgroundColor: "#D7EEFD" }}>
                            <List.Section>
                                <List.Accordion
                                    title="Section 1 : Part 1"
                                    expanded={expanded}
                                    titleStyle={{ color: "#0E2254" }}
                                    descriptionStyle={{ color: "#7A7B93" }}
                                    onPress={handlePress}>
                                    <List.Item
                                        title="Introduction"
                                        titleStyle={{ color: "#0E2254" }}
                                        style={{ backgroundColor: '#fff' }}
                                        right={() => <Icon
                                            color='#0E2254'
                                            source='play-circle-outline'
                                            size={15} />}
                                    />
                                    <List.Item
                                        titleStyle={{ color: "#0E2254" }}
                                        title="Introduction BIM"
                                        style={{ backgroundColor: '#fff' }}
                                        right={() => <Icon
                                            color='#0E2254'
                                            source='play-circle-outline'
                                            size={15} />}
                                    />
                                    <List.Item
                                        titleStyle={{ color: "#0E2254" }}
                                        title="Working in many views"
                                        style={{ backgroundColor: '#fff' }}
                                        right={() => <Icon
                                            color='#0E2254'
                                            source='play-circle-outline'
                                            size={15}
                                        />}
                                    />
                                    <List.Item
                                        titleStyle={{ color: "#0E2254" }}
                                        title="Recent file and revit application menu"
                                        style={{ backgroundColor: '#fff' }}
                                        right={() => <Icon
                                            color='#0E2254'
                                            source='play-circle-outline'
                                            size={15} />}
                                    />
                                    <List.Item
                                        titleStyle={{ color: "#0E2254" }}
                                        title="Ribbon & Quick Access"
                                        style={{ backgroundColor: '#fff' }}
                                        right={() => <Icon
                                            color='#0E2254'
                                            source='play-circle-outline'
                                            size={15} />}
                                    />
                                    <List.Item
                                        titleStyle={{ color: "#0E2254" }}
                                        style={{ backgroundColor: '#fff' }}
                                        title="Context ribbion"
                                    />
                                    <List.Item
                                        titleStyle={{ color: "#0E2254" }}
                                        style={{ backgroundColor: '#fff' }}
                                        title="Using the properties pannel"
                                    />
                                </List.Accordion>
                            </List.Section>
                            <List.Accordion
                                title="Section 2 : Part 2"
                                titleStyle={{ color: "#0E2254" }}
                                descriptionStyle={{ color: "#7A7B93" }}
                                expanded={expanded}
                                onPress={handlePress}>
                            </List.Accordion>
                        </View>
                    </View>
                </ScrollView>
            )}
            {index == 1 && (
                <View style={{ backgroundColor: "#D7EEFD" }}>
                    <View style={{ padding: 25, }} key={index}>
                        <Text style={{ color: '#0E2254', fontSize: 15, fontWeight: '600', }}>
                            This course, recorded entirely in metric units, teaches you the techniques you need to complete architectural projects in Revit 2020. First, get comfortable with the Revit environment, and learn to set up a project and add the grids, levels, and dimensions that will anchor your design. Then you dive into modeling: adding walls, doors, and windows; creating and mirroring groups; linking to DWG files; and working with floors, roofs, and ceilings. It also includes advanced techniques for modeling stairs and complex walls, adding rooms, and creating schedules. Finally, discover how to annotate your drawing so all the components are perfectly understood, and learn how to output sheets to PDF and AutoCAD.
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ marginHorizontal: 10, fontWeight: "900", color: "#0E2254" }}>Topics Include</Text>
                        <View style={{ marginHorizontal: 40, marginVertical: 5, gap: 5 }}>
                            <Text style={{ color: "#0E2254" }}>Understanding BIM and the Revit element hierarchy</Text>
                            <Text style={{ color: "#0E2254" }}>Navigating views</Text>
                            <Text style={{ color: "#0E2254" }}>Creating a new project from a template</Text>
                            <Text style={{ color: "#0E2254" }}>Adding walls, doors, and windows</Text>
                            <Text style={{ color: "#0E2254" }}>Adding plumbing fixtures and other components</Text>
                            <Text style={{ color: "#0E2254" }}>Linking AutoCAD DWG files</Text>
                            <Text style={{ color: "#0E2254" }}>Rotating and aligning Revit links</Text>
                            <Text style={{ color: "#0E2254" }}>Working with footprint and extrusion roofs</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ marginHorizontal: 10, fontWeight: "900", color: "#0E2254" }}>Revit Essentials Tutorial Index</Text>
                        <View style={{ marginHorizontal: 40, marginVertical: 5, gap: 5, color: "#0E2254" }}>
                            <Text style={{ color: "#0E2254" }}>INTRODUCTION</Text>
                            <Text style={{ color: "#0E2254" }}>CORE CONCEPT</Text>
                            <Text style={{ color: "#0E2254" }}>GETTING COMFORTABLE WITH THE REVIT ENVIRONMENT</Text>
                            <Text style={{ color: "#0E2254" }}>STARTING A PROJECT</Text>
                            <Text style={{ color: "#0E2254" }}>MODELING BASICS</Text>
                            <Text style={{ color: "#0E2254" }}>LINKS, IMPORTS, AND GROUPS</Text>
                            <Text style={{ color: "#0E2254" }}>SKETCH BASED MODELING COMPONENTS</Text>
                            <Text style={{ color: "#0E2254" }}>STAIRS</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ marginHorizontal: 10, fontWeight: "900", color: "#0E2254" }}>Show more</Text>
                    </View>
                    <View style={{ padding: 10, backgroundColor: "#fff", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: "900", color: "#0E2254" }}>Popular Courses</Text>
                    </View>

                    <View style={styles.cardsContainer}>
                        <CourseCardComponent />
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
        padding: 0,
        margin: 0,
        left: 5,
        backgroundColor: "#fff"
    },
})


export default TabEnrollNow;