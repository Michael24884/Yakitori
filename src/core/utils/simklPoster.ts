
export type SimklImageType = 'POSTER' | 'EPISODE' | 'FANART';

export const simklPosterGenerator = (posterPath?: string, imageType: SimklImageType = 'POSTER' ) => {
    if (posterPath == null) return posterPath;
    const baseURL = "https://simkl.in";
    if (imageType == 'POSTER') return baseURL + '/posters/' + posterPath + '_ca.jpg';
    if (imageType == "FANART") return baseURL + '/fanart/' + posterPath + '_mobile.jpg';
    return baseURL + '/episodes/' + posterPath + '_w.jpg';
}