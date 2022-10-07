import { Fab } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export function ActionButton() {

  return (
    <Fab
      size="large"
      color="info"
      className="bg-secondary fixed bottom-10 right-5"
    >
      <ThumbUpOffAltIcon
      fontSize="medium"
      className=""
      />
    </Fab>
  )
}
