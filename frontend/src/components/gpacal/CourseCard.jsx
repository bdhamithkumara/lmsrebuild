import React from 'react';
import { Button, Card, Select } from 'antd';

const Option = Select.Option;

const CourseCard = props => {
  if (!props.visible) {
    return null;
  }

  const handleGPAChange = (value) => {
    props.updateCourseGPA(props.index, value);
  };

  const handleCreditsChange = (value) => {
    props.updateCourseCredits(props.index, value);
  };

  return (
    <Card
      style={{ marginTop: 16 , border: '1px solid black' , marginBottom : '5px'}}
      type="inner"
      title={`Course ${props.realIndex}`}
      extra={<button onClick={() => props.deleteCourse(props.index)} className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px] " >Delete</button>}
    >
      <Select
        style={{ width: 100 }}
        placeholder="Grade"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        onChange={handleGPAChange}
      >
        <Option value={4.0}>A</Option>
        <Option value={3.67}>A-</Option>
        <Option value={3.33}>B+</Option>
        <Option value={3.0}>B</Option>
        <Option value={2.67}>B-</Option>
        <Option value={2.33}>C+</Option>
        <Option value={2.0}>C</Option>
        <Option value={1.67}>C-</Option>
        <Option value={1.33}>D+</Option>
        <Option value={1.0}>D</Option>
        <Option value={0.00}>F</Option>
      </Select>
      <Select
        style={{ width: 100 }}
        placeholder="Credits"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        className="inputCredits"
        onChange={handleCreditsChange}
      >
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={6}>6</Option>
      </Select>
    </Card>
  );
}

export default CourseCard;