import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Img from "../../../public/images/img.jpg";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({ book }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 mt-5 d-flex justify-content-center">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader title={book.title} subheader={book.author} />
                <CardMedia component="img" height="194" image={Img} alt="img" />
                <CardContent>
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
            </Card>
        </div>
    );
}
