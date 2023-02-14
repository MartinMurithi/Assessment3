import { useState } from "react"

export default function Header() {

const [hide, Show] = useState(true);
  const [btnText, setBtnText] = useState('Hide');

  return (
    <div>
      <button onClick={() => {Show(!hide);setBtnText(hide ? 'Show' : 'Hide');}}>
        {btnText}
      </button>
      {hide && <h1>This is the Header Component</h1>}
    </div>
  );
}