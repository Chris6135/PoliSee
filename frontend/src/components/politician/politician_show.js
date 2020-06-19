import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shortid from "shortid";
import man from "../../icons/Man.jpg";

import {
  fetchRepresentative,
  toggleRepresentative,
} from "../../actions/search_actions";
import Article from "./article";
import { fetchArticles } from "../../actions/news_actions";
import ProPublicaAPI from "../../util/propublica_api_util";

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
  const user = useSelector((state) => state.session.user);
  const articles = useSelector((state) => state.entities.news);

  const [record, setRecord] = useState(null);
  const [news, setNews] = useState(null);

  const congress = record ? record.roles[0] : null;

  useEffect(() => {
    if (!official) dispatch(fetchRepresentative(id));
  }, []);

  useEffect(() => {
    if (official && !news)
      dispatch(fetchArticles(official.name)).then(setNews(true));
    if (official && official.congressId && !record) {
      ProPublicaAPI.specificMember(official.congressId).then((res) =>
        setRecord(res.data.results.pop())
      );
    }
  }, [official]);

  const handleSubscribe = (type) => () =>
    dispatch(toggleRepresentative(id, { [type]: true }));

  const formatAddress = ({ line1, city, state, zip }) =>
    `${line1}, ${city}, ${state} ${zip}`;

  const channels =
    official && official.socialMedia
      ? Object.keys(official.socialMedia).map((channel) => {
          switch (channel) {
            case "Facebook":
              return (
                <a
                  key={shortid.generate()}
                  target="_blank"
                  href={`https://www.facebook.com/${official.socialMedia[channel]}`}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                </a>
              );
            case "Twitter":
              return (
                <a
                  key={shortid.generate()}
                  target="_blank"
                  href={`https://twitter.com/${official.socialMedia[channel]}`}
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                </a>
              );
            case "YouTube":
              return (
                <a
                  key={shortid.generate()}
                  target="_blank"
                  href={`https://www.youtube.com/user/${official.socialMedia[channel]}`}
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
          <div className="issues-container">
            <div>education</div>
            <div>justice</div>
            <div>legislation</div>
          </div>
        </div>
      );
    const issues = Object.keys(issueMap);
    return (
      <div>
        {issues
          .filter((i) => roles.some((r) => issueMap[i].includes(r)))
          .map((a) => (
            <div key={shortid.generate()}>{a}</div>
          ))}
      </div>
    );
  };

  const userToggle = () => {
    if (user && user.savedPoliticians.includes(id)) {
      return (
        <div className="follow-btn" onClick={handleSubscribe("save")}>
          {" "}
          <span>-</span>
        </div>
      );
    } else if (user) {
      return (
        <div className="follow-btn" onClick={handleSubscribe("save")}>
          {" "}
          <span>+</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {official && (
        <div className="politician-show">
          <section className="main-info">
            <div className="flag">
              <div className="flag-top">
                <figure className="image">
                  <div className="image-container">
                    <img src={official.photoUrl || man} alt={official.name} />
                  </div>
                  <div className="alert">
                    {" "}
                    {/* Only show alert if politician is up for re-election */}
                    <span>!</span>
                  </div>
                  {userToggle()}
                </figure>
                <aside>
                  <div>
                    <span className="name">
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
                    {official.nextElection
                      ? `Up for reelection: ${official.nextElection}`
                      : "Info TK!"}
                    {/* Up for election/ How long they've served/Unopposed?{" "} */}
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
                <p>{official.address && formatAddress(official.address)}</p>
                <p>
                  {official.url && <a href={official.url}>Official Website </a>}
                </p>
              </aside>
            </div>
            <div className="propublica">
              {record ? (
                <div>
                  <div>
                    <h2>{`Stats for the ${congress.congress}th Congress`}</h2>
                    <ul>
                      {congress.cook_pvi && (
                        <p>{`Cook Partisan Voter Index: ${congress.cook_pvi}`}</p>
                      )}
                      {congress.total_votes && (
                        <p>{`Total votes: ${congress.total_votes}`}</p>
                      )}
                      {record.most_recent_vote && (
                        <p>{`Most recent vote: ${record.most_recent_vote}`}</p>
                      )}
                      {congress.missed_votes !== null && (
                        <p>{`Missed votes: ${congress.missed_votes}${
                          congress.missed_votes_pct !== null &&
                          ` (${congress.missed_votes_pct}%)`
                        }`}</p>
                      )}
                      {congress.bills_sponsored && (
                        <p>{`Bills sponsored: ${congress.bills_sponsored}`}</p>
                      )}
                      {congress.bills_cosponsored && (
                        <p>{`Bills cosponsored: ${congress.bills_cosponsored}`}</p>
                      )}
                      {congress.votes_with_party_pct && (
                        <p>{`Votes with party ${congress.votes_with_party_pct}% of the time`}</p>
                      )}
                      {congress.against && (
                        <p>{`Votes against party ${congress.votes_against_party_pct}% of the time`}</p>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                "Info Tk!"
              )}
              {/* propublica info coming soon <br />
              committee memberships <br />
              blurb if non-existant <br /> */}
            </div>
          </section>

          <section className="news">
            <ul>
              {articles.length &&
                articles.map((a) => <Article key={shortid.generate()} a={a} />)}
            </ul>
          </section>
        </div>
      )}
    </>
  );
};

export default PoliticianShow;
