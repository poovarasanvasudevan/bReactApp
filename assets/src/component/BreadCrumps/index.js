import React, {Component} from 'react';

export default class BreadCrump extends Component<*, *> {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="lia-quilt-column-alley lia-quilt-column-alley-single"
           style={{padding: "10px", borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
        <div className="container">
          <div className="atl-breadcrumbs">
            <ul className="lia-list-standard-inline">
              {this.props.dataList.map((sdata, index) => <li key={index} className="atl-breadcrumbs__crumb"><a
                href={sdata.url}>{sdata.text}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

