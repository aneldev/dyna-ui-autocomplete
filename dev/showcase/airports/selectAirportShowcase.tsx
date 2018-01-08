import * as React from 'react';
import {IShowcaseView} from "dyna-showcase/dist/interfaces";

const airportsMd: any = require('./airports-rnd.json');

export const selectAirportShowcase: IShowcaseView = {
  slug: 'airport-selection',
  faIconName: 'flask',
  title: 'airport... selection...',
  center: true,
  component: (() => {

    // interfaces

    interface IAirport {
      iata: string;
      name: string;
      city: string;
      country: string;
    }

    // utils

    const getAirports = (): IAirport[] => {
      return Object.keys(airportsMd).reduce((acc: IAirport[], iataCode: string) => {
        acc.push(airportsMd[iataCode] as IAirport);
        return acc;
      }, [])
    };


    // SelectAirport component

    interface ISelectAirportProps {
      airports: IAirport[];
      value: string;
      onChange: (value: string, airport: IAirport) => void;
    }

    interface ISelectAirportState {
      value: string;
      airport: IAirport;
    }

    class SelectAirport extends React.Component<ISelectAirportProps, ISelectAirportState> {
      constructor(props: ISelectAirportProps) {
        super(props);
      }

      public render(): JSX.Element {

        return (
          <div>I am here!!!!</div>
        );
      }
    }

    interface IMyApplicationProps {
    }

    interface IMyApplicationState {
      airports: IAirport[];
      selectedAirportValue: string;
      selectedAirportItem: IAirport;
    }

    // MyApplication component (the user of the SelectAirport)

    class MyApplication extends React.Component<IMyApplicationProps, IMyApplicationState> {

      constructor(props: IMyApplicationProps) {
        super(props);
        this.state = {
          airports: getAirports(),
          selectedAirportValue: '',
          selectedAirportItem: null,
        };
      }

      private handleAirportChange(airportValue: string, airportItem: IAirport): void {
        this.setState({
          selectedAirportValue: airportValue,
          selectedAirportItem: airportItem,
        });
      }

      public render(): JSX.Element {
        const {airports, selectedAirportValue} = this.state;
        return (
          <SelectAirport
            airports={airports}
            value={selectedAirportValue}
            onChange={this.handleAirportChange.bind(this)}/>
        );
      }

    }

    // export this small application to the showcase

    return <MyApplication/>;

  })(),
  wrapperStyle: {
    width: "100%",
    backgroundColor: "grey",
    padding: "20px",
  },
};
