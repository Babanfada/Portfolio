import { Avatar } from "@mui/material";

const Navigation = ({ icon }) => {
  return (
    <div>
      <Avatar
        variant="square"
        sx={{ width: "50px", height: "50px" }}
        style={{
          padding: "7px",
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.109)",
        }}
      >
        {icon.icon}
      </Avatar>
    </div>
  );
};

export default Navigation;
