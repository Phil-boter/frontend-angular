import { Project } from '../interfaces/Projects';

export class ProjectModel {
    public id: number;
    public title: string;
    public title_second: string;
    public description_de: string;
    public description_en: string;
    public technology_de: string;
    public technology_en: string;
    public main_image: string;
    public images;
    public link: string;
    public host: string;
    public created_at: Date;

    constructor(
        id: number,
        title: string,
        title_second: string,
        description_de: string,
        description_en: string,
        technology_de: string,
        technology_en: string,
        main_image: string,
        images: [],
        link: string,
        host: string,
        created_at: Date
    ) {
        this.id = id;
        this.title = title;
        this.title_second = title_second;
        this.description_de = description_de;
        this.description_en = description_en;
        this.technology_de = technology_de;
        this.technology_en = technology_en;
        this.main_image = main_image;
        this.images = images;
        this.link = link;
        this.host = host;
        this.created_at = created_at;
    }

    public static createProject(project: Project) {
        return new ProjectModel(
            project.id,
            project.title,
            project.title_second,
            project.description_de,
            project.description_en,
            project.technology_de,
            project.technology_en,
            project.main_image,
            project.images,
            project.link,
            project.host,
            project.created_at
        );
    }
}
