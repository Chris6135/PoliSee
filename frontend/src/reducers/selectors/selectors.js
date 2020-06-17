export const sessionErrors = (state) => state.errors.session;

export const officesByRole = (state) => {
  const roles = Object.keys(state.entities.roles);
  return roles.map((r) => ({
    ...state.entities.roles[r],
    offices: state.entities.roles[r].offices.map(
      (o) => state.entities.offices[o]
    ),
  }));
};

export const officesByLevel = (state, lvl) => {
  const levels = Object.keys(state.entities.levels);
  return levels.map((l) => ({
    ...state.entities.levels[l],
    offices: state.entities.levels[l].offices.map(
      (o) => state.entities.offices[o]
    ),
  }));
};

export const officials = (state) => state.entities.officials;

export const address = (state) => state.entities.address;

export const offices = (state) => state.entities.offices;
