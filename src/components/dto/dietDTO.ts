export type dietDTO = {
  title: string;
  date: string;
  inDiet: boolean;
}

export type dietSectionDTO = {
  title: string;
  data: dietDTO[];
}