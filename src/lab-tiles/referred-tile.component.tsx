import React from "react";
import CompletedList from "../completed-list/completed-list.component";
import styles from "../queue-list/laboratory-queue.scss";
import { useTranslation } from "react-i18next";
import SummaryTile from "../summary-tiles/summary-tile.component";

const ReferredTileComponent = () => {
  const { t } = useTranslation();

  return (
    <SummaryTile
      label={t("transferred", "Transferred")}
      value={0}
      headerLabel={t("referredTests", "Ex-Referred tests")}
    />
  );
};

export default ReferredTileComponent;
