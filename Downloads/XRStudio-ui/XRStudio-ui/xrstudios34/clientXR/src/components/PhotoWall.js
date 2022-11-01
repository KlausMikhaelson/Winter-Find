import React from 'react';
import Grid from '@material-ui/core/Grid';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
    borderRadius: 5,
    backgroundColor: '#202020',
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      minWidth: 300,
    },
  },
  media: {
    height: 220,
  },
  content: {
    minHeight: 60,
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: '10px !important',
  },
  grid1: {
    display: 'flex',
  },
  grid2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typo: {
    fontSize: '30px',
    marginBottom: '10px',
  },
  item2: {
    display: 'flex',
    alignItems: 'center',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '30px',
    height: '30px',
  },
  likes: {
    marginLeft: '10px',
  },
}));

function PhotoWall(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent className={classes.content} padding={0}>
          <p className={classes.typo}>{props.name}</p>
          <div className={classes.grid2}>
            <div className={classes.user}>
              <p>{props.username}</p>
            </div>

            <div className={classes.item2}>
              {/* <FavoriteBorderIcon /> */}
              <p className={classes.likes}>{props.likes} likes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default PhotoWall;
