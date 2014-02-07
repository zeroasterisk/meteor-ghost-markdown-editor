//This file exposes global variables so that it works with Meteor 0.6.5's package system.
if (typeof Package !== "undefined") {
  console.log('export', window, this);
  CodeMirror = this.CodeMirror;
}
