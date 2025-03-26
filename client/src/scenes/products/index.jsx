import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetProductsQuery } from "../../state/api.js";
import { useState } from "react";
import PropTypes from "prop-types";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold" }}
          color={theme.palette.primary[500]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          color={theme.palette.primary[700]}
        >
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[500]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2" color={theme.palette.neutral[400]}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{
            backgroundColor: theme.palette.primary[500],
            color: theme.palette.background.default,
            "&:hover": { backgroundColor: theme.palette.primary[400] },
          }}
        >
          See more
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
          backgroundColor: theme.palette.background.default,
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply left: {supply}</Typography>
          <Typography>Yearly sales: {stat.yearlySalesTotal}</Typography>
          <Typography>
            Yearly units sold this year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  supply: PropTypes.number.isRequired,
  stat: PropTypes.shape({
    yearlySalesTotal: PropTypes.number.isRequired,
    yearlyTotalSoldUnits: PropTypes.number.isRequired,
  }).isRequired,
};

const Products = () => {
  const { data } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  return (
    <Box
      m={"1.5rem 2.5rem"}
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header title="PRODUCTS" subtitle="See your list of products" />
      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
        >
          {data.map((product) => (
            <Product
              key={product._id}
              _id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              category={product.category}
              supply={product.supply}
              stat={product.stat}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
