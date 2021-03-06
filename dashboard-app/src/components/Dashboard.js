import React from 'react';
import './dashboard.css';
import WidgetText from './widgetText';
import WidgetBar from './widgetBar';
import WidgetDoughNut from './widgetDoughNut';
import WidgetPie3D from './widgetPie3D';
import WidgetColumn2D from './widgetColumn2D';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const config = {
  apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
  spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg',
};
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      dropdownOptions: [],
      selectedValue: null,
      organicSource: null,
      directSource: null,
      referralSource: null,
      pageViews: null,
      users: null,
      newUsers: null,
      sourceArr: [],
      usersArr: [],
      socialSource: null,
      sessionArr: [],
      sessions: null,
      bounceRate: [],
    };
    this.getData = this.getData.bind(this);
    this.updateDashboard = this.updateDashboard.bind(this);
  }

  getData(arg) {
    const arr = this.state.items;
    const arrLength = arr.length;

    let organicSource = 0;
    let directSource = 0;
    let referralSource = 0;
    let pageViews = 0;
    let users = 0;
    let newUsers = 0;
    let selectedValue = null;
    let sourceArr = [];
    let usersArr = [];
    let socialSource = 0;
    let sessionArr = [];
    let sessions = 0;
    let bounceRate = [];

    for (let i = 0; i < arrLength; i++) {
      if (arg === arr[i]['month']) {
        organicSource = arr[i].organic_source;
        directSource = arr[i].direct_source;
        referralSource = arr[i].referral_source;
        pageViews = arr[i].page_views;
        users = arr[i].users;
        newUsers = arr[i].new_users;
        socialSource = arr[i].social_source;
        sessions = arr[i].sessions;

        sourceArr.push(
          {
            label: 'Organic Source',
            value: arr[i].organic_source,
          },
          {
            label: 'Direct Source',
            value: arr[i].direct_source,
          },
          {
            label: 'Referral Source',
            value: arr[i].referral_source,
          },
          {
            label: 'Socail Source',
            value: arr[i].social_source,
          }
        );

        usersArr.push(
          {
            label: 'Users',
            value: arr[i].users,
          },
          {
            label: 'New Users',
            value: arr[i].new_users,
          }
        );

        sessionArr.push(
          {
            label: 'No: of Sessions per Users',
            value: arr[i].number_of_sessions_per_users,
          },
          {
            label: 'Page Per Session',
            value: arr[i].page_per_session,
          }
        );

        bounceRate.push(
          {
            label: arr[0].month,
            value: arr[0].bounce_rate,
          },
          { label: arr[1].month, value: arr[1].bounce_rate },
          { label: arr[2].month, value: arr[2].bounce_rate },
          { label: arr[3].month, value: arr[3].bounce_rate },
          { label: arr[4].month, value: arr[4].bounce_rate },
          { label: arr[5].month, value: arr[5].bounce_rate },
          { label: arr[6].month, value: arr[6].bounce_rate },
          { label: arr[7].month, value: arr[7].bounce_rate },
          { label: arr[8].month, value: arr[8].bounce_rate },
          { label: arr[9].month, value: arr[9].bounce_rate },
          { label: arr[10].month, value: arr[10].bounce_rate },
          { label: arr[11].month, value: arr[11].bounce_rate }
        );
      }
    }
    selectedValue = arg;

    this.setState({
      organicSource: organicSource,
      directSource: directSource,
      referralSource: referralSource,
      pageViews: pageViews,
      users: users,
      newUsers: newUsers,
      sourceArr: sourceArr,
      usersArr: usersArr,
      socialSource: socialSource,
      sessionArr: sessionArr,
      sessions: sessions,
      bounceRate: bounceRate,
    });
  }
  updateDashboard(event) {
    this.getData(event.value);
    this.setState({
      selectedValue: event.value,
    });
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let batchRowValues = data.valueRanges[0].values;

        // we are here converting the .csv/Excel data to the json data
        const rows = [];
        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }
        // console.log(rows);

        // dropdown options
        let dropdownOptions = [];

        for (let i = 0; i < rows.length; i++) {
          dropdownOptions.push(rows[i].month);
        }

        dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
        this.setState(
          {
            items: rows,
            dropdownOptions: dropdownOptions,
            selectedValue: 'Jan 2018',
          },
          () => this.getData('Jan 2018')
        );
      });
  }
  render() {
    return (
      <div>
        {/*============================  Header ============================== */}
        <Container fluid>
          <Row className="TopHeader">
            <Col style={{ color: '#d4fff1' }}>Dashboard</Col>
            <Col>
              <Dropdown
                options={this.state.dropdownOptions}
                onChange={this.updateDashboard}
                value={this.state.selectedValue}
                placeholder="Select an option"
              />
            </Col>
          </Row>
        </Container>

        {/*============================  Source Stats ============================== */}
        <Container className="mainDashboard">
          <h3
            style={{
              textAlign: 'left',
              color: '#aaf2f5',
            }}
          >
            Source Stats
          </h3>
          <Row>
            <Col md={4}>
              <WidgetText
                title="Organic Source"
                value={this.state.organicSource}
                description={this.state.selectedValue}
              />
            </Col>
            <Col md={4}>
              <WidgetText
                title="Direct Source"
                value={this.state.directSource}
                description={this.state.selectedValue}
              />
            </Col>
            <Col md={4}>
              <WidgetText
                title="Referral Source"
                value={this.state.referralSource}
                description={this.state.selectedValue}
              />
            </Col>

            <Col md={4}>
              <WidgetText
                title="Social Source"
                value={this.state.socialSource}
                description={this.state.selectedValue}
              />
            </Col>

            <Col md={8}>
              <WidgetBar
                title="Source Comparison"
                chartData={this.state.sourceArr}
              />
            </Col>
          </Row>

          {/*============================  Page Stats ============================== */}
          <h3
            style={{
              textAlign: 'left',
              color: '#aaf2f5',
            }}
          >
            Page/Users Stats
          </h3>
          <Row>
            <Col md={4}>
              <WidgetText
                title="Users"
                value={this.state.users}
                description={this.state.selectedValue}
              />
            </Col>
            <Col md={4}>
              <WidgetText
                title="New Users"
                value={this.state.newUsers}
                description={this.state.selectedValue}
              />
            </Col>
            <Col md={4}>
              <WidgetText
                title="Page Views"
                value={this.state.pageViews}
                description={this.state.selectedValue}
              />
            </Col>
            <Col md={12}>
              <WidgetDoughNut
                title="Users Comparison"
                chartData={this.state.usersArr}
              />
            </Col>
          </Row>

          {/*============================  Sessions Stats ============================== */}
          <h3
            style={{
              textAlign: 'left',
              color: '#aaf2f5',
            }}
          >
            Sessions Stats
          </h3>

          <Row>
            <Col>
              <WidgetText
                title="Sessions"
                value={this.state.sessions}
                description={this.state.selectedValue}
              />
            </Col>
            <Col md={6}>
              <WidgetPie3D
                title="Sessions Comparison"
                chartData={this.state.sessionArr}
              />
            </Col>
          </Row>
          {/*============================  Bounce Rate Stats ============================== */}
          <h3
            style={{
              textAlign: 'left',
              color: '#aaf2f5',
            }}
          >
            Bounce Rate Stats
          </h3>
          <Row>
            <Col md={12}>
              <WidgetColumn2D
                title="Bounce Rate"
                chartData={this.state.bounceRate}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
