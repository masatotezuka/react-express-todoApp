import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";

export const BasicDatePicker = ({ date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="期限日"
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => (
          <TextField {...params} className="date-button" />
        )}
      />
    </LocalizationProvider>
  );
};
