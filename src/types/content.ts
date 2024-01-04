import type { EntryFieldTypes } from "contentful";

export interface LongPost {
  contentTypeId: "longPost";
  fields: {
    title: EntryFieldTypes.Text;
    strapline: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    eventDate: EntryFieldTypes.Date;
  };
}

export interface ShortPost {
  contentTypeId: "shortPost";
  fields: {
    body: EntryFieldTypes.Text;
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    eventDate: EntryFieldTypes.Date;
  };
}

export interface KnowledgeArticle {
  contentTypeId: "knowledgeArticle";
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export interface EmploymentHistory {
  contentTypeId: "employmentHistory";
  fields: {
    employer: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    joinReason: EntryFieldTypes.Text;
    leaveReason: EntryFieldTypes.Text;
    employedFrom: EntryFieldTypes.Date;
    employedTo?: EntryFieldTypes.Date;
  };
}

export interface EmploymentPromotion {
  contentTypeId: "employmentPromotion";
  fields: {
    role: EntryFieldTypes.Text;
    eventDate: EntryFieldTypes.Date;
    employer: EntryFieldTypes.EntryLink<EmploymentHistory>
  };
}

export interface Project {
  contentTypeId: "project";
  fields: {
    title: EntryFieldTypes.Text;
    strapline: EntryFieldTypes.Text;
    employer: EntryFieldTypes.EntryLink<EmploymentHistory>;
    date: EntryFieldTypes.Date;
  };
}

