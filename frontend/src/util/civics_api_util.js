import dotenv from "dotenv";
import axios from "axios";
import shortid from "shortid";

dotenv.config();

const formatAddress = (string) =>
  string.trim().split(",").join("").split(" ").join("%20");

const formatOfficials = (officials) =>
  officials.map((o) => ({ ...o, id: shortid.generate() }));

const formatOffices = (officials, offices) => {
  const updatedOffices = offices.map((o) => ({
    ...o,
    officials: o.officialIndices.map((i) => officials[i].id),
    id: shortid.generate(),
  }));
  updatedOffices.forEach((u) => delete u.officialIndices);
  return updatedOffices;
};

const formatDivisions = (offices, divisions) => {
  const newDivisions = Object.assign({}, divisions);
  const keys = Object.keys(divisions);
  keys.forEach((id) => {
    newDivisions[id].offices = newDivisions[id].officeIndices.map(
      (i) => offices[i].id
    );
    delete newDivisions[id].officeIndices;
  });
  return newDivisions;
};

const CivicsAPI = {
  representativesByAddress: (address) =>
    axios.get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${
        process.env.GCIV_API_KEY
      }&address=${formatAddress(address)}`
    ),
  formatResponse: (res) => {
    const officials = formatOfficials(res.officials);
    const offices = formatOffices(officials, res.offices);
    const divisions = formatDivisions(offices, res.divisions);
    const formatted = {
      divisions,
      officials: {},
      offices: {},
      address: res.normalizedInput,
    };
    officials.forEach((o) => (formatted.officials[o.id] = o));
    offices.forEach((o) => (formatted.offices[o.id] = o));
    return formatted;
  },
};

export default CivicsAPI;
