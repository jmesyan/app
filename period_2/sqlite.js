import React from 'react';
import {NativeModules, NativeEventEmitter, RCTDeviceEventEmitter} from 'react-native';
var sqlite = require('react-native-sqlite');

export default class welcome extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
     sqlite.open("sqlite.db", function (error, database) {
	  if (error) {
	    console.log("Failed to open database:", error);
	    return;
	  }
	  var sql = "SELECT gid, gname FROM grade WHERE gid=?";
	  var params = [1256];
	  database.executeSQL(sql, params, rowCallback, completeCallback);
	  function rowCallback(rowData) {
	    console.log("Got row data:", rowData);
	  }
	  function completeCallback(error) {
	    if (error) {
	      console.log("Failed to execute query:", error);
	      return
	    }
	    console.log("Query complete!");
	    database.close(function (error) {
	      if (error) {
	        console.log("Failed to close database:", error);
	        return
	      }
	    });
	  }
	});
  }

  render() {
    return (
      <div></div>
    );
  }
}
