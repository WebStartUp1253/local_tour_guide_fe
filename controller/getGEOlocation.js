
export default function getGEOlocations() {
    let currentLocation = null
    if (navigator.geolocation) {
        //currentLocation = navigator.geolocation.getCurrentPosition(success, error);
        currentLocation = navigator.geolocation.getCurrentPosition(success=> {
            return success
        }, error=>{
            return error
        });
      } else {
        console.log("Geolocation not supported");
      }

    if(currentLocation){
    return currentLocation;
    }

    return null;
}
