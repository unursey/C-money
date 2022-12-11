export const validName = (e) => {
  e.target.value =
    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
  e.target.value = e.target.value
    .replace(/^ +|[^A-Za-zА-Яа-я ]/g, "")
    .replace(/ +(\w*).*/, "");
};

export const validAuth = (e) => {
  e.target.value = e.target.value.replace(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/g,
    ""
  );
};

export const validEmail = (input) => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(input.value);
};

export const maskPhone = (elems, masked = "+7 (___) ___-__-__") => {
  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    ) {
      this.value = newValue;
    }
    if (event.type == "blur" && this.value.length < 5) {
      this.value = "";
    }
  }

  elems.addEventListener("input", mask);
  elems.addEventListener("focus", mask);
  elems.addEventListener("blur", mask);
};
