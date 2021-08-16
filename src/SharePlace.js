import { Modal } from "./UI/Modal";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Location feature is not available");
      return;
    } else {
      const modal = new Modal("loading-modal-content", "Pleae wait loading");
      modal.show();
      navigator.geolocation.getCurrentPosition(
        (success) => {
          const cordinates = {
            lat: success.coords.latitude,
            lang: success.coords.longitude,
          };
          console.log(cordinates);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
