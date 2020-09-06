import React, { Dispatch, SetStateAction } from "react";
import { Card, DatePicker, Form, Switch } from "antd";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 12 },
  },
};

interface Props {
  setRangeValues: Dispatch<SetStateAction<{}>>;
  setIsOptins: Dispatch<SetStateAction<boolean>>;
  setIsRecipient: Dispatch<SetStateAction<boolean>>;
}

export const ReportForm: React.FC<Props> = ({
  setRangeValues,
  setIsOptins,
  setIsRecipient,
}) => {
  function handleRangeChange(date, dateString) {
    setRangeValues({
      from: dateString[0],
      to: dateString[1],
    });
  }

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Form>
        <Form.Item {...formItemLayout} label="Date Range">
          <RangePicker onChange={handleRangeChange} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Show Optins">
          <Switch onChange={(value) => setIsOptins(value)} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Show Recipients">
          <Switch onChange={(value) => setIsRecipient(value)} />
        </Form.Item>
      </Form>
    </Card>
  );
};
