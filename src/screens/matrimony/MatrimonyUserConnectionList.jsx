import DataTable from "react-data-table-component";
import {
  regularUserColumns,
  regularUserList,
} from "../../constants/dummy/MatrimonyRegularUserContent";
import { Tab, Tabs } from "react-bootstrap";

const MatrimonyUserConnectionList = () => {
  return (
    <>
      <div className="MatrimonyRegularUserList tableListMain">
        <div className="innerBox">
          <Tabs defaultActiveKey="regular" className="userListTab">
            <Tab
              className="userProfileTab_body"
              eventKey="regular"
              title="Regular Users"
            >
              <div className="tab_body">
                <div className="dataTable_box">
                  <DataTable
                    columns={regularUserColumns.column} // dummy data
                    data={regularUserList.data}
                    selectableRows
                    pagination
                    className="MatrimonyRegularUserListTable dataTable_main"
                  />
                </div>
              </div>
            </Tab>
            <Tab
              className="userProfileTab_body"
              eventKey="silver"
              title="Silver Users"
            >
              <div className="tab_body">
              <div className="dataTable_box">
                  <DataTable
                    columns={regularUserColumns.column} // dummy data
                    data={regularUserList.data}
                    selectableRows
                    pagination
                    className="MatrimonyRegularUserListTable dataTable_main"
                  />
                </div>
              </div>
            </Tab>
            <Tab
              className="userProfileTab_body"
              eventKey="gold"
              title="Gold Users"
            >
              <div className="tab_body">
              <div className="dataTable_box">
                  <DataTable
                    columns={regularUserColumns.column} // dummy data
                    data={regularUserList.data}
                    selectableRows
                    pagination
                    className="MatrimonyRegularUserListTable dataTable_main"
                  />
                </div>
              </div>
            </Tab>
            <Tab
              className="userProfileTab_body"
              title="Premium Users"
              eventKey="premium"
            >
              <div className="tab_body">
              <div className="dataTable_box">
                  <DataTable
                    columns={regularUserColumns.column} // dummy data
                    data={regularUserList.data}
                    selectableRows
                    pagination
                    className="MatrimonyRegularUserListTable dataTable_main"
                  />
                </div>
              </div>
            </Tab>
            <Tab
              className="userProfileTab_body"
              title="Diamond Users"
              eventKey="diamond"
            >
              <div className="tab_body">
              <div className="dataTable_box">
                  <DataTable
                    columns={regularUserColumns.column} // dummy data
                    data={regularUserList.data}
                    selectableRows
                    pagination
                    className="MatrimonyRegularUserListTable dataTable_main"
                  />
                </div>
              </div>
            </Tab>
          </Tabs>

        </div>
      </div>
    </>
  );
};

export default MatrimonyUserConnectionList;
