import React from 'react';
import {Alert, Panel, Image} from 'react-bootstrap';
import RoomList from './RoomList';

class SearchResult extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Panel>
                {this.props.loading ? <div>Loading...</div> : (
                    this.props.filteredList && this.props.filteredList.length <= 0 ? 
                    <NotFound /> :
                    <RoomList list={this.props.filteredList || this.props.roomList} />
                    )
                }
            </Panel>
        )
    }
}

const NotFound = () => (
  <div>
    {/*  
    <h1>¯\_(ツ)_/¯</h1>
    <Alert bsStyle="warning">
        Sorry, I found nothing here.
    </Alert>
    */}
    <Image responsive src="/images/found-no-room.jpg"/>
  </div>
);

SearchResult.propTypes = {
    roomList: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired,
}

SearchResult.defaultProps = {
    roomList: [
        {
            "id": "1629572913942011_1893634057535894",
            "post_owner": "Wai Phyo Aung",
            "description": "Master Room for short term Visit - Very Near Boon Lay Mrt\n\n*** Big Master Room with Air Con ***\n ( Table , Chair , Big Wardrobe , Dressing Table & Fan Provided)\n\n💵 $35 per person( Internet Wi- Fi free & all included) \n💵 More than 3 persons ( Negotiated price )\n\n🗓1 March to 8 March 2017 \n\n🚶🏻3min လမ္းေလ်ာက္ရံုနွင့္ Boonlay Mrt နဲ့ စားေသာက္ဆိုင္မ်ား , Jurong Point Shopping Mall သို့ ေရာက္ပါသည္ . ( အမွန္တကယ္ ၃ မိနစ္) \n🚊Mrt ဘူတာကို ကားစီးစရာမလို သျဖင့္အလည္လာသူမ်ား အထူးအဆင္ေျပေစသည္ \n👩‍👩‍👧‍👦မိသားစု , စံုတြဲ , သူငယ္ခ်င္း ေနနိင္ပါသည္\n\n**ေန႔ခင္းပိုင္းအတြက္ ပန္ကာေပးပါသည္\n**ေရခ်ိဴးခန္း ေရပူ ေရေအးစက္ ပါဝင္သည္\n**High Floor , Connor unit ( ေလဝင္ေလထြက္ေကာင္း , အထပ္ျမင့္ , ေထာင့္ခန္း) ျဖစ္ပါသည္ \n**ေရခဲေသတၲာ / microwave / ေရေႏြးအိုး / အဝတ္ေလ်ာ္စက္ အသံုးျပုနိုင္ပါတယ္\n** Cooking Allowed \n \n**အေသးစိတ္အခ်က္အလက္နဲ႔ ေစ်းႏႈန္းကို ph call. ျဖစ္ေစ / SMS ျဖစ္ေစ / Viber ျဖစ္ေစ ဆက္သြယ္ေမးျမန္းန္င္ပါသည္\n\nPh : ☎️ 8138 4733",
            "photos": ["https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/16939558_748015328691879_7323174279677831015_n.jpg?oh=f9bb81f0cec859c3c67c82b6a856fd3b&oe=592FBF4C"],
            "created_time": "2017-02-24T12:50:05+0000"
        },
    ],
    loading: true,
}

export default SearchResult;