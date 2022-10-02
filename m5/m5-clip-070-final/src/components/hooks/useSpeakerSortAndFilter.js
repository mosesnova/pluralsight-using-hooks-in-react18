import { useContext } from "react";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";

export default function useSpeakerSortAndFilter(speakerList) {
  const { speakingSaturday, speakingSunday, searchText } =
    useContext(SpeakerMenuContext);

  return speakerList
    ? speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .filter(({ firstName, lastName }) => {
          return (
            searchText.length === 0 ||
            (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
              searchText.toLowerCase()
            )
          );
        })
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        })
    : [];
}
