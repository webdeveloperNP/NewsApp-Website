import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class News extends Component {
    articles=
    [
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Heatwave: Italy's major cities on red heat alert",
            "description": "Parts of Sardinia and Sicily will be the hottest in Europe with highs of 46C or 47C.",
            "url": "http://www.bbc.co.uk/news/worldeurope66242277",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/151DB/production/_130419468_waterfountainitaly.png",
            "publishedAt": "20230719T09:07:22.6122554Z",
            "content": "Red alerts for extreme heat are in place in most of Italy's main cities as a heatwave intensifies in Europe. \r\nTemperatures are expected to peak on Wednesday, with 23 cities on high alert  from Trie… [+4325 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine war: Crimea depot blasts force villagers to flee",
            "description": "More than 2,000 people are evacuated in an incident that closes a key highway in occupied Crimea.",
            "url": "http://www.bbc.co.uk/news/worldeurope66242446",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1429F/production/_130419528_e535e67ea63295e11b6411a253b4a033e8ef264e6_0_2369_13341000x563.jpg",
            "publishedAt": "20230719T08:22:18.0976133Z",
            "content": "More than 2,000 residents are being evacuated from four villages in Russianoccupied Crimea after a fire that triggered hours of explosions at a nearby ammunition depot.\r\nRussianinstalled officials … [+1970 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Travis King: What we know so far about North Korea's detention of a US soldier",
            "description": "A soldier who crossed the border from South Korea was reportedly facing disciplinary action.",
            "url": "http://www.bbc.co.uk/news/worldasia66240928",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/172FB/production/_130417949_acfd03a36758e6a8f74be033c88cc76647f3151b0_109_5616_31591000x563.jpg",
            "publishedAt": "20230719T06:52:21.1756823Z",
            "content": "A US soldier is being held in North Korea after crossing the border from South Korea without authorisation, the US military has confirmed.\r\nThe crisis comes during a particularly tense time with the … [+3634 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Travis King: US military investigates after soldier crosses into North Korea",
            "description": "The soldier crossed the border \"wilfully, of his own volition\" the Pentagon has said.",
            "url": "http://www.bbc.co.uk/news/live/worldasia66234882",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbcmorphnewswafpagemeta/5.3.0/bbc_news_logo.png",
            "publishedAt": "20230719T01:07:23.0038689Z",
            "content": "We know the soldier crossed the concrete demarcation line\r\nthat separates North and South Korea while on an organised tour of the border.\r\nHe was visiting the sensitive, but unarmed Joint Security\r\nA… [+1090 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Michigan attorney general files charges in fake elector scheme",
            "description": "Sixteen people have been charged for alleged efforts to reverse Joe Biden 2020 election win.",
            "url": "http://www.bbc.co.uk/news/worlduscanada66239857",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breakinglargepromonc.png",
            "publishedAt": "20230718T21:22:20.4492603Z",
            "content": "Michigan's attorney general has announced charges against 16 people for their role in an alleged false electors scheme after the 2020 election. \r\nUS presidents are technically elected by slates of el… [+756 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Tupac Shakur: Police search house over 1996 killing",
            "description": "Nevada police search a Las Vegas home as part of an investigation into the rapper's 1996 killing.",
            "url": "http://www.bbc.co.uk/news/worlduscanada66240750",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C973/production/_130417515_gettyimages883992172.jpg",
            "publishedAt": "20230718T21:22:18.4560211Z",
            "content": "Police in Nevada have confirmed they served a search warrant this week in connection with the unsolved killing of rapper Tupac Shakur.\r\nDetectives carried out the search at a home in Henderson, a sub… [+1304 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Gilgo Beach murders: Over 200 guns taken from suspect's home",
            "description": "Other objects reportedly taken by police from the house include a lifesized doll in a glass case.",
            "url": "http://www.bbc.co.uk/news/worlduscanada66205088",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/147F6/production/_130385938_gettyimages1532804417.jpg",
            "publishedAt": "20230718T18:22:23.0573518Z",
            "content": "Police have removed up to 300 guns among potential evidence from the home of the suspect accused of murdering three women in Long Island.\r\nRex Heuermann, 59, has pleaded not guilty to killing Megan W… [+1940 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US heatwave sees hospitals use bodybag ice treatment",
            "description": "Hospitals see an influx of patients suffering extreme effects as heat hits 37C (110F) in Phoenix.",
            "url": "http://www.bbc.co.uk/news/worlduscanada66237583",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/882D/production/_130416843_lasvegasheat.jpg",
            "publishedAt": "20230718T18:22:20.3807117Z",
            "content": "An unrelenting heatwave continues to scorch much of the southern US, leaving more than 90 million Americans under a heat advisory. \r\nIn Phoenix, temperatures are expected to be above 110F (37C) for t… [+3851 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Heatwave hits homeless: ‘I cry all the time'",
            "description": "Unhoused people reportedly make up half of all heatassociated deaths in the United States.",
            "url": "http://www.bbc.co.uk/news/worlduscanada66239388",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1485D/production/_130416048_p0g1l601.jpg",
            "publishedAt": "20230718T16:37:21.850049Z",
            "content": "Phoenix, Arizona, a desert city known for intense temperatures, is breaking records this year for its prolonged stretch of extreme heat.\r\nThe weather does not impact everyone the same and unhoused pe… [+79 chars]"
        },
        {
            "source": {
                "id": "bbcnews",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Trump says he expects indictment in election probe",
            "description": "Mr Trump post that he was told to report to a grand jury, \"which almost always means an Arrest\".",
            "url": "http://www.bbc.co.uk/news/worlduscanada66236837",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breakinglargepromonc.png",
            "publishedAt": "20230718T14:07:22.6621114Z",
            "content": "Former US President Donald Trump has said he expects to be arrested by a federal investigation into the 6 January 2021 riot at the Capitol.\r\nIn a post on his social media website, he said he was info… [+708 chars]"
        }
            
]

static dafaultProps = {
    country:'us',
    pageSize:10,
    category:'general'
  };

static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  };

