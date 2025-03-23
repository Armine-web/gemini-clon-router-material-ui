import { useSelector, useDispatch } from "react-redux";
import { addRecentSearch } from "../../redux/chat-actions";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";

import ExploreIcon from "@mui/icons-material/Explore";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";

import { PromptCard } from "../../components/card";

import { setInput, onSent } from "../../redux/chat-actions";

import "./chat.css"

const prompts = [
  {
    id: 1,
    text: "Suggest beautiful places to see on an upcoming road trip",
    icon: <ExploreIcon />,
  },
  {
    id: 2,
    text: "Briefly summarize this concept: urban planning",
    icon: <LightbulbIcon />,
  },
  {
    id: 3,
    text: "Brainstorm team bonding activities for our work retreat",
    icon: <ChatIcon />,
  },
  {
    id: 4,
    text: "Tell me help React js and React native",
    icon: <CodeIcon />,
  },
];

export const Chat = () => {
  const dispatch = useDispatch();
  const { input, loading, showResult, resultData } = useSelector(
    (state) => state.chatReducer
  );

  const handleSelectPrompt = (text) => {
    dispatch(setInput(text));
  };

  const handleSubmit = () => {
    dispatch(onSent());
    if (input.trim()) {
      dispatch(addRecentSearch(input));
    }
  };

  const handleChange = (event) => {
    dispatch(setInput(event.target.value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "80%",
        margin: "0 auto",

      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        {!showResult ? (
          <>
                  
            <Typography variant="h4"    sx={{
              backgroundImage: 'linear-gradient(to right,rgb(95, 191, 255),rgb(254, 138, 123))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              fontSize: '4.5rem',
              display: 'inline', 
            }}>
              Hello, Dev
            </Typography>
            <Typography variant="h5" sx={{ mb: 6, color: "gray", fontSize: '2.5rem'}}>
              How can I help you today?
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 200px)",
                justifyContent: "center", 
                gap: "20px",
              }}
            >
              {prompts.map(({ text, icon, id }) => (
                <PromptCard
                  key={id}
                  text={text}
                  icon={icon}
                  onSelect={handleSelectPrompt}
                />
              ))}
            </Box>
          </>
        ) : (
          <Box sx={{ maxHeight: "70vh", overflowY: "auto" }}>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Here's what I found:
                </Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                />
              </>
            )}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f0f4f9",
            borderRadius: 50,
            p: 1,
          }}
        >
          <TextField
            fullWidth
            multiline
            variant="outlined"
            placeholder="Enter a prompt here"
            onChange={handleChange}
            value={input}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
            sx={{
              border: "none",
              outline: "none",
              "& .MuiOutlinedInput-root": {
                border: "none", 
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", 
              },
              paddingInline: 2, 
            }}
          />
          <IconButton onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};