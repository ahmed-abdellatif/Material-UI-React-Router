import React from 'react';
import PropTypes from 'prop-types';
//import brace from 'brace';
//import AceEditor from 'react-ace';
import {diff as DiffEditor} from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';


const defaultValue = [
  `// Use this tool to display differences in code.
// Deletions will be highlighted on the left, insertions highlighted on the right.`,
  `// Use this too to show difference in code.
// Deletions will be highlighted on the left, insertions highlighted on the right.
// The diff highlighting style can be altered in CSS.
`
];

const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
];

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

function onChange(newValue) {
  console.log('change',newValue);
}


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      fontSize: 17,
      markers: {},
      mode: 'javascript',
    };
    this.onChange = this.onChange.bind(this);
    this.setMode = this.setMode.bind(this);
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  setMode(e) {
    this.setState({
      mode: e.target.value
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="field">
            <label>
                Need to Change Programming Languages?:
            </label>
            <p className="control">
              <span className="select">
                <select name="mode" onChange={this.setMode} value={this.state.mode}>
                  {languages.map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
          </div>

        </div>
        <div className="code-editor">
          <h2>My Editor</h2>
          <DiffEditor
            value={defaultValue}
            height="100%"
            width="100%"
            mode={this.state.mode}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default About;
