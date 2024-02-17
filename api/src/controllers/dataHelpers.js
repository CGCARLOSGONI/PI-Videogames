const processGame = (video ) => {
    return {
        id: video.id,
        name: video.name,
    description: video.description || 'Descripción no disponible',
    platforms: video.platforms.map((platform) => platform.platform.name), 
    background_image: video.background_image,
    released: video.released,
    rating: video.rating,
    genres: video.genres.map((genre) => genre.name),
     
    }
}

module.exports = processGame;