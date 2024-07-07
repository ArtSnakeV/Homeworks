import kiss from './kiss.png';

export default function Mgroup(){
    return(
        <>
            <header>
            <h1>The Hardkiss</h1>
            </header>
            <main>
                
                <img src={kiss} alt="Group photo" />
                <p>The Hardkiss (stylised as The HARDKISS) is a Ukrainian rock band formed in 2011, consisting of Julia Sanina (vocals), Valeriy Bebko (guitar), Klim Lysiuk (bass), and Yevhen Kibeliev (drums).[1] They participated in the Ukrainian national selection[2] for the Eurovision Song Contest 2016 with the song "Helpless",[3] placing second in the final.[4] To date, the Hardkiss has released four studio albums, one EP, one live album, and numerous singles.</p>
                <h2>History</h2>
                
                <p>The Hardkiss was formed in 2011 by husband-and-wife duo Julia Sanina (vocals) and Valeriy Bebko (guitar), initially under the name Val & Sanina.[5] In September of that year, they released their debut video, "Babylon",[6] and they opened for English synthpop duo Hurts in Kyiv on 20 October.[5] On 18 November, they opened for American singer Solange Knowles, also in Kyiv.[7]</p>

                <p>In 2012, the Hardkiss were nominated for the MTV Europe Music Award for Best Ukrainian Act.[8] The same year, the band performed at MIDEM festival on 29 January.[9][10]</p>

                <p>In 2013, the Hardkiss won two awards—Best New Act and Best Music Video (this went to producer Valeriy Bebko, for the video to "Make-Up")—at the Ukrainian national music award, YUNA.[11] They also opened the Muz-TV Music Awards on 7 June.[12] That year, the Hardkiss became "voice and face" of Pepsi in Ukraine. The band took part in a tour, Pepsi Stars of Now, covering sixteen cities.[13]</p>

                <p>In 2015, the Hardkiss was nominated for the YUNA music award again and won in two categories: Best Music Album, for Stones and Honey, and Best Song, for "Stones".[14]</p>

                <p>In 2016, they took part in the Ukrainian national selection for Eurovision Song Contest 2016.</p>

                <p>In 2018, the band won two awards at YUNA: Best Rock Band and Best Song in Ukrainian, for "Zhuravli".[15]</p>
            
                <h1 className="mheader">Band members (Current)</h1>

                <ul className = "band-list">
                    <li>Julia Sanina – vocals (2011–present)</li>
                    <li>Valeriy "Val" Bebko – guitar (2011–present)</li>
                    <li>Klim Lysiuk – bass guitar (2016–present)</li>
                    <li>Yevhen Kibeliev – drums (2019–present)</li>
                </ul>
                

                <h1  className="mheader">Discography</h1>
                <h1>Studio albums</h1>
                <ul class = "band-list">
                    <li>Stones and Honey (2014)</li>
                    <li>Perfection Is a Lie (2017)</li>
                    <li>Залізна ластівка (2018)</li>
                    <li>Жива і не залізна [uk] (2021)</li>
                    <li>EPs</li>
                    <li>Cold Altair (2015)</li>
                    <li>Live albums</li>
                    <li>Акустика. Live (2020)</li>
                </ul>
            
            
            </main>
        </>
    );
    
}

