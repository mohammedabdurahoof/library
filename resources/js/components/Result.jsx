import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Img from "../../../public/images/img.jpg";

export default function MediaControlCard({ book }) {
    const theme = useTheme();

    return (
        <div className="mt-3">
            <Card sx={{ display: "flex" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 210 }}
                    image={Img}
                    alt="img"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            {book.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            {book.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Barcode : </b>
                            {book.barcode} <br />
                            <b>Call Number : </b>
                            {book.itemcallnumber} <br />
                            <b>Publisher : </b>
                            {book.publisher} <br />
                            <b>language : </b>
                            {book.type} <br />
                            <b>Pages : </b>
                            {book.pages} <br />
                            <b>Date Accessioned : </b>
                            {book.dateaccessioned} <br />
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
}
