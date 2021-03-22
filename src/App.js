import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import NodeLegend from "./components/NodeLegend";
import Figure from "./components/Figure";

type Props = {};

type State = {
  spoilersVisible: boolean
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      spoilersVisible: false
    };
  }

  // noinspection JSMethodCanBeStatic
  renderMainPost() {
    let spoilerOrNot;
    let showSpoilerButton;
    if (!this.state.spoilersVisible) {
      spoilerOrNot = "spoiler";
      // showSpoilerButton = <WidgetButton highlighted={false} onClick={() => { this.setState({criticalThresholdVisible: true}); } } >Show spoilers</WidgetButton>
    } else {
      spoilerOrNot = "spoiler-revealed";
      // showSpoilerButton = <WidgetButton highlighted={false} onClick={() => { this.setState({criticalThresholdVisible: false}); } } >Hide spoilers</WidgetButton>
    }
    showSpoilerButton = (
      <label>
        <span style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            value={this.state.spoilersVisible}
            onChange={(e) => {
              this.setState({ spoilersVisible: e.target.checked });
            }}
          />{" "}
          Show spoilers
        </span>
      </label>
    );

    let exposed_you = <code className="code-exposed">you</code>;

    let susceptible = <code className="code-susceptible">Susceptible</code>;
    let infected = <code className="code-infectious">Infected</code>;
    let recovered = (
      <code className="code-removed">
        особи, які сприйняли інформації, але вона не вплинула на них
      </code>
    );
    let dead = (
      <code className="code-dead">
        особи, які сприйняли інформацію, та піддались впливу
      </code>
    );
    let selfQuarantined = (
      <code className="code-quarantined">Self-quarantined</code>
    );

    // noinspection HtmlRequiredAltAttribute
    return (
      <div className="post-content">
        <Figure>
          <Grid
            gridRows={90}
            gridCols={90}
            // highlight="transmissionRate"
            hospitalCapacityPct={0.05}
            nodeSize={5}
            nug={5}
            randomSeed={100}
            showAliveFraction={true}
            showAllControls={true}
            // showDaysPerStateControls={true}
            showDeaths={true}
            showTransmissionProbabilitySlider={true}
            showChanceOfIsolationAfterSymptomsSlider={true}
            // showPersonHoursSlider={true}
            // showTransmissionProbabilitySlider={true}
            // showTravelRadiusSlider={true}
            speed={0.002}
          />
        </Figure>
      </div>
    );
  }

  renderSubscribeForm() {
    return (
      <form
        method="post"
        action="https://meltingasphalt.us8.list-manage.com/subscribe/post?u=0bc9d741e167733d20c520ea6&amp;id=57ebd9b4a6"
        id="mc4wp-form-1"
        className="form mc4wp-form"
      >
        <input
          type="email"
          id="mc4wp_email"
          name="EMAIL"
          placeholder="Enter your email"
          required
        />
        <input type="submit" value="Subscribe" />
        <textarea
          name="_mc4wp_required_but_not_really"
          style={{ display: "none" }}
        />
        <input type="hidden" name="_mc4wp_form_submit" value="1" />
        <input type="hidden" name="_mc4wp_form_instance" value="1" />
        <input type="hidden" name="_mc4wp_form_nonce" value="8a45344b67" />
      </form>
    );
  }

  renderEndOfPostDivider(showTimestamp: boolean) {
    let timestamp = "";
    let divider = <span>——</span>;
    if (showTimestamp) {
      timestamp = "Originally published March 16, 2020.";
      divider = (
        <img
          src="https://meltingasphalt.com/wp-content/themes/responsive/core/images/flourish.svg"
          width={50}
          alt="——"
        />
      );
    }

    return (
      <div style={{ textAlign: "center" }}>
        <div className="end-of-post-divider">{divider}</div>
        <div className="signature-line">{timestamp}</div>
      </div>
    );
  }

  renderHeader() {
    return (
      <div id="header">
        <div id="logo" className="branded">
          <span className="site-name">
            <a
              href="https://meltingasphalt.com/"
              title="Melting Asphalt"
              rel="home"
            >
              &nbsp;&nbsp;
            </a>
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="main-container">
        <div className="header">{this.renderHeader()}</div>
        <div className="blank-l" />
        <div className="content">{this.renderMainPost()}</div>
        <div className="blank-r" />
        <div className="footer" />
      </div>
    );
  }
}

export default App;
