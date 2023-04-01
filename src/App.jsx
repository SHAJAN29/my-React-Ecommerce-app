import { useState, createContext, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  const [cardDetails, setCardDetails] = useState([
    {
      title: "Fancy Product",
      star: "",
      orginalPrice: "$40",
      discountPrice: "$80",
      btnValue: "View option",
      sale: "",
    },
    {
      title: "Special Item",
      star: "5",
      orginalPrice: "$20",
      discountPrice: "$18",
      btnValue: "Add to cart",
      sale: "sale",
    },
    {
      title: "Special Item",
      star: "",
      orginalPrice: "$50",
      discountPrice: "$25",
      btnValue: "Add to cart",
      sale: "sale",
    },
    {
      title: "Popular Item",
      star: "5",
      discountPrice: "$40",
      btnValue: "Add to cart",
      sale: "sale",
    },
    {
      title: "Special Item",
      star: "",
      orginalPrice: "$50",
      discountPrice: "$18",
      btnValue: "Add to cart",
      sale: "sale",
    },
    {
      title: "Fancy Product",
      star: "",
      orginalPrice: "$120",
      discountPrice: "$280",
      btnValue: "View option",
      sale: "s",
    },
    {
      title: "Special Item",
      star: "5",
      orginalPrice: "$20",
      discountPrice: "$18",
      btnValue: "Add to cart",
      sale: "sale",
    },

    {
      title: "Popular Item",
      star: "5",
      discountPrice: "$40",
      btnValue: "Add to cart",
      sale: "",
    },
  ]);

  const [cart, setCart] = useState(0);
  const cartAdd = (show) => {
    setCart(cart + 1);
  };

  return (
    <div className="App">
      <nav className="nav">
        <button
          onClick={() => {
            setCart(cart === 0);
            location.reload();
          }}
          className="btn"
        >
          <Typography sx={{ paddingRight: "5px" }} variant="h6">
            Cart
          </Typography>
          <ShoppingCartIcon sx={{ fontSize: "18px" }} />
          <Typography
            sx={{
              borderRadius: "10px",
              paddingX: "3px",

              backgroundColor: "black",
              color: "#fff",
            }}
            variant="h6"
          >
            {cart}
          </Typography>
        </button>
      </nav>

      <div className="carda">
        <h1>Shop in style</h1>
        <h4>With this shop homepage template</h4>
      </div>

      {cardDetails.map((ele, index) => (
        <Cardss cartAdd={cartAdd} key={index} index={index} card={ele} />
      ))}
    </div>
  );
}

export default App;

function Cardss({ cartAdd, card, index }) {
  return (
    <Box sx={{ margin: "0 3em" }}>
      <SubCards cartAdd={cartAdd} card={card} index={index} />
    </Box>
  );
}

function SubCards({ cartAdd, card, index }) {
  const { title, btnValue, sale, discountPrice, orginalPrice, star } = card;

  const [show, setShow] = useState(true);

  const addToCart = (btnValue) => {
    if (btnValue === "Add to cart") {
      setShow(!show);
      cartAdd();
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "400px",
        maxWidth: 400,
        margin: 10,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dee1e6",
          height: "250px",
          width: "100%",
        }}
      >
        <Typography sx={{ fontWeight: "300", opacity: "0.5" }} variant="h3">
          {" "}
          450×300
        </Typography>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {star === "" ? null : <Rating name="read-only" value={star} readOnly />}
        <Typography className="price" variant="body2" color="text.secondary">
          <span> {orginalPrice} </span> {discountPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <button
          onClick={() => {
            show ? addToCart(btnValue) : null;
          }}
          className={show ? "btn" : "disable"}
        >
          {show ? btnValue : "disable"}
        </button>
      </CardActions>
    </Card>
  );
}
