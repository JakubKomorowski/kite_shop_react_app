import React, { useContext } from "react";
import FilterByFreeDelivery from "./filters/FilterByFreeDelivery";
import FilterByName from "./filters/FilterByName";
import FilterProductsByPrice from "./filters/FilterProductsByPrice";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import {
  StyledDrawerWrapper,
  FilterMenuWrapper,
} from "./styledComponents/StyledFilterDrawer";
import ShopContext from "../context";
import { IconContext } from "react-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FilterCategoryMenu = () => {
  const classes = useStyles();

  const value = useContext(ShopContext);
  const {
    windowSize,
    handleFilterDrawerOpen,
    filterDrawerOpen,
    handleFilterDrawerClose,
  } = value;

  const styleArrow = {
    position: "absolute",
    left: "250px",
    top: "10px",
    cursor: "pointer",
  };
  const styleFilter = {
    cursor: "pointer",
    marginLeft: "30px",
  };
  return (
    <>
      {windowSize ? (
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<IoMdArrowDropdown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.body}>Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FilterByName />
                <FilterProductsByPrice />
                <FilterByFreeDelivery />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#24252a",
            }}
          >
            <BsFilter style={styleFilter} onClick={handleFilterDrawerOpen} />
            <StyledDrawerWrapper open={filterDrawerOpen}>
              <IoMdArrowDropleft
                style={styleArrow}
                onClick={handleFilterDrawerClose}
              />
              <FilterMenuWrapper>
                <FilterByName />
                <FilterProductsByPrice />
                <FilterByFreeDelivery />
              </FilterMenuWrapper>
            </StyledDrawerWrapper>
          </IconContext.Provider>
        </>
      )}
    </>
  );
};

export default FilterCategoryMenu;

// import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
// // import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import FilterMenu from "./FilterMenu";
// import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
// import { BsFilter } from "react-icons/bs";
// import {
//   StyledDrawerWrapper,
//   FilterMenuWrapper,
//   Wrapper,
// } from "./styledComponents/StyledFilterDrawer";
// import ShopContext from "../context";
// import { IconContext } from "react-icons";

// // MdExpandMore,
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "300px",
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// const FilterDrawer = () => {
//   const classes = useStyles();

//   const value = useContext(ShopContext);
//   const { windowSize, handleFilterDrawerOpen, filterDrawerOpen } = value;

//   const styleArrow = {
//     position: "absolute",
//     left: "250px",
//     top: "10px",
//     cursor: "pointer",
//   };
//   const styleFilter = {
//     cursor: "pointer",
//     marginLeft: "30px",
//   };

//   return (
//     <>
//       {windowSize ? (
//         <div className={classes.root}>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<IoMdArrowDropdown />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography className={classes.body}>Filters</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 <FilterMenu />
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//       ) : (
//         <>
//           <IconContext.Provider
//             value={{
//               size: "30px",
//               color: "#24252a",
//             }}
//           >
//             <BsFilter style={styleFilter} onClick={handleFilterDrawerOpen} />
//             <StyledDrawerWrapper open={filterDrawerOpen}>
//               <IoMdArrowDropleft
//                 style={styleArrow}
//                 onClick={handleFilterDrawerOpen}
//               />
//               <FilterMenuWrapper>
//                 <FilterMenu />
//               </FilterMenuWrapper>
//             </StyledDrawerWrapper>
//           </IconContext.Provider>
//         </>
//       )}
//     </>
//   );
// };

// export default FilterDrawer;
