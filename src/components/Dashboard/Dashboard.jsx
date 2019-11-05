import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { MDBContainer } from "mdbreact";
import Staff from "./Staff";
import Payroll from "./Payroll";
import Department from "./Departments";
import Expenses from "./Expenses";
import Patient from "./PatientData";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="mx-auto">
          <Staff />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <Payroll />;
    } else if (this.state.activeTab === 2) {
      return <Department />;
    } else if (this.state.activeTab === 3) {
      return <Expenses />;
    } else if (this.state.activeTab === 4) {
      return <Patient />;
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
            <Tab>Staff</Tab>
            <Tab>Payroll</Tab>
            <Tab>Departments</Tab>
            <Tab>Expenses</Tab>
            <Tab>Patients</Tab>
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

export default Dashboard;
