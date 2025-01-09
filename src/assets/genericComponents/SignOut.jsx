import Swal from "sweetalert2";

function SignOut() {
  function logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E6A481",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("project_name_user");
        window.location.href = "/";
      }
    });
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        logout();
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          logout();
        }
      }}
    >
      Log out
    </div>
  );
}

export default SignOut;
