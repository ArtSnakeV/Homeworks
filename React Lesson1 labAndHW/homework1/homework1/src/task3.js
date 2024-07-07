import city from './city.jpg';

export default function T3(){
    return(
        <>
            <div class="container">                 
                <h1>City of Melbourne</h1>
                <div class="mimg">
                    <img src={city} alt="Photo of Melbourne" />
                </div>
                <p><b>Melbourne</b> (⫽ˈmɛlbərn⫽ ⓘ MEL-bərn; locally [ˈmælbən], Boonwurrung/Woiwurrung: Narrm or Naarm) is the capital and most populous city of the Australian state of Victoria, and the second-most populous city in Australia, after Sydney. Its name generally refers to a 9,993 km2 (3,858 sq mi) metropolitan area also known as Greater Melbourne, comprising an urban agglomeration of 31 local municipalities, although the name is also used specifically for the local municipality of City of Melbourne based around its central business area.</p>

                <p>The metropolis occupies much of the northern and eastern coastlines of Port Phillip Bay and spreads into the Mornington Peninsula, part of West Gippsland, as well as the hinterlands towards the Yarra Valley, the Dandenong Ranges, and the Macedon Ranges. Melbourne has a population over 5 million (19% of the population of Australia, as of the 2021 census), mostly residing to the east of the city centre, and its inhabitants are commonly referred to as "Melburnians".</p>

                <p>The area of Melbourne has been home to Aboriginal Victorians for over 40,000 years and serves as an important meeting place for local Kulin nation clans. Of the five peoples of the Kulin nation, the traditional custodians of the land encompassing Melbourne are the Boonwurrung, Wathaurong and the Wurundjeri peoples. A short-lived penal settlement was built in 1803 at Port Phillip, then part of the British colony of New South Wales. However, it was not until 1835, with the arrival of free settlers from Van Diemen's Land (modern-day Tasmania), that Melbourne was founded. It was incorporated as a Crown settlement in 1837, and named after William Lamb, 2nd Viscount Melbourne, who was then Prime Minister of the United Kingdom. In 1851, four years after Queen Victoria declared it a city, Melbourne became the capital of the new colony of Victoria. During the 1850s Victorian gold rush, the city entered a lengthy boom period that, by the late 1880s, had transformed it into one of the world's largest and wealthiest metropolises.[19][20] After the federation of Australia in 1901, Melbourne served as the interim seat of government of the new nation until Canberra became the permanent capital in 1927. Today, it is a leading financial centre in the Asia-Pacific region and ranked 32nd globally in the March 2022 Global Financial Centres Index.</p>
            </div>
        </>
    );
}