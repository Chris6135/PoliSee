import axios from "axios";

const key = process.env.REACT_APP_GCIV_API_KEY;

const formatString = (string) =>
  string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");

const formatOfficials = (officials, offices, zip) =>
  officials.map((o, i) => {
    const office = offices.find((off) => off.officialIndices.includes(i));
    return {
      ...o,
      id: `${zip}${formatString(o.name)}${formatString(office.name)}`,
      office: office.name,
    };
  });

const formatOffices = (officials, offices) => {
  const updatedOffices = offices.map((o) => ({
    ...o,
    roles: o.roles || [],
    levels: o.levels || [],
    officials: o.officialIndices.map((i) => officials[i].id),
    id: o.name,
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

const formatLvl = (lvl) => {
  switch (lvl) {
    case "country":
      return "federal";
    case "administrativeArea1":
      return "state";
    case "administrativeArea2":
      return "county";
    case "locality":
      return "local";
    case "subLocality1":
      return "local";
    case "subLocality2":
      return "local";
    default:
      return lvl;
  }
};

const getOptions = (offices) => {
  const roles = {};
  const levels = {};
  offices.forEach((o) => {
    o.roles.forEach((r) => {
      roles[r] = roles[r] || [];
      roles[r].push(o.id);
    });

    o.levels.forEach((l) => {
      const lvl = formatLvl(l);
      levels[lvl] = levels[lvl] || [];
      levels[lvl].push(o.id);
    });
  });
  return { roles, levels };
};

const CivicsAPI = {
  representativesByAddress: (address) =>
    axios.get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${formatString(
        address
      )}`
    ),
  formatResponse: (res) => {
    const officials = formatOfficials(
      res.officials,
      res.offices,
      res.normalizedInput.zip
    );
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
