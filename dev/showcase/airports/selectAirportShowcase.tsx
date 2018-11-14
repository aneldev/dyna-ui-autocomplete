import * as React from 'react';
import {DynaInput} from "dyna-ui-input";
import {IShowcaseView} from "dyna-showcase/dist/interfaces";

import {DynaAutoComplete, IAutoCompleteValue, EMode, EColor} from "../../../src";

import {faIcon} from "../../../src/utils";

const selectAirportStyles: any = require('./select-airport.module.less');
const myApplicationStyles: any = require('./my-application.module.less');

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

    // our backend service
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
          const airportText: string = `${airport.name} ${airport.city} ${airport.country} ${airport.iata}`
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
      label: string;
      mode?: EMode;
      value: string;
      placeholder: string;
      suggestedAirports: IAirport[];
      isLoading?: boolean;
      validationMessage?: string;
      onBlur: () => void;
      onChange: (name: string, value: string, airport: IAirport) => void;
    }

    class SelectAirport extends React.Component<ISelectAirportProps> {
      constructor(props: ISelectAirportProps) {
        super(props);
      }

      private handleChange = (name: string, acValue: IAutoCompleteValue<IAirport>): void => {
        this.props.onChange(name, acValue.value, acValue.item);
      };

      private renderAirportOption = (airport: IAirport, isFocused: boolean): JSX.Element => {
        const className: string = [
          selectAirportStyles.airportDropDownOption,
          isFocused ? selectAirportStyles.isFocused : '',
        ].join(' ').trim();

        // todo: highlight the content with https://github.com/aneldev/dyna-highlight-text but this is not part of this demo

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
      };

      public render(): JSX.Element {
        const {
          name,
          label,
          mode,
          placeholder,
          suggestedAirports,
          value,
          isLoading,
          validationMessage,
          onBlur,
        } = this.props;

        return (
          <DynaAutoComplete
            name={name}
            color={EColor.GREY_WHITE}
            mode={mode || EMode.EDIT}
            label={label}
            isLoading={isLoading}
            value={value}
            selectOnBlur
            inputProps={{
              placeholder,
              autoFocus: true,
              onBlur,
            }}
            items={!!value ? suggestedAirports : []}
            validationMessage={validationMessage || null}
            getItemValue={(item: IAirport) => `${item.iata.toUpperCase()} ${item.city}`}
            renderItem={this.renderAirportOption}
            onChange={this.handleChange}
          />
        );
      }
    }

    // MyApplication component (the user of the SelectAirport)

    interface IMyApplicationProps {
      mode?: EMode;
    }

    interface IMyApplicationState {
      passengerName: string;
      phoneNumber: string;
      suggestAirports: IAirport[];
      selectedAirportValue: string;
      selectedAirportItem: IAirport;
      selectedAirportValidation: string;
      isLoading: boolean;
    }

    class MyApplication extends React.Component<IMyApplicationProps, IMyApplicationState> {

      constructor(props: IMyApplicationProps) {
        super(props);
        this.state = {
          passengerName: '',
          phoneNumber: '',
          suggestAirports: [],
          selectedAirportValue: '',
          selectedAirportItem: null,
          selectedAirportValidation: null,
          isLoading: false,
        };
      }

      private handleAirportChange = (name: string, airportValue: string, airportItem: IAirport): void => {
        this.setState({
          selectedAirportValue: airportValue,
          selectedAirportItem: airportItem || this.state.selectedAirportItem,
          isLoading: true,
        });

        getAirports(airportValue, 5, (airports: IAirport[]) => {
          this.setState({
            suggestAirports: airports,
            isLoading: false,
          });
        });
      };

      private handleAirportBlur = (): void => {
        if (this.state.selectedAirportItem) {
          this.setState({
            selectedAirportValue: `${this.state.selectedAirportItem.iata.toUpperCase()} ${this.state.selectedAirportItem.city}`,
            selectedAirportValidation: null,
          });
        } else {
          this.setState({
            selectedAirportValue: '',
            selectedAirportValidation: 'please select airport',
          });
        }
      };

      public render(): JSX.Element {
        const {
          mode,
        } =  this.props;
        const {
          passengerName, phoneNumber,
          suggestAirports, selectedAirportValue, isLoading, selectedAirportValidation,
        } = this.state;

        const infoForDemostrationOnly: JSX.Element = <span
          style={{fontSize: "10px", color: "gray"}}>{faIcon('exclamation-triangle')}<i> this field is for demostration only </i>{faIcon('exclamation-triangle')}</span>;

        return (
          <div className={myApplicationStyles.appWrapper}>
            <DynaInput
              name="passengerName"
              label="Passenger name"
              mode={mode}
              validationMessage={infoForDemostrationOnly}
              value={passengerName}
              onChange={(name: string, value: string) => this.setState({passengerName: value})}/>
            <SelectAirport
              name="originAirport"
              label="From"
              mode={mode}
              placeholder="where do you want to go"
              suggestedAirports={suggestAirports}
              value={selectedAirportValue}
              isLoading={isLoading}
              validationMessage={selectedAirportValidation}
              onBlur={this.handleAirportBlur}
              onChange={this.handleAirportChange}
            />
            <DynaInput
              name="phoneNumber"
              label="Phone number"
              mode={mode}
              value={phoneNumber}
              validationMessage={infoForDemostrationOnly}
              onChange={(name: string, value: string) => this.setState({phoneNumber: value})}/>
          </div>
        );
      }

    }

    // export this small application to the showcase

    return <MyApplication/>;

  })(),
  wrapperStyle: {
    width: "100%",
  },
  props: [
    {
      slug: 'edit-mode',
      title: 'Edit mode',
      props:{
        mode:EMode.EDIT,
      },
    },
    {
      slug: 'view-mode',
      title: 'View mode',
      props:{
        mode:EMode.VIEW,
      },
    },
  ]

};
