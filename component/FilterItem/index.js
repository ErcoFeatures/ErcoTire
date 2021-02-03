import React from 'react';
import {Text, View} from "react-native";
import {ListItem} from"react-native-elements"
import data from "../../cars";
import {styles} from './style'
const FilterItem = ({id, name, doFilter}) => {

    const count = data.filter(tire => tire.status ===id).length;
    return (
        <ListItem  key={id}  bottomDivider onPress={() => doFilter (id, name)}>
            <ListItem.Content>
                <ListItem.Title >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.count}>{` ( ${count} ) `}</Text>
                </ListItem.Title>
            </ListItem.Content>

        </ListItem>
    );
};

export default FilterItem;