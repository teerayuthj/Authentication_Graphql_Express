import React from "react";

import Headers from "./Header";

class mainLayout extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <section>
          <Headers />
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default mainLayout;
