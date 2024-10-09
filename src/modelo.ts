export const PATRON: RegExp =
  ///\s*?<img\s*?src=(?<url>["']?([^"'\s>]+)["'])?[^>]*>/gm;
  ///\s*?<img\s*?src=["']?(?<url>([^"'\s>]+)["'])?[^>]*>/gm;
  ///\s*?<img\s*?src=["']?(?<url>[^"'\s>]+[^"'])?[^>]*>/gm;
  /\s*?<img\s*?src=["'](?<url>[^"'\s>]+[^"'])[^>]*>/gm;
