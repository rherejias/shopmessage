import axios from "axios";
import { useState, useEffect } from "react";
import { message } from "antd";
import { isEmpty } from "lodash/lang";

function useReport() {
  const [rangeValues, setRangeValues] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });
  const [optinItems, setOptinItems] = useState<Array<object> | null>([]);
  const [recipientItems, setRecipientItems] = useState<Array<object> | null>(
    []
  );
  const [isOptins, setIsOptins] = useState<boolean>(false);
  const [isRecipient, setIsRecipient] = useState<boolean>(false);

  async function getOptinData(values: { from: string; to: string }) {
    try {
      const { from, to } = values;
      if (isOptins) {
        await axios
          .get("/api/reports/optins.json", {
            params: {
              from: from,
              to: to,
            },
          })
          .then((resp) => {
            setOptinItems(resp.data);
          });
      } else {
        setOptinItems([]);
      }
    } catch (error) {
      message.error(error);
    }
  }

  async function getRecipientData(values: { from: string; to: string }) {
    try {
      const { from, to } = values;
      if (isRecipient) {
        await axios
          .get("/api/reports/recipients.json", {
            params: {
              from: from,
              to: to,
            },
          })
          .then((resp) => {
            setRecipientItems(resp.data);
          });
      } else {
        setRecipientItems([]);
      }
    } catch (error) {
      message.error(error);
    }
  }

  useEffect(
    () => {
      if (!isEmpty(rangeValues)) {
        getOptinData(rangeValues);
      }
    },
    [isOptins, rangeValues]
  );

  useEffect(
    () => {
      if (!isEmpty(rangeValues)) {
        getRecipientData(rangeValues);
      }
    },
    [isRecipient, rangeValues]
  );

  return {
    optinItems,
    recipientItems,
    setIsOptins,
    setIsRecipient,
    setRangeValues,
  };
}

export default useReport;
