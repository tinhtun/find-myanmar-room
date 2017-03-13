import React from 'react';
import './App.css';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import SearchResult from './components/SearchResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       room_list: [],
       filtered_list: null,
       loading: true,
    }
  }

  filterSearchResult(filter) {
    let filterWords = filter.split(" ").join("|");
    console.log(filterWords);
    let regExp = new RegExp("(" + filterWords + ")", "ig");
    let filteredResult = this.state.room_list.filter(
      (item) => {
        console.log("filterWords = " + filterWords);
        let matches = item.description && item.description.match(regExp);
        console.log("match = " + matches)
        return matches !== undefined && matches !== null;
      }
    );
    let clone = Object.assign({}, this.state);
    Object.assign(clone, {filtered_list: filteredResult, loading: false})
    console.log("Clone...");
    console.log(clone);
    this.setState(clone);
  }

  updateSearchResult(resultList) {
    let roomList = resultList.filter(item => item.type === "status" || item.type === "photo")
      .map((item, index) => 
        ({
          id: item.id,
          post_owner: item.from.name,
          post_type: item.type,
          description: item.message,
          source_url: item.permalink_url,
          updated_time: item.updated_time,
          photos: []
        })
    )
    this.setState({ room_list: roomList, loading: false });

    roomList.forEach((item, index) => {
      if (item.post_type === "photo") {
        this.fetchPhotos(index, item.id)
      }
    });
  }


  fetchPhotos(index, postId) {

    fetch("https://graph.facebook.com/v2.8/" + postId + "/attachments?access_token=274895666287221|ddrK2Q5DA7O-U1b_hG1fj3EyeQM")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(
        (json) => {
          let photoSources = []
          if (json.data[0].media) {
            photoSources = [json.data[0].media.image.src]
          } else if (json.data[0].subattachments.data) {
            photoSources = json.data[0].subattachments.data.map(item => item.media.image.src);
          } else {
            console.log(postId + " has no photos")
          }
          let clone = this.state.room_list.slice(0);
          clone[index].photos = photoSources;
          this.setState({ room_list: clone, loading: false });
        }
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    if (this.state.room_list === undefined || this.state.room_list.length === 0) {
      fetch('https://graph.facebook.com/v2.8/1629572913942011/feed?fields=id,from,message,description,type,picture,permalink_url,updated_time&icon_size=16&access_token=274895666287221|ddrK2Q5DA7O-U1b_hG1fj3EyeQM&limit=100')
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(
        (json) => {
          this.updateSearchResult(json.data)
        }
        )
        .catch(function (error) {
          console.log(error);
        });
    }

  }

  render() {
    return (
      <div className="container">
        <NavigationMenu />
        <Header onSearch={this.filterSearchResult.bind(this)} />
        <SearchResult roomList={this.state.room_list || []} filteredList={this.state.filtered_list} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
