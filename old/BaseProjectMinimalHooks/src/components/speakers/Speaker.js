import SpeakerDetail from "./SpeakerDetail";
import React, { useContext } from "react";

export default function Speaker({ id }) {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  if (loadingStatus === "loading") return null;

  return speakerRec ? (
    <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
