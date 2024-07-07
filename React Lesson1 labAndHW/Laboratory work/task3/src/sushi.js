import f from "./1.jpg";
import s from "./2.jpg";
import t from "./3.jpg";

export default function Sushi(){
    return(
        <>
           <div className="container">
                <h1>Sushi Rolls (Maki Sushi – Hosomaki) 細巻き</h1>
                <div className="dish">
                    <img src={t} alt="Dish 1" />
                    <h2>What Are Sushi Rolls?</h2>
                    <p>First of all, what’s sushi? Sushi is any dish that consists of vinegared rice (we call it “Sushi Rice“) combined with other ingredients such as seafood and vegetables. Some people think sushi means raw fish, but that’s not entirely true.</p>
                    <p>When the sushi rice is wrapped in nori seaweed and rolled, it is a sushi roll. In Japan, we call it Makizushi or Maki Sushi (巻き寿司). </p>
                    <h2>There are several types of sushi rolls:</h2>
                    
                    <div className = "dishes-list"><ul>
                        <li className = "dish1"><b>Hosomaki (細巻き)</b> – Thin rolls (1″ in diameter), nori on the outside, containing 1 ingredient</li>
                        <li className = "dish1"><b>Chumaki (中巻き)</b> – Medium rolls (1-1.5″ in diameter), nori on outside, containing 2-3 ingredients</li>
                        <li className = "dish1"><b>Futomaki (太巻き)</b> – Thick rolls (2-2.5″ in diameter), nori on the outside, containing 4-5 ingredients</li>
                        <li className = "dish1"><b>Uramaki (裏巻き)</b> – “Inside-out” rolls (nori on the inside – like California Roll)</li>
                        <li className = "dish1"><b>emaki (手巻き)</b> – Cone-shaped hand roll sushi – Click for Recipe</li>
                    </ul></div>
                </div>
                <div className="dish">
                    <img src={s} alt="Dish 2" />
                    <h2>Varieties of Sushi Rolls</h2>
                        
                    <h3>Traditional Edo-style Sushi Rolls</h3>
                    <p>These sushi rolls are hosomaki which consists of one main ingredient and is usually wrapped with nori on the outside. How many of these do you know or tried before?</p>
                    <ul className = "dishes-list">
                        <li className = "dish2">Tuna Roll (Tekka Maki)</li>
                        <li className = "dish2">Cucumber Roll (Kappa Maki)</li>
                        <li className = "dish2">Fermented Soybean Roll (Natto Maki)</li>
                        <li className = "dish2">Dried Gourd Roll (Kanpyo Maki)</li>
                        <li className = "dish2">Pickled Daikon Roll (Shiko Maki)</li>
                        <li className = "dish2">Pickled Plum & Cucumber Roll (Umekyu)</li>
                        <li className = "dish2">Eel/Sea Eel & Cucumber Roll (Unakyu or Anakyu Maki)</li>
                        <li className = "dish2">Tuna & Scallion Roll (Negitoro Maki)</li>
                        <li className = "dish2">Yellowtail & Scallion Roll (Negihama Maki)</li>
                    </ul>
                </div>
                <div className="dish">
                    <img src={f} alt="Dish 3" />
                    <h2>Western Style Sushi Rolls</h2>
                    <p>These sushi rolls consist of multiple ingredients and most of them are inside-out rolls (uramaki). A lot of restaurants create their own version of combinations and unique names, but here are some common ones.</p>
                </div>
            </div>     
        </>
    );
}