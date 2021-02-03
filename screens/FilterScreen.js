import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from "react-native";
import FilterItem from "../component/FilterItem";
const FilterScreen = ({navigation}) => {
    const filters = [
        {
            id: "new",
            name: "new"
        },
        {
            name: "used",
            id: "used",
        }
    ];
    const doFilter = (id, name) => {
        navigation.navigate("Home", {
            id,
            name
        })
    };

    return (
        <SafeAreaView>

            <ScrollView style={styles.container}>
                {
                    filters.map(filter =>
                        <FilterItem key={filter.id}
                                    {...filter}
                                    doFilter={doFilter}
                        />
                    )
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})
