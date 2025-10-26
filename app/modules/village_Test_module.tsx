import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Tile from './tile';
import { predefinedMap } from '../static/predefinedMap';
import { tileMapping } from '../static/tileMapping';
import { ScrollView } from 'react-native-gesture-handler';

const tileSet = require('../assets/tiles.png');
const GRID_SIZE = 8;
const TILE_SIZE = 40;

const images = {
  house: require('../assets/building1_blue.png'),
  farm: require('../assets/tiles.png'),
};

const VillageGame = () => {
  const [grid, setGrid] = useState(
    predefinedMap.map(row =>
      row.map(tile => ({
        terrain: tile,
        building: null,
      }))
    )
  );

  const [selectedBuilding, setSelectedBuilding] = useState('house');

  const placeBuilding = (row, col) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(r => r.map(cell => ({ ...cell })));
      if (!newGrid[row][col].building) {
        newGrid[row][col].building = selectedBuilding;
      }
      return newGrid;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Village Builder</Text>

      {/* {Object.keys(tileMapping).map((key, index) => (
        <View key={index} style={styles.buildMenu}>
          <TouchableOpacity
            onPress={() => setSelectedBuilding(key)}
            style={styles.menuButton}
          >
            <Text>{key}</Text>
          </TouchableOpacity>
        </View>
      ))} */}


      <View style={styles.buildMenu}>
        <TouchableOpacity
          onPress={() => setSelectedBuilding('house')}
          style={styles.menuButton}
        >
          <Text>house</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedBuilding('farm')}
          style={styles.menuButton}
        >
          <Text>farm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => {
              const terrainTile = tileMapping[cell.terrain];
              return (
                <TouchableOpacity
                  key={colIndex}
                  onPress={() => placeBuilding(rowIndex, colIndex)}
                  style={styles.tileWrapper}
                >
                  <Tile
                    row={terrainTile[1]}
                    col={terrainTile[0]}
                    tileSet={tileSet}
                  />
                  {cell.building && (
                    <Tile
                    row={terrainTile[1]}
                    col={terrainTile[0]}
                    tileSet={tileSet}
                  />
                    // <Image
                    //   source={terrainTile[cell.building]}
                    //   style={styles.building}
                    //   resizeMode="contain"
                    // />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#429058',
    // backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  buildMenu: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  menuButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  grid: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  tileWrapper: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  building: {
    position: 'absolute',
    width: TILE_SIZE * 0.9,
    height: TILE_SIZE * 0.9,
    zIndex: 1,
  },
});

export default VillageGame;
