import React, { useState } from "react";

function SummaryPage() {
  const [checked, setChecked] = useState(false);

  const clickCheckBox = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(target.checked);

  return (
    <div>
      <form>
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={checked}
          onChange={clickCheckBox}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
}

export default SummaryPage;
