// GridComponent.tsx
import React from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native';
import styles from './style';
interface GridComponentProps { }

const gridData = () => {
    const data: string[][] = [];
    for (let i = 0; i < 20; i++) {
        const row: string[] = [];
        for (let j = 0; j < 20; j++) {
            row.push(`${i}-${j}`);
        }
        data.push(row);
    }
    return data;
};

const GridComponent: React.FC<GridComponentProps> = () => {
    return (
        <View>
            {gridData().map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, cellIndex) => (
                        <View key={cellIndex} style={styles.cell}>
                            <Text style={{ fontSize: 10 }}>{cell}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );

};



export default GridComponent;
