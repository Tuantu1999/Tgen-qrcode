const rules = {
  required: (value: string) => !!value || "This field is required.",
  url: (value: string) => {
    const pattern =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return pattern.test(value) || "Please enter a valid URL.";
  },
  notScripts: (value: string) => {
    const pattern = /<script|<\/script>|on\w+=|javascript:/gi;
    return !pattern.test(value) || "Invalid content detected (XSS blocked).";
  },
  notHtml: (value: string) => {
    const pattern = /<.*?>/g;
    return !pattern.test(value) || "HTML is not allowed.";
  },
};

export default rules;
