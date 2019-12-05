export interface Weather {
  temp: number;
  wind: string;
  img_src: string;
  temp_img_src: string;
  wind_img_src: string;
}
export interface Description {
  text: string;
  num_1: number;
  num_2: number;
  num_3: number;
  fb_img_src: string;
  inst_img_src: string;
  tw_img_src: string;
}
export interface Place {
  id: number;
  title: string;
  weather: Weather;
  descr: Description;
}
