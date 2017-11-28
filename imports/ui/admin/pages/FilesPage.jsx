import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import FileUpload from '../components/meteor-files/FileUpload';

class FilesPage extends Component {
	static = {
		prefix: PropTypes.string,
		history: PropTypes.object
	};

	render() {
		return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as='h3'>Files</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <FileUpload />
      </div>
		);
	}
}

export default FilesPage;
