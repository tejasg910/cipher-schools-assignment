import DataURIParser from "datauri/parser.js";
import path, { extname } from "path";

const getDataUri = (file) => {
  const parser = new DataURIParser();
  const extName = path.extname(file.tempFilePath).toString();
  const fileName = file.name.replace(":", "_"); // replace colon with underscore
  const fileDataUri = parser.format(extName, file.data).toString();
  console.log(typeof fileDataUri, fileDataUri);

  return fileDataUri.replace("base64,", `name=${fileName}&base64,`); // add filename to data URI
};

export default getDataUri;
