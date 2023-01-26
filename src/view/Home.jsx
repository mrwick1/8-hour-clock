import React, { useEffect, useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TextField from '@mui/material/TextField';
import { AddBreak, BreaksTitle, Container, H1, Header, Row } from './HomeStyle';
import moment from 'moment';
const Home = () => {
  const [startingTime, setStartingTime] = useState(moment());
  const [endingTime, setEndingTime] = useState(moment());
  console.log(
    `🚀 ~ file: Home.jsx:9 ~ Home ~ endingTime`,
    moment(endingTime, 'HH:mm:ss').format('hh:mm A')
  );
  const [breakStartTime, setBreakStartTime] = useState(moment());
  const [breakEndTime, setBreakEndTime] = useState(moment());
  const [breaks, setBrakes] = useState([]);
  const [breakTime, setBreakTime] = useState([]);
  const [time, setTotalTime] = useState();
  const [isBreak, setIsBreak] = useState(false);

  const AddBreaks = () => {
    if (isBreak) {
      const temp = [...breaks];
      temp.push({
        breakStartTime,
        breakEndTime,
        time: moment(breakEndTime).diff(moment(breakStartTime), 'minutes'),
        id: moment(),
      });
      setBrakes(temp);
    }
    setIsBreak(true);
  };
  const getTotalTime = () => {
    let total = 0;
    breaks.filter((item) => {
      total += item?.time;
    });
    setTotalTime(total + 480);
  };

  useEffect(() => {
    setEndingTime(moment(startingTime).add(time, 'minutes').format('hh:mm A'));
  }, [time]);
  useEffect(() => {
    getTotalTime();
  }, [breaks]);
  return (
    <>
      <Header>
        <img src='./src/assets/clock.png' alt='' />8 Hour Clock
      </Header>
      <Container>
        {/* <h3>Time : {time}</h3> */}
        <H1>Calculate Your 8 Hour</H1>
        <Row>
          <span>Shift Starting Time : </span>
          <MobileTimePicker
            label='Shift Start Time'
            value={startingTime}
            onChange={(newValue) => {
              setStartingTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Row>
        <Row>
          <span>Shift Ending Time : </span>
          <div>{typeof endingTime === 'string' && endingTime}</div>
        </Row>
        <BreaksTitle>Breaks</BreaksTitle>

        {isBreak && (
          <>
            <Row>
              <span>Enter Break Starting Time : </span>
              <MobileTimePicker
                label='Shift End Time'
                value={breakStartTime}
                onChange={(newValue) => {
                  setBreakStartTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Row>
            <Row>
              <span>Enter Break Ending Time : </span>
              <MobileTimePicker
                label='Shift End Time'
                value={breakEndTime}
                onChange={(newValue) => {
                  setBreakEndTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Row>
          </>
        )}
        <AddBreak onClick={AddBreaks}>Add Break</AddBreak>
        <BreaksTitle>Total Breaks Taken</BreaksTitle>
        {breaks.map((item) => {
          return (
            <div style={{ pointerEvents: 'none' }} key={Math.random()}>
              <Row>
                <span>Break Starting Time : </span>
                <MobileTimePicker
                  label='Shift End Time'
                  value={item.breakStartTime}
                  onChange={(newValue) => {
                    setBreakStartTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Row>
              <Row>
                <span>Break Ending Time : </span>
                <MobileTimePicker
                  label='Shift End Time'
                  value={item.breakEndTime}
                  onChange={(newValue) => {
                    setBreakEndTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Row>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
