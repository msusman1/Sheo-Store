import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {Link} from "react-router-dom";
import '../App.css'
import {getShoeByCategory} from '../data/ShoeData.js'
import {isWidthUp} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth/withWidth";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles({
    root: {
        marginTop: 40,
    }


});


  function ShoeList(props) {

    const classes = useStyles();
    const  shoes=getShoeByCategory(props.category);

    const getGridListCols = () => {
        // xs' | 'sm' | 'md' | 'lg' | 'xl
        if (isWidthUp('xl', props.width)) {
            return 5;
        }

        if (isWidthUp('lg', props.width)) {
            return 4;
        }

        if (isWidthUp('md', props.width)) {
            return 3;
        }
        if (isWidthUp('sm', props.width)) {
            return 2;
        }
        if (isWidthUp('xs', props.width)) {
            return 1;
        }

        return 1;
    };
    return (

        <div className={classes.root} >
            <Typography variant={"h2"}>{props.category}</Typography>
            <hr/>
            <br/>
            <GridList   cellHeight={180} cols={getGridListCols()} >
                {
                    shoes.map((item) => (
                        <GridListTile key={item.shoeId} component={Link} to={`product/${item.shoeId}`}>
                            <img src={item.image} alt={item.title}   />
                            <GridListTileBar
                                title={item.title}
                                subtitle={<span>Price: {item.price}</span>}
                            />
                        </GridListTile>

                    ))
                }

            </GridList>
        </div>
    )
}

export default withWidth()(ShoeList);


















