import React from "react";
import { ReportForm } from "./ReportForm";
import { ReportGraph } from "./ReportGraph";

import useReport from "./useReport";

export default function Index() {
  const {
    optinItems,
    recipientItems,
    setIsOptins,
    setIsRecipient,
    setRangeValues,
  } = useReport();

  return (
    <div>
      <ReportForm
        setRangeValues={setRangeValues}
        setIsOptins={setIsOptins}
        setIsRecipient={setIsRecipient}
      />
      <ReportGraph optinItems={optinItems} recipientItems={recipientItems} />
    </div>
  );
}
