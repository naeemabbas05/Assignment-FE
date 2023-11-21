import { MetaModel } from "../models/meta-model";

export const userMeta: MetaModel[] =
    [
        {
            label: "User Name",
            mappingColumn: "userName",
            inputType: "text",
            data: []
        },
        {
            label: "Email",
            mappingColumn: "mail",
            inputType: "text",
            data: []
        },
        {
            label: "Phone Number",
            mappingColumn: "phoneNumber",
            inputType: "text",
            data: []
        },
        {
            label: "Hobby",
            mappingColumn: "hobby",
            inputType: "text",
            data: []
        },
        {
            label: "Skill Sets",
            mappingColumn: "userSkillSets",
            inputType: "multi",
            data: []
        }
    ]

