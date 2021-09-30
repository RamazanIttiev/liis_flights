const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const checkInDate = filtersDate =>
  new Date(filtersDate || new Date().toLocaleDateString('fr-CA')).toLocaleDateString(
    'fr-CA',
    options,
  );

export const SORT_PRICE = 'priceFrom';
export const SORT_RATING = 'stars';
