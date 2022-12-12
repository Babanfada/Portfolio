import { Avatar } from "@mui/material";
import { dataContext } from "./Layout";
import { useContext } from "react";
import { css } from "glamor";
import { Badge } from "@mui/material";

const Navigations = ({ icon }) => {
  // const { icons, badge, setbadge } = useContext(dataContext);
  // const [Menu, Home, light, dark, person, business, contact, close] = icons;

  // const activeStyle = css({
  //   content: '"|"',
  //   backgroundColor: "yellow",
  // });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "1vw",
        // border: "1px solid red",
        height: "50px",
        cursor: "pointer",
      }}
      className={css({
        ":hover": { color: icon.color },
        ":active": { color: "blue" },
      })}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        // className={css({
        //   ":after": activeStyle,
        // })}
      >
        <Avatar
          // className={css({
          //   ":hover": { color: "yellow" },
          // })}

          sx={{ width: "50px", height: "50px" }}
          variant="square"
          style={{
            padding: "7px",
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 255, 0.109)",
            // border: "1px solid red",
            // borderTopRightRadius: icon.style,
            // borderTopLeftRadius: icon.style,

            // borderBottomRightRadius: icon.style1,
            // borderBottomLeftRadius: icon.style1,
          }}
        >
          <div>
            {/* <Badge badgeContent={`${badge ? 1 : 0}`} color="secondary"> */}
              {icon.icon}
            {/* </Badge> */}
          </div>
        </Avatar>
      </div>

      <div
        style={{
          // border: "1px solid red",
          padding: "0.89vw 0",
          width: "70px",
          fontSize: "12px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {icon.name}
      </div>
    </div>
  );
};

export default Navigations;
