import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineInfo, AiOutlineCheck } from "react-icons/ai";
import { connect } from "react-redux";
import { selectAlerts } from "../../../redux/selectors/alertSelector";
import {
  AlertContainer,
  AlertOuterContainer,
  AlertInnerContainer,
  AlertIconContainer,
} from "./styles";
import { slideInVariants } from "./variants";

const renderAlertIcon = (type) => {
  switch (type) {
    case "success":
      return <AiOutlineCheck />;
    case "danger":
      return <AiOutlineClose />;
    case "info":
      return <AiOutlineInfo />;
    default:
      return <AiOutlineCheck />;
  }
};

const Alert = ({ alerts }) => {
  return ReactDOM.createPortal(
    <AlertContainer>
      <AnimatePresence>
        {alerts &&
          alerts.length > 0 &&
          alerts.map((alert) => (
            <AlertOuterContainer
              key={alert.id}
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AlertInnerContainer color={alert.type}>
                <AlertIconContainer color={alert.type}>
                  {renderAlertIcon(alert.type)}
                </AlertIconContainer>
                <p>{alert.message}</p>
              </AlertInnerContainer>
            </AlertOuterContainer>
          ))}
      </AnimatePresence>
    </AlertContainer>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state) => ({
  alerts: selectAlerts(state),
});

export default connect(mapStateToProps)(Alert);
