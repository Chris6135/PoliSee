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

export const levels = (state) => state.entities.levels;

export const officials = (state) => state.entities.officials;

export const address = (state) => state.entities.address;

export const offices = (state) => state.entities.offices;

export const searchResults = (state) => ({
  address: address(state),
  officesObj: offices(state),
  officialsObj: officials(state),
  levelsObj: levels(state),
});
