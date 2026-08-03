import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function VerifyCode({ onVerify }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const refs = useRef([]);

  const handleChange = (i, val) => {
    val = val.replace(/[^0-9]/g, "").slice(-1);
    setDigits((d) => d.map((c, idx) => (idx === i ? val : c)));
    if (val && i < 3) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 7, mt: 5, mb: 5 }}>
      <Box sx={{ width: "100%", maxWidth: 400, textAlign: "center", px: 3 }}>
        <Typography
          component='h2'
          variant="h3"
          color="info"
          sx={{
            fontWeight: 800,
            mb: 2,
          }}
        >
          Verify Code
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 4 }}>
          Enter the 4-Digit sent to your Email
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          {digits.map((digit, i) => (
            <TextField
              key={i}
              inputRef={(el) => (refs.current[i] = el)}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
               sx={{
                  textAlign:"center",justifyContent:'center', fontSize: 22, fontWeight: 600, height: 56, width: 56, borderRadius: "15px",
                  "&.Mui-focused fieldset": { borderColor: "info" },
                }
               }
              inputProps={{
                maxLength: 1,
              }}
            />
          ))}
        </Box>

        <Button
          fullWidth
          onClick={() => onVerify?.(digits.join(""))}
          variant="contained"
          color="info"
          sx={{
            py: 1.7,
            borderRadius: "10px",
            fontWeight: 700,
            color: "#fff",
            "&:hover": { background: "info.dark" },
          }}
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
}
