import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const PaymentMethod = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="case-on delivery" control={<Radio />} label="Case On Delivery" required/>
        <FormControlLabel value="card" control={<Radio />} label="Credit/Debit/ATM Card" disabled />
        <FormControlLabel value="net-banking" control={<Radio />} label="Net Banking" disabled/>
      </RadioGroup>
    </FormControl>
  )
}

export default PaymentMethod