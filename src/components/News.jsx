import { useState, useEffect } from "react";
import "./News.css"; // Importa tu archivo CSS de estilos

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNbaNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=nba&language=es&apiKey=1c2d763e2f494d36847fcccaac455b7c`);
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error("Error fetching NBA news:", error);
            }
        };

        fetchNbaNews();
    }, []);

    console.log(news);
    const nbaNews = news.filter(article => (
        article.title.toLowerCase().includes('nba') ||
        article.description.toLowerCase().includes('nba') ||
        article.content.toLowerCase().includes('nba')
    ));

    return (
        <div className="news-container"> {/* Agrega una clase para el contenedor */}
            {nbaNews.map((article, index) => (
                <div key={index} className="news-card"> {/* Agrega una clase para cada tarjeta de noticia */}
                    <img src={article.urlToImage} alt="News" className="news-image" /> {/* Agrega una clase para la imagen */}
                    <div className="news-content"> {/* Agrega una clase para el contenido */}
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Leer más</a> {/* Agrega una clase para el enlace */}
                    </div>
                </div>
            ))}
        </div>
    );
};