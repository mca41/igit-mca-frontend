import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "../page.module.css";
import AddIcon from '@mui/icons-material/Add';
import BasicModal from "../components/CreateBatchModal"

export default function ActionAreaCard(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Card
      className={styles.card_item}
      sx={{ minWidth: 280, maxWidth: 345, minHeight: 200 }}
    >
      <CardActionArea>
        <CardMedia
          className={styles.card_item_media}
          component="img"
          height="200"
        //   image="/static/images/cards/contemplative-reptile.jpg"
        //   alt="green iguana"
        />
        {props.cardType === "batch" ? (
            <CardContent className={styles.card_item_content}>
              <Typography gutterBottom variant="h5" component="div">
                42
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Satya hshhsh
              </Typography>
            </CardContent>
        ) : (
            <CardContent onClick={handleOpen} className={`${styles.card_item_content} ${styles.create_new_batch_card_item_content}`}>
              {/* <Typography variant="body2" color="text.secondary">
                hello
              </Typography> */}
              <div className={styles.icon_container} >
               <AddIcon className={styles.add_new_batch_icon} />
              </div>
              <Typography style={{fontSize:"14px", color:"grey"}} gutterBottom variant="h6" component="div">
                Create new batch
              </Typography>
            </CardContent>
        )}
      </CardActionArea>
        <BasicModal open={open} handleClose={handleClose} />
    </Card>
  );
}