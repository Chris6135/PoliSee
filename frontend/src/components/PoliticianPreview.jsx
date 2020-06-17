import React from 'react';

const PoliticianPreview = ({politician}) => {
  return (
    <div className="politician-preview">
      <div className="politician-preview-name">
        {politician.name}
      </div>
      <div>
        <div className="politician-preview-title">

        </div>
        <div className="politician-preview-party">

        </div>
      </div>
      <div className="politician-preview-img">
        This will become the image of the politican
      </div>
      <div className="politician-preview-phone">

      </div>
      <div className="politician-preview-email">

      </div>
    </div>
  )
}

export default PoliticianPreview;