import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { MDBContainer } from "mdbreact";
import Doctors from "./Doctors";
import Nurses from "./Nurses";
import HumanResources from "./HumanResources";
import ICT from "./ICT";
import Technicians from "./Technicians";
import ContractWorkers from "./ContractWorkers";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="mx-auto">
          <Doctors />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="mx-auto">
          <Nurses />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="mx-auto">
          <HumanResources />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return <Technicians />;
    } else if (this.state.activeTab === 4) {
      return <ICT />;
    } else if (this.state.activeTab === 5) {
      return <ContractWorkers />;
    }
  }
  render() {
    return (
      <MDBContainer>
        <div className="category-tabs mt-5 pt-5">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Doctor</Tab>
            <Tab>Nurses</Tab>
            <Tab>Human Resource</Tab>
            <Tab>Technicians</Tab>
            <Tab>ICT</Tab>
            <Tab>Contract Workers</Tab>
          </Tabs>

          <Grid className="demo-grid-1">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </MDBContainer>
    );
  }
}

export default Departments;
