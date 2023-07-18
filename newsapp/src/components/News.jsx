import React, { Component } from 'react'
import NewsItem from './NewsItem'

const articles=[
  {
      "source": {
          "id": null,
          "name": "AL.com"
      },
      "author": "Carol Robinson | crobinson@al.com",
      "title": "Carlee Russell: What we know after she vanished on I-459 in Hoover, returned home - AL.com",
      "description": "The 25-year-old told a 911 dispatcher and her family she saw a child wandering alone.",
      "url": "https://www.al.com/news/2023/07/carlee-russell-what-we-know-today-about-woman-who-vanished-on-i-459-in-hoover.html",
      "urlToImage": "https://www.al.com/resizer/HEtN76fhgqNHmARXWbSfCvnu6XE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/HTIVUUOMY5AHVJXJRVHL5NH4T4.jpg",
      "publishedAt": "2023-07-16T04:25:00Z",
      "content": "A 25-year-old woman vanished off the side of Interstate 459 in Hoover Thursday night after telling a 911 dispatcher and her family she saw a child wandering alone.\r\nThe search for Carlethia Nichole C… [+7703 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Yahoo Entertainment"
      },
      "author": "Yahoo Sports Staff",
      "title": "WNBA All-Star Game: Team Stewart beats Team Wilson behind Jewell Loyd's record-setting performance - Yahoo Sports",
      "description": "Follow the 2023 WNBA All-Star Game live with Yahoo Sports.",
      "url": "https://sports.yahoo.com/wnba-all-star-game-team-stewart-beats-team-wilson-behind-jewell-loyds-record-setting-performance-023412038.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qxqwDKvbkFRLdZQOvRWPcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/92bc72b0-237a-11ee-bbbf-426f5a5c945f",
      "publishedAt": "2023-07-16T03:47:00Z",
      "content": "Jewell Loyd is the WNBA's leading scorer this season, so it was only fitting that she scored a record 31 points to lead Team Stewart past Team Wilson 143-126 in the 2023 WNBA All-Star Game on Saturda… [+660 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Deadline"
      },
      "author": "Armando Tinoco",
      "title": "Elon Musk Makes Two Important Changes On Twitter Following Launch Of Ad Revenue Sharing Program - Deadline",
      "description": "Elon Musk was busy over the weekend handling requests from followers on Twitter. The social media platform recently introduced an ad revenue-sharing program that rewards creators. However, not all …",
      "url": "https://deadline.com/2023/07/elon-musk-makes-two-important-changes-twitter-ad-revenue-sharing-program-1235439143/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2023/07/twitter-elon-musk.jpg?w=1024",
      "publishedAt": "2023-07-16T03:39:00Z",
      "content": "Elon Musk was busy over the weekend handling requests from followers on Twitter. The social media platform recently introduced an ad revenue-sharing program that rewards creators.\r\nHowever, not all c… [+2311 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Brian Todd, Artemis Moshtaghian",
      "title": "Police say person seen in doorbell video was not Pennsylvania inmate escapee - CNN",
      "description": "Police in Pennsylvania said they erroneously identified a person seen in recently released doorbell footage as prison escapee Michael Burham, who was taken into custody Saturday, according to authorities.",
      "url": "https://www.cnn.com/2023/07/14/us/michael-burham-pa-jail-escapee-friday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230707122743-michael-charles-burham.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-16T02:10:00Z",
      "content": "Police in Pennsylvania said they erroneously identified a person seen in recently released doorbell footage as prison escapee Michael Burham, who was taken into custody Saturday, according to authori… [+1322 chars]"
  },
  {
      "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Many dead in S Korea as flash floods trap 15 vehicles in tunnel - Al Jazeera English",
      "description": "Rescuers find seven bodies in central Osong as they scramble to reach people trapped in flooded underpass.",
      "url": "https://www.aljazeera.com/news/2023/7/16/many-dead-in-s-korea-as-flash-floods-trap-15-vehicles-in-tunnel",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/2023-07-16T003630Z_690158939_RC2042AYEN7H_RTRMADP_3_ASIA-WEATHER-SOUTHKOREA-1689471089.jpg?resize=1920%2C1440",
      "publishedAt": "2023-07-16T02:05:22Z",
      "content": "Rescue workers in South Korea have recovered seven bodies from a bus trapped in a flooded underground tunnel, according to media reports, as days of torrential rains caused widespread flooding, lands… [+3665 chars]"
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "JOSEF FEDERMAN Associated Press",
      "title": "Israel's Netanyahu is rushed to hospital for dehydration. Hours later, he says he feels 'very good' - ABC News",
      "description": "Israel's Prime Minister Benjamin Netanyahu says he feels “very good.”",
      "url": "https://abcnews.go.com/International/wireStory/israels-netanyahu-rushed-hospital-office-good-condition-101307985",
      "urlToImage": "https://s.abcnews.com/images/International/wirestory_8d5293cb40fa35b015c4b5b7bab60aeb_16x9_992.jpg",
      "publishedAt": "2023-07-16T01:35:35Z",
      "content": "JERUSALEM -- Israeli Prime Minister Benjamin Netanyahu on Saturday declared that he feels very good after he was rushed to the hospital for what doctors said likely was dehydration. \r\nBut doctors ord… [+2298 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Fox Business"
      },
      "author": "Sarah Rumpf-Whitten",
      "title": "United Airlines pilots reach 'historic' agreement in principle, with big pay raises, other perks - Fox Business",
      "description": "United Airlines and the union representing its pilots said Saturday they reached a \"historic\" agreement on a contract that will raise pilot pay up to 40% and include other benefits.",
      "url": "https://www.foxbusiness.com/economy/united-airlines-pilots-reach-historic-agreement-principle-big-pay-raises-perks",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/a1669c6b-4.jpg?ve=1&tl=1",
      "publishedAt": "2023-07-16T01:33:18Z",
      "content": "United Airlines and the union representing its pilots said Saturday they reached agreement in principle on a contract that will raise pilot pay by up to 40% over four years.\r\nOver the course of the p… [+2962 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Tumaini Carayol",
      "title": "Unseeded Marketa Vondrousova stuns Ons Jabeur to win Wimbledon title - The Guardian",
      "description": "Marketa Vondrousova defeated Ons Jabeur in straight sets to become the first unseeded player to win the Wimbledon women’s single title",
      "url": "https://www.theguardian.com/sport/2023/jul/15/unseeded-marketa-vondrousova-stuns-ons-jabeur-to-win-wimbledon-title",
      "urlToImage": "https://i.guim.co.uk/img/media/10c0e7a55399303019bc59e57d13027fc6173ccc/0_212_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=c4ab63873d89ac46605fa32e83a7ec8a",
      "publishedAt": "2023-07-16T01:30:00Z",
      "content": "In the four years since Marketa Vondrousova first reached a grand slam final, at the French Open, womens tennis has seen significant changes. As many of the top players of previous generations have r… [+11351 chars]"
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "JACK DURA Associated Press",
      "title": "Fargo police don't yet have a motive for the shooting that killed 1 officer and injured 2 - ABC News",
      "description": "Fargo's police chief says a gunman opened fire on police and firefighters “for no known reason” as they responded to a traffic crash in North Dakota",
      "url": "https://abcnews.go.com/US/wireStory/officer-killed-2-police-injured-shooting-left-suspect-101305449",
      "urlToImage": "https://s.abcnews.com/images/US/wirestory_be4b9ecde48d4178893e4fe4486bbb12_16x9_992.jpg",
      "publishedAt": "2023-07-16T01:11:21Z",
      "content": "FARGO, N.D. -- A gunman opened fire on police and firefighters for no known reason as they responded to a traffic crash in North Dakota, killing one officer and wounding two others before another off… [+4028 chars]"
  },
  {
      "source": {
          "id": "espn",
          "name": "ESPN"
      },
      "author": "Dave McMenamin",
      "title": "LeBron James to change jersey number back to 23 in honor of Bill Russell - ESPN - ESPN",
      "description": "LeBron James will change his uniform number from No. 6 back to No. 23 for the upcoming season in honor of Bill Russell. The NBA retired No. 6 after Russell's death last summer.",
      "url": "https://www.espn.com/nba/story/_/id/38016718/lebron-james-change-jersey-number-back-23-honor-bill-russell",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0711%2Fr568660_1296x729_16%2D9.jpg",
      "publishedAt": "2023-07-16T00:57:43Z",
      "content": "LOS ANGELES -- In a nod to Boston Celtics legend Bill Russell, LeBron James will change his uniform number from 6 back to 23 for the Los Angeles Lakers this coming season, Rich Paul of Klutch Sports … [+2363 chars]"
  },
  {
      "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
      },
      "author": "Ruby Cramer",
      "title": "Robert F. Kennedy Jr. suggests covid was designed to spare Jews, Chinese people - The Washington Post",
      "description": "Democratic presidential candidate Robert F. Kennedy Jr. drew condemnation for promoting a conspiracy theory that the coronavirus could have been targeted to spare Ashkenazi Jews and Chinese people.",
      "url": "https://www.washingtonpost.com/nation/2023/07/15/robert-kennedy-jr-covid-conspiracy/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RBY2RMMTMXNXBKCBRASLCV7U44.JPG&w=1440",
      "publishedAt": "2023-07-16T00:40:00Z",
      "content": "Comment on this story\r\nComment\r\nDemocratic presidential candidate Robert F. Kennedy Jr. advanced a dangerous conspiracy theory this week that the coronavirus could have been a bioweapon deliberately … [+4610 chars]"
  },
  {
      "source": {
          "id": "cbs-news",
          "name": "CBS News"
      },
      "author": "KCAL-News Staff",
      "title": "Lakeview: Rabbit Fire rips through 7,000 acres of brush; evacuation orders in place - CBS Los Angeles",
      "description": "CAL FIRE/Riverside County Fire Department units continue battling a 7,600-acre brush fire Saturday morning that broke out Friday in the area of Jack Rabbit Trail and Gilman Springs Road, just east of Mystic Lake",
      "url": "https://www.cbsnews.com/losangeles/news/lakeview-rabbit-fire-rips-through-7600-acres-of-brush-evacuation-orders-in-place/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/07/15/65c7234e-c158-412f-b96e-240d32b99b32/thumbnail/1200x630/12203c4f509f47ae63e718bed92da966/rabbit-fire.jpg?v=b9ad248140817530b57bedd1355bcccb",
      "publishedAt": "2023-07-16T00:25:00Z",
      "content": "CAL FIRE/Riverside County Fire Department units continue battling a roughly 7,600-acre brush fire burning in the area of Jack Rabbit Trail and Gilman Springs Road in the community of Lakeview, southe… [+3055 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Page Six"
      },
      "author": "Alix Breeden",
      "title": "'RHOC' alum Braunwyn Windham-Burke engaged to girlfriend Jennifer Spinner - Page Six",
      "description": "The “Real Housewives of Orange County” alum filed for divorce from Sean Burke in 2022 after 23 years of marriage, however, the divorce is not finalized.",
      "url": "https://pagesix.com/2023/07/15/rhoc-alum-braunwyn-windham-burke-engaged-to-girlfriend-jennifer-spinner/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/07/RHOC-alum-Braunwyn-Windham-Burke-engaged-to-girlfriend-Jennifer-Spinner.jpg?quality=75&strip=all&w=1200",
      "publishedAt": "2023-07-15T23:13:00Z",
      "content": "Braunwyn Windham-Burke and girlfriend Jennifer Spinner are officially engaged.\r\n“I’ve never been happier,” the “Real Housewives of Orange County” alum said to People on Saturday, confirming the news … [+3274 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Emma Tucker",
      "title": "A suspect was charged in the Gilgo Beach serial killings cold case. Here’s a timeline of the case and the investigation - CNN",
      "description": "For more than a decade, a string of unsolved killings known as the Gilgo Beach murders terrorized residents and confounded authorities on Long Island’s South Shore after a woman’s 2010 disappearance led investigators to find at least 10 sets of human remains …",
      "url": "https://www.cnn.com/2023/07/15/us/gilgo-beach-murder-case-timeline/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230714164637-04-gilgo-beach-murders-investigations-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-15T22:56:00Z",
      "content": "For more than a decade, a string of unsolved killings known as the Gilgo Beach murders terrorized residents and confounded authorities on Long Islands South Shore after a womans 2010 disappearance le… [+10472 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Sports Illustrated"
      },
      "author": "Marc Delucchi",
      "title": "MLB trade rumors: Angels \"in listening mode\" on Shohei Ohtani - Sports Illustrated",
      "description": "MLB Network's Jon Morosi said the Angels are finally listening to offers for two-way megastar Shohei Ohtani.",
      "url": "https://www.si.com/mlb/giants/news/shohei-ohtani-trade-rumors-sf-giants-dodgers-jon-morosi-angels-listening",
      "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTk5MDQ3NjgxNTQ3NDQ2MjI4/usatsi_20974807.jpg",
      "publishedAt": "2023-07-15T22:31:55Z",
      "content": "Nothing could shake up the MLB trade deadline more than the Los Angeles Angels trading two-way superstar Shohei Ohtani. And, according to MLB Network insider Jon Morosi, the Angels have taken a signi… [+2505 chars]"
  },
  {
      "source": {
          "id": "independent",
          "name": "Independent"
      },
      "author": "Graeme Massie",
      "title": "At least four killed in Georgia mass shooting as police hunt 'active shooter' - The Independent",
      "description": "Suspected gunman named by authorities as 40-year-old Andre Longmore",
      "url": "https://www.independent.co.uk/news/world/americas/crime/georgia-henry-county-mass-shooting-police-b2375991.html",
      "urlToImage": "https://static.independent.co.uk/2023/07/15/20/Shooting%20%281%29.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-07-15T22:01:56Z",
      "content": "Sign up to our free US news bulletin sent straight to your inbox each weekday morning\r\nSign up to our free morning US email news bulletin\r\nAt least four people have been killed in a mass shooting in … [+2265 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Brittany Kasko",
      "title": "Fossil hunter spots 450,000-year-old mammoth tusk while at quarry: 'Sticking out like a sore thumb' - Fox News",
      "description": "A paleontologist recently discovered a 4-foot-long mammoth tusk while on a quarry dig. The rare find is thought to be 450,000 years old. \"I could not believe my eyes,\" said Jamie Jordan.",
      "url": "https://www.foxnews.com/lifestyle/fossil-find-paleontologist-spots-450000-year-old-mammoth-tusk-quarry-sore-thumb",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/palaeontologist-1036625.jpg",
      "publishedAt": "2023-07-15T21:11:00Z",
      "content": "A fossil hunter found a 450,000-year-old mammoth tusk while on a recent visit to a local quarry. \r\nJamie Jordan, 33, was at a quarry in Cambridgeshire, near Peterborough, England, roughly 75 miles no… [+3223 chars]"
  },
  {
      "source": {
          "id": "fortune",
          "name": "Fortune"
      },
      "author": "Lance Lambert",
      "title": "Morningstar: 15 housing markets with the most correction risk—and the 15 with the least risk - Fortune",
      "description": "Morningstar: \"Buyer exuberance during the pandemic, aided by ultralow borrowing costs, pushed home prices to an unmaintainable level in some markets.\"",
      "url": "https://fortune.com/2023/07/15/housing-market-home-price-correction-risk-calculated-by-morningstar/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-15-at-7.29.11-PM.png?resize=1200,600",
      "publishedAt": "2023-07-15T21:05:00Z",
      "content": "While the lack of homes for sale is a clear tailwind for U.S. home prices, deteriorated housing affordabilitythe result of mortgage rates spiking from 3% to over 6% just after national house prices s… [+4580 chars]"
  },
  {
      "source": {
          "id": "ign",
          "name": "IGN"
      },
      "author": "Adam Bankhurst",
      "title": "James Cameron Denies the 'Offensive' Rumors About Him Making a Titanic Submersible Disaster Film - IGN",
      "description": "Titanic director James Cameron has denied the \"offensive\" rumors that said he was in talks to make a disaster film or series about the tragic story of OceanGate's Titan submersible.",
      "url": "https://www.ign.com/articles/james-cameron-denies-the-offensive-rumors-about-him-making-a-titanic-submersible-disaster-film",
      "urlToImage": "https://assets-prd.ignimgs.com/2023/07/15/titan-1689453678692.png?width=1280",
      "publishedAt": "2023-07-15T21:01:39Z",
      "content": "Titanic director James Cameron has denied the \"offensive\" rumors that said he was in talks to make a disaster film about the tragic story of OceanGate's Titan submersible. \r\nCameron took to Twitter t… [+1894 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Post"
      },
      "author": "Angela Barbuti, Rich Calder",
      "title": "Record-setting heat wallops South and West, with more rain in the Northeast - New York Post ",
      "description": "There will be record-setting heat in the south and west this weekend, while rain heads to New York City.",
      "url": "https://nypost.com/2023/07/15/record-setting-heat-wallops-south-and-west-with-more-rain-in-the-northeast/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-j29oumpej-1689453877578.jpg?quality=75&strip=all&1689439519&w=1024",
      "publishedAt": "2023-07-15T20:48:00Z",
      "content": "More than 90 million Americans in the West and South will remain under heat alerts Sunday, with dozens of cities there expected to hit record-shattering, triple-digit temperatures.\r\nSections of South… [+2483 chars]"
  }
]
export default class News extends Component {
  constructor(){
    super();
    console.log('Constructor');
    this.state={
      articles:this.articles,
      loading:false    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
            
            
            <div className="col-md-3 mx-4">
                <NewsItem title='My title' description='This is a news card' url="https://s.yimg.com/ny/api/res/1.2/qxqwDKvbkFRLdZQOvRWPcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/92bc72b0-237a-11ee-bbbf-426f5a5c945f" class="card-img-top" alt="Image Here" />
            </div>
            
        </div>    
      </div>
    )
  }
}
