import axios from "axios";
import shortid from "shortid";

const key = process.env.REACT_APP_GCIV_API_KEY;

const formatAddress = (string) =>
  string.trim().split(",").join("").split(" ").join("%20");

const formatOfficials = (officials) =>
  officials.map((o) => ({ ...o, id: shortid.generate() }));

const formatOffices = (officials, offices) => {
  const updatedOffices = offices.map((o) => ({
    ...o,
    roles: o.roles || [],
    levels: o.levels || [],
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
    if (newDivisions[id].officeIndices) {
      newDivisions[id].offices = newDivisions[id].officeIndices.map(
        (i) => offices[i].id
      );
      delete newDivisions[id].officeIndices;
    } else {
      newDivisions[id].offices = [];
    }
  });
  return newDivisions;
};

const getOptions = (offices) => {
  const roles = {};
  const levels = {};
  offices.forEach((o) => {
    o.roles.forEach((r) => {
      roles[r] = roles[r] || { name: r, offices: [] };
      roles[r].offices.push(o.id);
    });

    o.levels.forEach((l) => {
      levels[l] = levels[l] || { name: l, offices: [] };
      levels[l].offices.push(o.id);
    });
  });
  return { roles, levels };
};

const CivicsAPI = {
  representativesByAddress: (address) =>
    axios.get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${formatAddress(
        address
      )}`
    ),
  formatResponse: (res) => {
    const officials = formatOfficials(res.officials);
    const offices = formatOffices(officials, res.offices);
    const divisions = formatDivisions(offices, res.divisions);
    const options = getOptions(offices);
    const formatted = {
      divisions,
      ...options,
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
