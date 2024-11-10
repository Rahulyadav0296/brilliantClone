import CalculateIcon from "@mui/icons-material/Calculate";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MemoryIcon from "@mui/icons-material/Memory";
import TerminalIcon from "@mui/icons-material/Terminal";
import IconItems from "../IconItems/IconItems";

const items = [
  { id: 1, Icon: CalculateIcon, label: "Math", color: "black" },
  { id: 2, Icon: LeaderboardIcon, label: "Data Analysis", color: "red" },
  { id: 3, Icon: MemoryIcon, label: "Computer Science", color: "blue" },
  { id: 4, Icon: TerminalIcon, label: "Programming & AI", color: "green" },
  {
    id: 5,
    Icon: EngineeringIcon,
    label: "Science & Engineering",
    color: "orange",
  },
];

function BrilliantCategory() {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-3">
      {/* Math, Data Analysis, Computer science, Programming & AI, Science & Engineering */}
      {items.map((item) => (
        <div key={item.id}>
          <IconItems Icon={item.Icon} label={item.label} color={item.color} />
        </div>
      ))}
    </div>
  );
}

export default BrilliantCategory;
