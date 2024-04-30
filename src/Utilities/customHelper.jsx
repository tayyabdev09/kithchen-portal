import toast from "react-hot-toast";

export function apiResponse(response, navigate) {
  if (response.status === 400) {
    toast.error(response.data.message);
  } else if (response.status === 422) {
    let errors = response.data;
    for (let key in errors) {
      toast.error(errors[key]);
    }
  } else if (parseInt(response.data.code) === 401) {
    navigate("/login");
  } else {
    let msg = "Response Error! Please try again later.";
    toast.error(msg);
  }
}

export function handleError() {
  let msg = "Something Wrong! Please try after some time.";
  toast.error(msg);
}
