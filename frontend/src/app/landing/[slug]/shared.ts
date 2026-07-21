export interface LocationData {
  slug: string;
  name: string;
  shortName: string;
  address: string;
  phone: { display: string; tel: string };
  mapsEmbed: string;
  mapsUrl: string;
}
