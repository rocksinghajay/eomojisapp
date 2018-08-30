import React, { PureComponent } from 'react';

import Header from './components/Header'
import SearchInput from './components/SearchInput'
import SearchedEmojisResult from './components/SearchedEmojisResult'

import filterEmojis from './utils/filterEmojis'

class App extends PureComponent {

	state = {

		filteredEmojis: filterEmojis('', 20)
	}

	handleInputSearch = event => {

		this.setState({
			filteredEmojis: filterEmojis(event.target.value, 20)
		})
	}

  render() {

    return (

      <div className="App">

        <Header />
        <SearchInput textChange={this.handleInputSearch} />
        <SearchedEmojisResult emojisData={this.state.filteredEmojis}/>

      </div>
    );
  }
}

export default App;
