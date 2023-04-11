$(function () {
  // alert("React:" + React);
  let obj = {
    level: 3,
    name: "Richard",
    height: 175,
  };

  // let root = ReactDOM.createRoot(
  //   document.getElementsByClassName("flexItem")[0]
  // );
  // root.render(<Form />);
  // let root2 = ReactDOM.createRoot(document.body);
  // root2.render(React.createElement(font, { level: 3 }));
  // ReactDOM.render(React.createElement(font, { level: 3 }), document.body);
});

class Font extends React.Component {
  render() {
    return (
      <h1 className="font" style={{ color: this.props.level }}>
        hello world {this.props.level}
      </h1>
    );
    // return React.createElement(
    //   "h" + this.props.level,
    //   null,
    //   this.props.content
    // );
  }
}

class fontList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxLine: 0, color: ["blue", "red", "green"] };
    for (let i = 0; i < 10; i++) {
      window.setTimeout(() => {
        this.setState((currentState, currentProp) => ({
          maxLine: currentState.maxLine + 1,
        }));
      }, i * 1000 + 2000);
    }
  }
  // componentWillMount() {
  //   alert("componentWillMount");
  // }
  // componentDidMount() {
  //   alert("componentDidMount");
  // }
  // componentWillUpdate() {
  //   alert("componentWillUpdate");
  // }
  // componentDidUpdate() {
  //   alert("componentDidUpdate");
  // }
  render() {
    let fontArr = [];
    for (let i = 1; i < this.state.maxLine; i++) {
      let letter = this.state.color[Math.floor(Math.random() * 3)];
      fontArr.push(
        // React.createElement(font, {
        //   level: i,
        //   content: letter,
        // })
        <Font level={letter}></Font>
      );
    }
    // return React.createElement("div", null, fontArr);
    return <div>{fontArr}</div>;
  }
}
{
  /* <form action="" id="form">
          <p>姓名：</p>
          <input id="name" name="name" type="text" />
          <p>email：</p>
          <input id="email" name="email" type="text" />
          <p>性別：</p>
          <input type="radio" name="gender" id="gender" value="男" />
          <span>男</span>
          <input type="radio" name="gender" id="gender" value="女" />
          <span>女</span>
          <p>您的回饋：</p>
          <textarea
            type="textarea"
            name="feedback"
            id="feedback"
            rows="5"
            cols="33"
          ></textarea>

          <input value="Submit" type="textarea" onclick="submitform()" />
        </form> */
}
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        value={this.state.value}
        name={this.props.name}
        type={this.props.type}
        id={this.props.id}
      ></input>
    );
  }
}
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="" id="form">
        <p>姓名：</p>
        <Input id="name" name="name" type="text" />
        <p>email：</p>
        <Input id="email" name="email" type="text" />
        <p>性別：</p>
        <Input type="radio" name="gender" id="gender" value="男" />
        <span>男</span>
        <Input type="radio" name="gender" id="gender" value="女" />
        <span>女</span>
        <p>您的回饋：</p>
        <textarea
          type="textarea"
          name="feedback"
          id="feedback"
          rows="5"
          cols="33"
        ></textarea>

        <input value="Submit" type="textarea" onclick="submitform()" />
      </form>
    );
  }
}

function submitform() {
  let dataArray = $("#form").serializeArray();
  let dataObj = [];
  $(dataArray).each(function (i, field) {
    dataObj[field.name] = field.value;
  });
  alert(`
  姓名：${dataObj["name"]}
  email：${dataObj["email"]}
  性別：${dataObj["gender"]}
  您的意見：${dataObj["feedback"]}

  已收到您的回饋！近期煩請留意我們的回信，感謝您！
  `);
}
