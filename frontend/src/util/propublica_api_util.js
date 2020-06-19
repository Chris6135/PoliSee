import axios from "axios";

const key = process.env.REACT_APP_PROPUBLICA_KEY;

const ProPublicaAPI = {
  senatorsByState: (state) =>
    axios.get(
      `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`,
      { headers: { "X-API-Key": key } }
    ),
  memberByDistrict: (state, cd) =>
    axios.get(
      `https://api.propublica.org/congress/v1/members/house/${state}/${cd}/current.json`,
      { headers: { "X-API-Key": key } }
    ),
  specificMember: (id) =>
    axios.get(`https://api.propublica.org/congress/v1/members/${id}.json`, {
      headers: { "X-API-Key": key },
    }),
};

export default ProPublicaAPI;
