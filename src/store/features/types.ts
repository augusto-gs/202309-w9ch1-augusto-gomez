export interface Films extends UserFilm {
  id: number;
}

export interface UserFilm {
  name: string;
  year: number;
  image_url: string;
  duration: number;
  hasBeenSeen: boolean;
}

export default Films;
