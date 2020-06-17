import React from "react";
import ArticleItem from "./article_item";

const PoliticianShow = (props) => {
  
  const articles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map( i => <ArticleItem key={i} num={i}/> )
  //Obviously change that to be real articles
  return (
    
    <div className="politician-show">
      <section className="main-info">
        
        <div className="flag">
          <div className="flag-top">
              {/* <img src={""} alt={"Politician Name"}/> fill in with info */}
              <figure className="image" />
              <aside>
                <div>
                  Name / Title {/* fill in with info */}
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
            office info/contact info {/* fill in with info */}
          </aside>

          <aside className="contact secondary">
            secondar contact info {/* fill in with info */}
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
  )
}

export default PoliticianShow;