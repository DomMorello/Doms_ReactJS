import { React, Component } from "react";

class TOC extends Component {
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
              debugger;
            }.bind(this)}
            href={"/content" + data[i].id}
            data-id={data[i].id} //정해져있는거구나
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
