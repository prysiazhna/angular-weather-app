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

export const places: Place[] = [
  {
    id: 1,
    title: 'Place1',
    weather: {
      temp: 10,
      wind: 'north',
      img_src: 'assets/cloud-with-snowflakes.png',
      temp_img_src: 'assets/temp.png',
      wind_img_src: 'assets/wind.png',
    },
    descr: {
      text: 'Lorem ipsum dolor sit amet 1',
      num_1: 100,
      num_2: 1100,
      num_3: 111111,
      fb_img_src: 'assets/facebook.png',
      inst_img_src: 'assets/instagram.png',
      tw_img_src: 'assets/twitter.png',
    },
  },
  {
    id: 2,
    title: 'Place2',
    weather: {
      temp: 20,
      wind: 'sourth',
      img_src: 'assets/clouds-outlined.png',
      temp_img_src: 'assets/temp.png',
      wind_img_src: 'assets/wind.png',
    },
    descr: {
      text: 'Lorem ipsum dolor sit amet 2',
      num_1: 200,
      num_2: 2200,
      num_3: 22222,
      fb_img_src: 'assets/facebook.png',
      inst_img_src: 'assets/instagram.png',
      tw_img_src: 'assets/twitter.png',
    },
  },
  {
    id: 3,
    title: 'Place3',
    weather: {
      temp: 30,
      wind: 'west',
      img_src: 'assets/sunny-day.png',
      temp_img_src: 'assets/temp.png',
      wind_img_src: 'assets/wind.png',
    },
    descr: {
      text: 'Lorem ipsum dolor sit amet 3',
      num_1: 300,
      num_2: 3300,
      num_3: 33333,
      fb_img_src: 'assets/facebook.png',
      inst_img_src: 'assets/instagram.png',
      tw_img_src: 'assets/twitter.png',
    },
  },
  {
    id: 4,
    title: 'Place4',
    weather: {
      temp: 40,
      wind: 'west',
      img_src: 'assets/storm-day.png',
      temp_img_src: 'assets/temp.png',
      wind_img_src: 'assets/wind.png',
    },
    descr: {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 4',
      num_1: 400,
      num_2: 4400,
      num_3: 44444,
      fb_img_src: 'assets/facebook.png',
      inst_img_src: 'assets/instagram.png',
      tw_img_src: 'assets/twitter.png',
    },
  },
];
