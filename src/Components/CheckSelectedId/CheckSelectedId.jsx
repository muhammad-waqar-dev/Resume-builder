import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const CheckSelectedId = (props) => {
  const selectedId = props.selectedTemplateId;
  return selectedId ? props.children : <Navigate to={"/"} />;
};

const mapStateToProps = (state) => ({
  selectedTemplateId: state.CommonReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);
