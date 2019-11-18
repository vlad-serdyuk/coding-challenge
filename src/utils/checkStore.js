import invariant from 'invariant';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  invariant(store,
    '(app/utils...) injectors: Expected a valid redux store',
  );
}