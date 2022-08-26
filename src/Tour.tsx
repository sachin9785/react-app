import React from "react";
import JoyRide from "react-joyride";

// Tour component
const Tour = (props: any): any => {
  return (
    <>
      <JoyRide
        run={props.run}
        steps={[
          {
            target: ".App-logo",
            title: "New on the website ? ",
            content: "To see how the website works, let's get started",
            locale: {
              next: "Start",
              skip: "Skip",
            },
            disableBeacon: true,
            placement: "right",
          },
          {
            target: ".text",
            content: "Give us information about the city",
            placement: "left",
            disableBeacon: true,
          },
          {
            target: ".tour-cart",
            content: "Give us information about the city",
            placement: "left",
            disableBeacon: true,
          },
          {
            target: ".tour-contact",
            content: "Tell us the period",
            placement: "top",
          },
          {
            target: ".tour-contact",
            content: "Tell us the activity you would like to practice",
            placement: "left",
          },
        ]}
        continuous={true}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
            textAlign: "left",
          },
          buttonNext: {
            backgroundColor: "green",
          },
          buttonBack: {
            marginRight: 10,
          },
        }}
        locale={{
          last: "End tour",
          skip: "Close tour",
        }}
      />
    </>
  );
};

export default Tour;