constructor()
    {
    super();
    console.log('Constructor');
    this.state={
    articles:this.articles,
    loading:false,
    page:1    }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f5426b4d1db4a34a0eefb9f483ed1c3&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        //console.log(parseData.totalResults);
        this.setState({articles : parseData.articles,
            totalResults:parseData.totalResults,
            loading:false
            //this is used to know if next page exists or not
        });
    }

    handlePreviousClick=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f5426b4d1db4a34a0eefb9f483ed1c3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        //console.log(parseData);
        //this.setState({articles : parseData.articles});/*Can be clubbed as below */
        this.setState({
            page:this.state.page-1,
            articles : parseData.articles,
            loading:false
            })

    }
    handleNextClick=async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {//Math.ceil -> 4.6=5 , 2.3=3
        //Math.ceil(this.state.totalResults/pageSize) tells total no. of pages we require to publish all our content
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f5426b4d1db4a34a0eefb9f483ed1c3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        //console.log(parseData);
        //this.setState({articles : parseData.articles});/*Can be clubbed as below */
        this.setState({
            page:this.state.page+1,
            articles : parseData.articles,
            loading:false
        })
        }
    

    }

render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        {/*this tells to only display <spinner> if loading is true*/}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
        //this.setState({loading:true}) is add to only display content once the loading is completed, o all content is display at once rather than in sequence(order of data recieved)
        //!this.setState({loading:true})-> means if the loading is going on-> halt the display-> begin once loadinh completes
        return(
            
            <div className="col-md-3 mx-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} urlToImage={element.urlToImage} newsUrl={element.url} class="card-img-top" alt="Image Here" />
            </div>
            
            )


        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-3" onClick={this.handlePreviousClick}>&larr; Prevous</button>
        {/*this is used bcz we are in a casss component*/}
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>  
      </div>
    )
  }
}

