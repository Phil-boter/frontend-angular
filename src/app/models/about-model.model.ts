import { AboutInfo } from "../interfaces/aboutInfo";

export class AboutModel {
    public readonly id: number;
    public info_text_de: string;
    public info_text_en: string;
    public badges: [];
    public created_at: Date;


    constructor(
        id: number,
        info_text_de: string,
        info_text_en: string,
        badges: [],
        created_at: Date,
    ) {
        this.id = id;
        this.info_text_de = info_text_de;
        this.info_text_en = info_text_en;
        this.badges = badges;
        this.created_at = created_at;
    }

    public static createAboutInfo(aboutInfo: AboutInfo) {
        return new AboutModel(
            aboutInfo.id,
            aboutInfo.info_text_de,
            aboutInfo.info_text_en,
            aboutInfo.badges,
            aboutInfo.created_at
        );
    }

    public get germanAboutText() {
        return this.info_text_de;
    }

    public set germanAboutText(value: string) {
        this.info_text_de = value;
    }

    public get englishAboutText() {
        return this.info_text_en;
    }

    public set englishAboutText(value: string) {
        this.info_text_en = value;
    }

    public get knowledgeBadges() {
        return this.badges;
    }

    public set knowledgeBadges(value: []) {
        this.badges = value;
    }
}