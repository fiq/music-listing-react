/**
 * transformer from artist data API to traversible structure
 * @param {object} artistData
 * @return {{artist.album}}
 */
export default function(artistData) {
    const artistLookup = {};

    artistData.map((artist) => {
        if (!artistLookup[artist.band]) {
            artistLookup[artist.band] = {};
        }

        if (!artistLookup[artist.band][artist.album]) {
            artistLookup[artist.band][artist.album] = [];
        }

        artistLookup[artist.band][artist.album].push(artist.song);
        return artist;
    });
    return artistLookup;
}