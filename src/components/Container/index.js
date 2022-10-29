import React, { useState, useEffect } from "react";
import { CardHero, Grid } from "./styles";
import api from "../../services/api";

export default function Container() {

    const [heroes, setHeroes] = useState([]);
    const [idHero, setIdHero] = useState(1)

    async function fetchHeroes(id) {
        console.log("id que entra: ", id);
        let arr = [];
        for (id; id < idHero; id++) {
            try {
                const response = await api.get(`/${id}`);
                console.log(id);
                arr.push(response.data)
                if (id === idHero) {
                    setHeroes([...heroes].concat(arr));
                    console.log("")
                }
            } catch (error) {
                console.log("erro: ", error);
            }
        }
    }

    useEffect(() => {
        fetchHeroes(idHero);
        const intersecttionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setIdHero(idHero + 25)
                console.log("id: ", idHero);

            }
        });

        intersecttionObserver.observe(document.querySelector('#sentinela'));


        return () => {
            fetchHeroes();
            intersecttionObserver.disconnect();
        }
    }, []);

    useEffect(() => {
        if (heroes.length !== 0) {
            fetchHeroes(idHero);
        }

        return () => fetchHeroes();
    }, [idHero]);


    return (
        <Grid>
            {heroes.map((hero) => {
                return (
                    <CardHero key={hero.id}>
                        <img width={150} src={hero.image.url} alt="" />
                        <span>{hero.name}</span>

                    </CardHero>
                )
            })}
            <span id="sentinela" >contador {idHero}</span>
        </Grid>
    );
}
