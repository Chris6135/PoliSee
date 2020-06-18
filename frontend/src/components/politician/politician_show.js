import React from "react";
import ArticleItem from "./article_item";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepresentatives } from "../../actions/search_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PoliticianShow = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch();
  
  const split = id.split("_")
  const zip = split[0]
  const name = split[1];
  const officeIdentifier = split[2];

  const articles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map( i => <ArticleItem key={i} num={i}/> )
  //Obviously change that to be real articles

  const selected = useSelector( ({ entities: { address, offices, officials } }) => {
    const official = Object.values(officials).filter( person => person.name === name )[0]
    const office = Object.values(offices).filter( off => off.officials.includes(official.id) )[0]
    return {
      address,
      official,
      office,
    }
  })

  if ( !selected.official ) {
    dispatch(fetchRepresentatives(zip))
  }

  const { official, office } = selected;

  const formatAddress = ({ line1, city, state, zip }) => (
    `${line1}, ${city}, ${state} ${zip}`
  )

  //formatting constants start here
  const email = selected.official && official.emails ? <a href={`mailto:${official.emails[0]}`}> email </a> : null

  const channels = selected.official ? official.channels.map( ( channel, i) => {
    switch (channel.type) {
      case "Facebook":
        return (
          <a key={ i } target="_blank" href={ `https://www.facebook.com/${channel.id}` } rel="noopener noreferrer" >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
        )
      case "Twitter":
        return (
          <a key={ i } target="_blank" href={ `https://twitter.com/${channel.id}` } rel="noopener noreferrer" >
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </a>
        )
      case "YouTube":
        return (
          <a key={ i } target="_blank" href={ `https://www.youtube.com/user/${channel.id}` } rel="noopener noreferrer" >
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </a>
        )
      default:
        return null;
    }
  }) : null

  const phones = selected.official ? official.phones.map ( (phone, i) => (
    <a href={ `tel:${phone}` } key={ i } >{phone}</a>
  ) ) : null

  const websites = selected.official ? official.urls.map( ( url, i) => (
    <a href={ url } key={ i }> Official Website </a>
  )) : null;

  return (
    <>
    { selected.official && selected.office ? (
    <div className="politician-show">
      <section className="main-info">
        
        <div className="flag">
          <div className="flag-top">
              <figure className="image">
               <div className="image-container">
                <img src={ official.photoUrl } alt={ official.name } />
                </div>
                <div className="alert"> { /* Only show alert if politician is up for re-election */ }
                  <span>
                    !
                  </span>
                </div>
              </figure>
              <aside>
                <div>
                  <span className="name">
                    { official ? official.name : "" }
                  </span>
                  <span>
                    { office ? office.name : "" } <span className={ official.party.slice(0,1).toLowerCase() }>( {official.party} )</span>
                  </span>
                </div>
                <div>
                  Up for election/ How long they've served/Unopposed? {/* fill in with info */}
                </div>
                <div>
                  Which interests/categories {/* fill in with info */}
                </div>
              </aside>
          </div>

          <aside className="contact">
            <span>
              { phones }
              { email }
            </span>
            <div>

            { channels }
            </div>
          </aside>

          <aside className="contact secondary">
            <p>
              { formatAddress(official.address[0]) }
            </p>
            <p>
              { websites }
            </p>
          </aside>
        </div>
        <div className="propublica">
          propublica info <br/>
          committee memberships <br/>
          blurb if non-existant <br/>
        </div>
      </section>

      <section className="news">
        <ul>
          { articles }
        </ul>
      </section>
    </div>
    ) : null }
    </>
  )
}

export default PoliticianShow;