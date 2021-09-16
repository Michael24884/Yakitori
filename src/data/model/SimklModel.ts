type WeekDays = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface SimklItemModels {
    title: string;
    poster: string;
    ids: SimklIdModel;
}

export interface SimklHomeItemModels {
    title: string;
    art: string;
    ids: SimklIdModel;
    episode_title: string;
    episode: number;
}

interface SimklIdModel {
    simkl_id: number;
    slug: string;
}

interface SimklExtendedIdModel {
    simkl: number;
    slug: string;
    anidb: string;
    ann: string;
    mal: string;
    tmdb: string;
    crunchyroll: string;
    tvdbslug: string;
    tw: string;
}

export interface SimklDetailModel {
    title: string;
    ids?: SimklExtendedIdModel;
    en_title: string;
    alt_titles: Array<SimklAltTitlesModel>;
    rank: number;
    poster: string;
    fanart: string;
    airs: SimklAirModel;
    runtime: number;
    overview: string;
    certification: string;
    genres: Array<string>;
    country: string;
    total_episodes: number;
    status: string;
    network: string;
    anime_type: string;
}

interface SimklAirModel {
    day: WeekDays;
    time: string;
    timezone: string;
}

interface SimklAltTitlesModel {
    name: string;
    type: string;
}