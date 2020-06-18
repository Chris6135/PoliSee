import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  fetchRepresentative,
  toggleRepresentative,
} from "../../actions/search_actions";
import ArticleItem from "./article_item";

const issueMap = {
  justice: ["judge", "highestCourtJudge"],
  education: ["schoolBoard"],
  legislation: ["specialPurposeOfficer", "governmentOfficer"],
  all: [
    "headOfGovernment",
    "deputyHeadOfGovernment",
    "headOfState",
    "legislatorLowerBody",
    "legislatorUpperBody",
    "executiveCouncil",
    "all",
  ],
};

const PoliticianShow = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  const official = useSelector((state) => state.entities.officials[id]);

  useEffect(() => {
    if (!official) dispatch(fetchRepresentative(id));
  }, []);

  const handleSubscribe = (type) => () =>
    dispatch(toggleRepresentative(id, { [type]: true }));

  const formatAddress = ({ line1, city, state, zip }) =>
    `${line1}, ${city}, ${state} ${zip}`;

  const channels = official
    ? official.socialMedia.map((channel, i) => {
        switch (channel.type) {
          case "Facebook":
            return (
              <a
                key={i}
                target="_blank"
                href={`https://www.facebook.com/${channel.id}`}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </a>
            );
          case "Twitter":
            return (
              <a
                key={i}
                target="_blank"
                href={`https://twitter.com/${channel.id}`}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "twitter-square"]} />
              </a>
            );
          case "YouTube":
            return (
              <a
                key={i}
                target="_blank"
                href={`https://www.youtube.com/user/${channel.id}`}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            );
          default:
            return null;
        }
      })
    : null;

  const getAreas = (roles) => {
    const savant = roles.some((r) => issueMap.all.includes(r));
    if (savant)
      return (
        <div>
          <div>education</div>
          <div>justice</div>
          <div>legislation</div>
        </div>
      );
    const issues = Object.keys(issueMap);
    return (
      <div>
        {issues
          .filter((i) => roles.some((r) => issueMap[i].includes(r)))
          .map((a) => (
            <div>a</div>
          ))}
      </div>
    );
  };

  const articles = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
  ].map((i) => <ArticleItem key={i} num={i} />);

  return (
    <>
      {official && (
        <div className="politician-show">
          <section className="main-info">
            <div className="flag">
              <div className="flag-top">
                <figure className="image">
                  <div className="image-container">
                    <img src={official.photoUrl} alt={official.name} />
                  </div>
                  <div className="alert">
                    {" "}
                    {/* Only show alert if politician is up for re-election */}
                    <span>!</span>
                  </div>
                </figure>
                <aside>
                  <div>
                    <span className="name" onClick={handleSubscribe("save")}>
                      {official ? official.name : ""}
                    </span>
                    <span>
                      {official.office || ""}{" "}
                      <span
                        className={official.party.slice(0, 1).toLowerCase()}
                      >
                        ( {official.party} )
                      </span>
                    </span>
                  </div>
                  <div>
                    Up for election/ How long they've served/Unopposed?{" "}
                    {/* fill in with info  */}
                  </div>
                  {getAreas(official.roles)}
                </aside>
              </div>

              <aside className="contact">
                <span>
                  {official.phone && (
                    <a href={`tel:${official.phone}`}>{official.phone} </a>
                  )}
                  {official.email && (
                    <a href={`mailto:${official.email}`}> email </a>
                  )}
                </span>
                <div>{channels}</div>
              </aside>

              <aside className="contact secondary">
                <p>{formatAddress(official.address)}</p>
                <p>
                  {official.url && (
                    <a href={official.url}>Official Website // </a>
                  )}
                </p>
              </aside>
            </div>
            <div className="propublica">
              propublica info <br />
              committee memberships <br />
              blurb if non-existant <br />
            </div>
          </section>

          <section className="news">
            <ul>{articles}</ul>
          </section>
        </div>
      )}
    </>
  );
};

export default PoliticianShow;
