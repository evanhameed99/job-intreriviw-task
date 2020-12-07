const initialState = [
  {
    id: '000',
    name: 'Nike',
    description:
      "Just Do It (stylized as JUST DO IT. and set in Futura Bold Condensed) is a trademark of shoe company Nike, and it is one of the core components of Nike's brand. The slogan was coined in 1988 at an advertising agency meeting.",
    imgURL:
      'https://www.branding.news/wp-content/uploads/2020/06/nike-dont-do-it-cover.jpg',
  },
  {
    id: '001',
    name: 'Adidas',
    description:
      'Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike',
    imgURL:
      'https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2019/06/27172619/2_adidas_sport_performance.jpg',
  },
  {
    id: '010',
    name: 'Vans',
    description:
      'Vans is an American manufacturer of skateboarding shoes and related apparel, started in Anaheim, California, and owned by VF Corporation. The company also sponsors surf, snowboarding, BMX, and motocross teams.',
    imgURL:
      'https://seeklogo.com/images/V/vans-logo-C9E618A891-seeklogo.com.png',
  },
];

export const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BRAND':
      return [...state, action.payload];
    default:
      return state;
  }
};
