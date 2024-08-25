const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5100;
console.log("Port", PORT);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
