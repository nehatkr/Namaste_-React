import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online or of line
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(true);
    });
  }, []);
  // boolen value

  return onlineStatus;
};

export default useOnlineStatus;
