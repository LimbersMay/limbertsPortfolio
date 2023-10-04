/*
    This file contains the format of the language files.

    The purpose of this file is to make sure that all language files have the same format with the same properties.
 */

export interface LanguageFormat {
    // header
    headerHome: string;
    headerAbout: string;
    headerProjects: string;
    headerSkills: string;
    headerContact: string;

    // Info card
    infoCardDescription: string;
    infoCardDownloadCV: string;
    infoCardViewGithub: string;
    infoCardTitle: string;

    // Projects section
    projectsTitle: string;
    projectsDescription: string;

    // Projects section - Project card
    projectCardViewProject: string;

    // Skills section
    skillsTitle: string;
    skillsFrontendTitle: string;
    skillsBackendTitle: string;
    skillsToolsTitle: string;
}
