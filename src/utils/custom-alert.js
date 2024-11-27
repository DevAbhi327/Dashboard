import Swal from "sweetalert2";

const SwalSuccess = Swal.mixin({
  background: "white",
  icon: "success",
  timer: 3000,
  buttons: {
    confirm: "Okay",
  },
});

const SwalError = Swal.mixin({
  background: "white",
  icon: "error",
  timer: 3000,
  buttons: {
    confirm: "Okay",
  },
});

const SwalWarning = Swal.mixin({
  background: "white",
  icon: "warning",
  timer: 3000,
  buttons: {
    confirm: "Okay",
  },
});

const SwalInput = Swal.mixin({
  background: "white",
  buttons: {
    confirm: "Okay",
  },
});




export { SwalError, SwalSuccess, SwalWarning,SwalInput };

// CustomSwal.fire({
//     timer: 3000,
//     buttons: {
//       confirm: "Okay"
//     },
//   })
