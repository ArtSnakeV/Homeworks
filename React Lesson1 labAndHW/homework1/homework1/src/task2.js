import iman from "./ironman.jpg";

export default function T2(){
    return(
        <>
            <h1>Iron-man</h1>
            <div className="mimg">
                <img src={iman} alt="Iron-Man photo" />
            </div>
            


            <div class="container">
                <h2>About IRON MAN</h2>
                <p>Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. He made his first appearance in Tales of Suspense #39 (1963).</p>
                
                <h2>Powers and Abilities</h2>
                <p>Iron Man's powered armor suit has many weapons and other technological devices that originally appeared in the comics, including: repulsor rays that shoot from the palms of his gauntlets; a uni-beam projector in his chest; and miniature versions of most of the weapons the armor carries, including a flamethrower, and a radio—a "hotline" corresponding to the red phone on Batman's utility belt. The suit is powered by a compact fusion reactor.</p>
            </div>
        </>
        
    );
}