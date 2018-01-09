import * as React from 'react';
import {IShowcaseView} from "dyna-showcase/dist/interfaces";
import {DynaAutoComplete, IAutoCompleteValue} from "../../../src/DynaAutoComplete";
import {faIcon} from "../../../src/utils";

const selectAirportStyles: any = require('./select-airport.module.less');

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

    const contains = (searchText: string, inText: string): boolean => {
      let itContains: number = 0;
      const searchTexts: string[] = searchText.split(' ').filter((t: string) => !!t);

      searchTexts.forEach((text: string) => {
        if (inText.indexOf(text) > -1) itContains++;
      });

      return itContains == searchTexts.length;
    };

    // build the airports tables
    const airportsDictionary: { [iataCode: string]: IAirport } = airportsMd;
    const airportsTable: IAirport[] = Object.keys(airportsDictionary)
      .reduce((acc: IAirport[], iataCode: string) => {
        acc.push(airportsDictionary[iataCode] as IAirport);
        return acc;
      }, []);
    const airportsTableInLC: IAirport[] = airportsTable.map((airport: IAirport) => {
      return {
        ...airport,
        iata: airport.iata.toLowerCase().trim(),
        name: airport.name.toLowerCase().trim(),
        city: airport.city.toLowerCase().trim(),
        country: airport.country.toLowerCase().trim(),
      }
    });

    const getAirports = (containing: string, records: number, cbLoad: (airports: IAirport[]) => void): void => {
      setTimeout(() => {
        containing = containing.toLowerCase().trim();
        const selectedAirports: IAirport[] = [];
        const selectedAirportsDic: { [iataCode: string]: boolean } = {};

        containing.toUpperCase().split(' ')
          .forEach((text: string) => {
            if (selectedAirports.length) return;
            const airportFromDictionary: IAirport = airportsDictionary[text];
            if (airportFromDictionary) {
              selectedAirports.push(airportFromDictionary);
              selectedAirportsDic[airportFromDictionary.iata.toLowerCase()] = true;
            }
          });

        for (let iAirport = 0; iAirport < airportsTableInLC.length && selectedAirports.length < records; iAirport++) {
          const airport: IAirport = airportsTableInLC[iAirport];
          const airportText:string=`${airport.name} ${airport.city} ${airport.country} ${airport.iata}`
          if (!selectedAirportsDic[airport.iata]) {
            if (contains(containing, airportText)) {
              selectedAirports.push(airportsTable[iAirport]);
              selectedAirportsDic[airport.iata] = true;
            }
          }
        }

        cbLoad(selectedAirports);
      }, 300); // simulate network delay
    };

    // SelectAirport component (the user of the DynaAutoComplete)

    interface ISelectAirportProps {
      name: string;
      value: string;
      suggestedAirports: IAirport[];
      isLoading: boolean;
      onChange: (name: string, value: string, airport: IAirport) => void;
    }

    interface ISelectAirportState {
    }

    class SelectAirport extends React.Component<ISelectAirportProps, ISelectAirportState> {
      constructor(props: ISelectAirportProps) {
        super(props);
      }

      private handleChange(name: string, acValue: IAutoCompleteValue<IAirport>): void {
        this.props.onChange(name, acValue.value, acValue.item);
      }

      private renderAirportOption(airport: IAirport, isFocused: boolean): JSX.Element {
        const className: string = [
          selectAirportStyles.airportDropDownOption,
          isFocused ? selectAirportStyles.isFocused : '',
        ].join(' ').trim();

        // todo: highlight the content with https://github.com/aneldev/dyna-highlight-text

        return (
          <div key={airport.iata} className={className}>
            <div className={selectAirportStyles.icon}>{faIcon('plane')}</div>
            <div className={selectAirportStyles.data}>
              <div className={selectAirportStyles.iataCity}>{airport.iata.toUpperCase()} {airport.city}</div>
              <div className={selectAirportStyles.name}>{airport.name}</div>
              <div className={selectAirportStyles.country}>{airport.country}</div>
            </div>
          </div>
        );
      }

      public render(): JSX.Element {
        const {name, suggestedAirports, value, isLoading} = this.props;
        return (
          <DynaAutoComplete
            name={name}
            label="From"
            isLoading={isLoading}
            value={value}
            selectOnBlur
            items={!!value ? suggestedAirports : []}
            getItemValue={(item: IAirport) => `${item.iata.toUpperCase()} ${item.city}`}
            renderItem={this.renderAirportOption.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
        );
      }
    }

    // MyApplication component (the user of the SelectAirport)

    interface IMyApplicationProps {
    }

    interface IMyApplicationState {
      suggestAirports: IAirport[];
      selectedAirportValue: string;
      selectedAirportItem: IAirport;
      isLoading: boolean;
    }

    class MyApplication extends React.Component<IMyApplicationProps, IMyApplicationState> {

      constructor(props: IMyApplicationProps) {
        super(props);
        this.state = {
          suggestAirports: [],
          selectedAirportValue: '',
          selectedAirportItem: null,
          isLoading: false,
        };
      }

      private handleAirportChange(name: string, airportValue: string, airportItem: IAirport): void {
        this.setState({
          selectedAirportValue: airportValue,
          selectedAirportItem: airportItem,
          isLoading: true,
        });

        getAirports(airportValue, 5, (airports: IAirport[]) => {
          this.setState({
            suggestAirports: airports,
            isLoading: false,
          });
        });
      }

      public render(): JSX.Element {
        const {suggestAirports, selectedAirportValue, isLoading} = this.state;
        return (
          <SelectAirport
            name="originAirport"
            suggestedAirports={suggestAirports}
            value={selectedAirportValue}
            isLoading={isLoading}
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
