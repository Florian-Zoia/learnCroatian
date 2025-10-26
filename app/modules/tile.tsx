// components/Tile.js
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const TILE_RENDER_SIZE = 40; // Größe auf dem Bildschirm
const TILE_COLUMNS = 10;
const TILE_ROWS = 5;

const TILESET_WIDTH = 208; // Breite der PNG-Datei in px
const TILESET_HEIGHT = 112; // Höhe der PNG-Datei in px

const TILE_WIDTH = TILESET_WIDTH / TILE_COLUMNS; // 208 / 10 = 20.8
const TILE_HEIGHT = TILESET_HEIGHT / TILE_ROWS;  // 112 / 5 = 22.4

const Tile = ({ row, col, tileSet }) => {
  const scaleX = TILE_RENDER_SIZE / TILE_WIDTH;
  const scaleY = TILE_RENDER_SIZE / TILE_HEIGHT;

  return (
    <View style={styles.tileContainer}>
      <Image
        source={tileSet}
        style={{
          position: 'absolute',
          width: TILESET_WIDTH * scaleX,
          height: TILESET_HEIGHT * scaleY,
          left: -col * TILE_RENDER_SIZE,
          top: -row * TILE_RENDER_SIZE,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    width: TILE_RENDER_SIZE,
    height: TILE_RENDER_SIZE,
    overflow: 'hidden',
  },
});

export default Tile;
